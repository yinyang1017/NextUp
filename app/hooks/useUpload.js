import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { errorToast, successToast } from '../utils/toast';
import axios from 'axios';
import { useState } from 'react';
const BASE_URL = 'http://34.134.29.128:8081/v1';
// import RNFetchBlob from 'react-native-fetch-blob';
/**
 * A hook that handles document upload functionality.
 *
 * @param {Object} initialData - The initial data.
 * @return {Object} An object with functions to pick and scan documents.
 */
export const useUpload = () => {
  const [isUploading, setIsUploading] = useState({
    loading: false,
    type: null,
  });
  /**
   * Make an API request to upload a file using axios.
   *
   * @param {Object} data - The data object containing ref, refId, and file.
   * @return {Promise} A promise that resolves with the response or rejects with an error.
   */
  const makeUploadApiRequest = async data => {
    // Create a new FormData object and append the required data
    // let formData = new FormData();
    // formData.append('ref', data.ref);
    // formData.append('refId', data.refId);
    // formData.append('file', data.file.uri);

    // // Make the API request using axios
    return await axios({
      method: 'POST',
      url: BASE_URL + '/storage/upload/image',
      maxBodyLength: Infinity,
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: '*',
      },
      data: data,
      onUploadProgress: progressEvent => {
        setUploadProgress(
          Math.floor(progressEvent.loaded / progressEvent.total),
        );
      },
    })
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  };

  /**
   * Handle the upload of a file.
   *
   * @param {Object} resp - The response object from picking or scanning a document.
   */
  const handleUpload = async resp => {
    const file = resp?.assets[0];
    setIsUploading({
      loading: true,
      type: 'Adding the document...',
    });
    try {
      if (file) {
        const formData = new FormData();
        formData.append('file', {
          uri: file.uri,
          name: file.fileName,
          type: file.type,
        });
        const resp = await makeUploadApiRequest(formData);
        if (resp?.error) {
          throw new Error('Cannot upload file. Please try again.');
        }
        if (resp?.data) {
          successToast({
            title: 'Success',
            body: 'File uploaded successfully',
          });
          setUploadedDocument(resp?.data);
        }
      } else {
        throw new Error('No file selected');
      }
    } catch (error) {
      errorToast({
        title: 'Error',
        body: 'Please select the document to continue',
      });
    } finally {
      // Perform any necessary cleanup
      setIsUploading({
        loading: false,
        type: null,
      });
    }
  };

  /**
   * Pick a document from the image library and handle the upload.
   */
  const pickDocument = async () => {
    const resp = await launchImageLibrary();
    if (resp?.didCancel) {
      errorToast({
        title: 'SELECT DOC',
        body: 'Please select the document to continue',
      });
      return;
    }
    handleUpload(resp);
  };

  /**
   * Scan a document using the camera and handle the upload.
   */
  const scanDocument = async () => {
    const resp = await launchCamera({
      includeBase64: true,
    });
    console.log(resp, 'thtis ');
    if (resp?.didCancel) {
      // errorToast({
      //     title: 'SELECT DOC',
      //     body: 'Please select the document to continue'
      // });
      return;
    }
    handleUpload(resp);
  };

  // Return an object with the pickDocument and scanDocument functions
  return {
    isUploading,
    pickDocument,
    scanDocument,
  };
};
