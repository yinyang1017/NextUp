import moment from 'moment';
import { getStaticTimeData } from '../components/common/SetTimeModal';
import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const padTime = val => String(val).padStart(2, '0');

const getInitialTimeData = () => {
  const timeData = getStaticTimeData();

  const currentDateMoment = moment();
  const currentHour =
    currentDateMoment.get('h') > 12
      ? currentDateMoment.get('h') - 12
      : currentDateMoment.get('h');
  const currentMinutes = currentDateMoment.get('minutes');
  const currentSeconds = currentDateMoment.get('seconds');
  const currentTimeType = currentDateMoment.format('A');

  const hourIndex = timeData.hours.findIndex(i => i === padTime(currentHour));
  const minuteIndex = timeData.minutes.findIndex(
    i => i === padTime(currentMinutes),
  );
  const secondsIndex = timeData.seconds.findIndex(
    i => i === padTime(currentSeconds),
  );
  const timeTypeIndex = timeData.timeTypes.findIndex(
    i => i === currentTimeType,
  );

  const newData = {
    selectedHour: { data: padTime(currentHour), index: hourIndex },
    selectedMinute: { data: padTime(currentMinutes), index: minuteIndex },
    selectedSecond: { data: padTime(currentSeconds), index: secondsIndex },
    selectedTimeType: { data: currentTimeType, index: timeTypeIndex },
  };

  return newData;
};

const practiceSchema = Yup.object().shape({
  location: Yup.string().required('Please select location'),
  date: Yup.string().required('Please select date'),
  time: Yup.string().required('Please select time'),
  tag: Yup.string().required('Please enter tags'),
});

const useCreatePractice = () => {
  const navigation = useNavigation();

  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [timeModalData, setTimeModalData] = useState({
    isTimeSelected: false,
    selectedData: null,
    currentTimeData: getInitialTimeData(),
  });

  const { values, setFieldValue, setFieldError, errors, handleSubmit } =
    useFormik({
      initialValues: {
        location: '',
        date: '',
        time: '',
        tag: '',
        locationExtraData: {},
      },
      onSubmit: formData => {
        console.log(' ~ formData:', formData);
        Alert.alert('Success');
      },
      validationSchema: practiceSchema,
      validateOnBlur: false,
      validateOnChange: false,
    });

  const openTimePickerHandler = () => {
    setTimeModalData(prevValue => ({
      ...prevValue,
      currentTimeData: getInitialTimeData(),
    }));
    setShowTimePicker(true);
  };

  const getSelectedTimeString = data => {
    return `${data?.selectedHour?.data}:${data?.selectedMinute?.data} ${data?.selectedTimeType?.data}`;
  };

  const onConfirmTimeHandler = data => {
    setFieldValue('time', getSelectedTimeString(data));
    setFieldError('time', '');
    setTimeModalData(prevValue => ({
      ...prevValue,
      isTimeSelected: true,
      selectedData: data,
    }));
  };

  const openDateCalendarHandler = () => {
    setShowDatePicker(true);
  };

  const timeValue = timeModalData.isTimeSelected
    ? getSelectedTimeString(timeModalData.selectedData)
    : '';

  const dateValue = values.date ? values.date.format('DD MMMM YYYY') : '';

  const timeModalInitialData = timeModalData.isTimeSelected
    ? timeModalData.selectedData
    : timeModalData.currentTimeData;

  const onSelectDateHandler = date => {
    setShowDatePicker(false);
    setFieldValue('date', moment(date.timestamp));
    setFieldError('date', '');
  };

  const selectedCalendarDate = values.date
    ? values.date.format('YYYY-MM-DD')
    : '';

  const onChangeTagHandler = text => {
    setFieldValue('tag', text);
    setFieldError('tag', text ? '' : 'Please enter tags');
  };

  const onSelectLocation = (locationData, locationExtraDetails) => {
    const locationString = locationData?.description || '';
    setFieldValue('location', locationString);
    setFieldError('location', locationString ? '' : 'Please select location');
    setFieldValue('locationExtraData', {
      locationData,
      locationExtraDetails,
    });
  };

  const onPressLocation = () => {
    navigation.navigate('GoogleAutoCompleteScreen', { onSelectLocation });
  };

  return {
    errors,
    openDateCalendarHandler,
    dateValue,
    openTimePickerHandler,
    timeValue,
    onChangeTagHandler,
    handleSubmit,
    showTimePicker,
    setShowTimePicker,
    timeModalInitialData,
    onConfirmTimeHandler,
    showDatePicker,
    setShowDatePicker,
    onSelectDateHandler,
    selectedCalendarDate,
    onPressLocation,
    values,
  };
};

export default useCreatePractice;
