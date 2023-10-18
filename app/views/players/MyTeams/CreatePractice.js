import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Back from '../../../utils/HeaderButtons/Back';
import { hp, wp } from '../../../utils/responsive';
import { FormInputField } from '../../../components/common/FormInputs';
import PrimaryButton from '../../../components/common/PrimaryButton';
import SetTimeModal, {
  getStaticTimeData,
} from '../../../components/common/SetTimeModal';
import moment from 'moment';
import CalendarModal from '../../../components/common/CalendarModal';
import SelectionDropdown from '../../../components/common/SelectionDropdown';
import { View } from 'react-native-ui-lib';

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
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [selectedDate, setSelectedDate] = useState();

  const [timeModalData, setTimeModalData] = useState({
    isTimeSelected: false,
    selectedData: null,
    currentTimeData: getInitialTimeData(),
  });

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
    <View flex>
      <Back title="Create Practice" containerStyle={styles.back} />
      <View style={styles.dropdownSelectionBody}>
        <SelectionDropdown title={'Location'} />
        <View row centerV spread style={styles.datTimeRowDropdown}>
          <SelectionDropdown
            title={'Date'}
            isPicker={false}
            onPressValue={openDateCalendarHandler}
            containerStyle={styles.dateTimeDropdown}
            value={dateValue}
          />
          <SelectionDropdown
            title={'Time'}
            isPicker={false}
            onPressValue={openTimePickerHandler}
            containerStyle={styles.dateTimeDropdown}
            value={timeValue}
          />
        </View>
        <FormInputField label={'Tag'} containerStyle={styles.tagInput} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  back: { marginTop: hp(2), marginLeft: wp(5) },
  button: { marginHorizontal: wp(8), marginTop: 'auto', marginBottom: hp(4) },
  dropdownSelectionBody: {
    marginHorizontal: wp(6),
    marginTop: hp(5),
    rowGap: hp(5),
  },
  datTimeRowDropdown: { columnGap: wp(4) },
  dateTimeDropdown: { flex: 1 },
  tagInput: { flex: 0, marginTop: 0, marginRight: 0, height: 'auto' },
});
