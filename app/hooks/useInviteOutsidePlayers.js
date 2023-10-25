import { useFormik } from 'formik';
import { Platform } from 'react-native';
import Share from 'react-native-share';
import * as Yup from 'yup';
import { useInviteOutsidePlayer } from '../api/myteam.api';
import { useAuth } from './useAuth';
import { getSeasonString } from '../utils/helper';
import { useNavigation } from '@react-navigation/native';
import { errorToast, successToast } from '../utils/toast';

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

  const { mutateAsync: inviteOutsidePlayerMutation, isLoading } =
    useInviteOutsidePlayer();

  const onSubmitHandler = async data => {
    try {
      const invitePlayerPayload = {
        fullName: data?.fullName || null,
        emailId: data?.email || null,
        contactNumber: data?.phoneNumber || null,
        seasonName: getSeasonString(),
        sharedLink: null, // TODO: confirm what data to send
        playerPositions: 'POINT_GUARD', // TODO: confirm what data to send
        teamPositionIndex: 0, // TODO: confirm what data to send
      };
      console.log(
        '🚀 ~ file: useInviteOutsidePlayers.js:40 ~ onSubmitHandler ~ invitePlayerPayload:',
        invitePlayerPayload,
      );

      // const response = await inviteOutsidePlayerMutation({
      //   userId: user?.id,
      //   payload: invitePlayerPayload,
      // });

      // TODO : Replace this with real response
      const response = { success: true, error: null, data: 12345 };

      if (response.success && !response.error) {
        successToast({ title: 'Success', body: 'Player invited successfully' });
        navigation.goBack();
      } else {
        throw new Error('Fail');
      }
    } catch (error) {
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
    isLoading,
  };
};

export default useInviteOutsidePlayers;
