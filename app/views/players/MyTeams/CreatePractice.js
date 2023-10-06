import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Back from '../../../utils/HeaderButtons/Back';
import { hp, wp } from '../../../utils/responsive';
import {
  FormInputField,
  FormInputPicker,
} from '../../../components/common/FormInputs';
import PrimaryButton from '../../../components/common/PrimaryButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import SetTimeModal, {
  getStaticTimeData,
} from '../../../components/common/SetTimeModal';
import moment from 'moment';
import CalendarModal from '../../../components/common/CalendarModal';

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

  const hourIndex = timeData.hours.findIndex(
    i => i === String(currentHour).padStart(2, '0'),
  );

  const minuteIndex = timeData.minutes.findIndex(
    i => i === String(currentMinutes).padStart(2, '0'),
  );

  const secondsIndex = timeData.seconds.findIndex(
    i => i === String(currentSeconds).padStart(2, '0'),
  );

  const timeTypeIndex = timeData.timeTypes.findIndex(
    i => i === currentTimeType,
  );

  const newData = {
    selectedHour: {
      data: String(currentHour).padStart(2, '0'),
      index: hourIndex,
    },
    selectedMinute: {
      data: String(currentMinutes).padStart(2, '0'),
      index: minuteIndex,
    },
    selectedSecond: {
      data: String(currentSeconds).padStart(2, '0'),
      index: secondsIndex,
    },
    selectedTimeType: {
      data: currentTimeType,
      index: timeTypeIndex,
    },
  };

  return newData;
};

export const CreatePractice = () => {
  const navigation = useNavigation();

  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [selectedDate, setSelectedDate] = useState();

  const [timeModalData, setTimeModalData] = useState({
    isTimeSelected: false,
    selectedData: null,
    currentTimeData: getInitialTimeData(),
  });

  const gobackHandler = () => {
    navigation.goBack();
  };

  const openTimePickerHandler = () => {
    setTimeModalData(prevValue => ({
      ...prevValue,
      currentTimeData: getInitialTimeData(),
    }));
    setShowTimePicker(true);
  };

  const onConfirmTimeHandler = data => {
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
    ? `${timeModalData.selectedData?.selectedHour?.data}:${timeModalData.selectedData?.selectedMinute?.data} ${timeModalData.selectedData?.selectedTimeType?.data}`
    : 'Select time';

  const dateValue = selectedDate
    ? selectedDate.format('DD MMMM YYYY')
    : 'Select date';

  return (
    <SafeAreaView style={styles.container}>
      <Back
        title="Create Practice"
        containerStyle={styles.back}
        onPress={gobackHandler}
      />
      <View style={styles.dropdownSelectionBody}>
        <FormInputPicker
          label={'Location'}
          rootContainerStyle={styles.locationDropdown}
        />
        <View style={styles.datTimeRowDropdown}>
          <View style={styles.dateTimeDropdownContainer}>
            <TouchableOpacity
              onPress={openDateCalendarHandler}
              style={styles.transparentTouchbaleOverlay}
            />
            <FormInputPicker
              label={'date'}
              rootContainerStyle={styles.locationDropdown}
              value={dateValue}
            />
          </View>
          <View style={styles.dateTimeDropdownContainer}>
            <TouchableOpacity
              onPress={openTimePickerHandler}
              style={styles.transparentTouchbaleOverlay}
            />
            <FormInputPicker
              label={'Time'}
              rootContainerStyle={styles.locationDropdown}
              value={timeValue}
            />
          </View>
        </View>
        <FormInputField label={'Tag'} />
      </View>
      <PrimaryButton style={styles.button} title={'Schedule'} />
      <SetTimeModal
        isVisible={showTimePicker}
        setIsVisible={setShowTimePicker}
        initialData={
          timeModalData.isTimeSelected
            ? timeModalData.selectedData
            : timeModalData.currentTimeData
        }
        onConfirmTime={onConfirmTimeHandler}
      />
      <CalendarModal
        isVisible={showDatePicker}
        setIsVisible={setShowDatePicker}
        onSelectDate={date => {
          setShowDatePicker(false);
          setSelectedDate(moment(date.timestamp));
        }}
        selectedDate={selectedDate ? selectedDate.format('YYYY-MM-DD') : ''}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  back: { marginTop: hp(2), marginLeft: wp(5) },
  button: { marginHorizontal: wp(8), marginTop: 'auto', marginBottom: hp(4) },
  dropdownSelectionBody: { marginHorizontal: wp(6), marginTop: wp(7) },
  locationDropdown: { flex: 0 },
  datTimeRowDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  transparentTouchbaleOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
  },
  dateTimeDropdownContainer: { width: '50%' },
});
