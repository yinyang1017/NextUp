import { useFormik } from 'formik';
import { Platform } from 'react-native';
import Share from 'react-native-share';
import * as Yup from 'yup';
import { useInviteOutsidePlayer } from '../api/myteam.api';
import { useAuth } from './useAuth';
import { getInvitePlayerDynamicLink, getSeasonString } from '../utils/helper';
import { useNavigation } from '@react-navigation/native';
import { errorToast } from '../utils/toast';
import { useState } from 'react';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Please enter full name'),
  email: Yup.string()
    .required('Please enter email')
    .email('Please enter a valid email'),
  phoneNumber: Yup.string()
    .required('Please enter phone number')
    .length(10, 'Phone number should be 10 characters long'),
});

const useInviteOutsidePlayers = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const { mutateAsync: inviteOutsidePlayerMutation } = useInviteOutsidePlayer();

  const onSubmitHandler = async data => {
    try {
      setLoading(true);
      const inviteLink = await getInvitePlayerDynamicLink(user?.id);
      const invitePlayerPayload = {
        fullName: data?.fullName || null,
        emailId: data?.email || null,
        contactNumber: data?.phoneNumber || null,
        seasonName: getSeasonString(),
        sharedLink: inviteLink,
        positionIndex: 0,
        teamPositionIndex: 0,
      };
      console.log("🚀 ~ file: useInviteOutsidePlayers.js:42 ~ onSubmitHandler ~ invitePlayerPayload:", invitePlayerPayload, user?.id)

      const response = await inviteOutsidePlayerMutation({
        userId: user?.id,
        payload: invitePlayerPayload,
      });

      if (response.success && !response.error) {
        // successToast({ title: 'Success', body: 'Player invited successfully' });
        navigation.goBack();
      } else {
        throw new Error('Fail');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      errorToast({
        title: 'Error',
        body: 'Failed to invite player! Please try again after some time',
      });
    }
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: { fullName: '', email: '', phoneNumber: '' },
      onSubmit: onSubmitHandler,
      validationSchema: validationSchema,
    });

  const onPressShareHandler = () => {
    const url = 'https://awesome.contents.com/';
    const title = 'Nextup';
    const subTitle = 'Invite friend';

    const options = Platform.select({
      ios: {
        activityItemSources: [
          {
            placeholderItem: { type: 'url', content: subTitle },
            item: { default: { type: 'text', content: url } },
            linkMetadata: { title },
          },
        ],
      },
      default: { title, subject: title, message: `${url}` },
    });

    try {
      Share.open(options);
    } catch (error) {}
  };

  return {
    onPressShareHandler,
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    loading,
  };
};

export default useInviteOutsidePlayers;
