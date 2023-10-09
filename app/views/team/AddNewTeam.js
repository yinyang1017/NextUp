import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back from '../../utils/HeaderButtons/Back';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { hp, wp } from '../../utils/responsive';
import ImageUpload from '../../components/common/ImageUpload';
import { RadioButton, RadioGroup } from 'react-native-ui-lib';
import { Colors, customTheme } from '../../constants';
import SelectionDropdown from '../../components/common/SelectionDropdown';
import PrimaryButton from '../../components/common/PrimaryButton';
import {
  useGetListOfClasses,
  useGetListOfSchools,
  useGetListOfStatesAndCities,
} from '../../api/onboarding.api';
import { FormInputField } from '../../components/common/FormInputs';

const AddNewTeam = () => {
  const navigation = useNavigation();
  const isFocus = useIsFocused();

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedHighSchoolCoaching, setSelectedHighSchoolCoaching] =
    useState(' ');

  const { data: schoolsData, mutate: getListOfSchools } = useGetListOfSchools();
  const { data: classesData, mutate: getListOfClasses } = useGetListOfClasses();
  const { data: stateAndCitiesData, mutate: getListOfStatesAndCities } =
    useGetListOfStatesAndCities();

  const [selectedOption, setSelectedOption] = useState('highSchool');

  useEffect(() => {
    if (isFocus) {
      getListOfSchools();
      getListOfClasses();
      getListOfStatesAndCities();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocus]);

  const HighSchoolForm = useCallback(() => {
    return (
      <>
        <SelectionDropdown
          containerStyle={{ marginTop: hp(4) }}
          title={'Select Coaching'}
          value={selectedHighSchoolCoaching}
          data={schoolsData?.data || []}
          renderItem={(item, index) => {
            return (
              <TouchableOpacity
                style={styles.dataItem}
                onPress={() => {
                  setSelectedHighSchoolCoaching(item.name);
                }}>
                <Text style={styles.dataTitle}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <SelectionDropdown
          containerStyle={{ marginTop: hp(3) }}
          title={'Select Team'}
          value={selectedYear}
          data={classesData?.data || []}
          onChange={setSelectedYear}
          renderItem={(item, index) => {
            return (
              <TouchableOpacity
                style={styles.dataItem}
                onPress={() => {
                  setSelectedYear(item);
                }}>
                <Text style={styles.dataTitle}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </>
    );
  }, [
    schoolsData,
    selectedYear,
    classesData,
    selectedHighSchoolCoaching,
    setSelectedYear,
  ]);

  const TravelTeamForm = useCallback(() => {
    return (
      <>
        <FormInputField
          containerStyle={{ flex: 0, marginTop: hp(4) }}
          label={'Name'}
          value={'ABC School'}
        />
        <View style={styles.rowCenterSpaceBetween}>
          <SelectionDropdown
            containerStyle={styles.dropdownWithLimitedWidth}
            title={'State'}
            value={'ABC School'}
          />
          <SelectionDropdown
            containerStyle={styles.dropdownWithLimitedWidth}
            title={'City'}
            value={'Albemarle School'}
          />
        </View>
        <SelectionDropdown
          containerStyle={styles.dropdownWithLimitedWidth}
          title={'Age'}
          value={'25'}
        />
      </>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Back
        onPress={() => navigation.goBack()}
        containerStyle={styles.backButtonContainer}
        title="Add New Team"
      />
      <ImageUpload
        source={{
          uri: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        }}
        containerStyle={styles.imageUploadContainer}
      />
      <View style={styles.selectOptionsContainer}>
        <Text style={styles.selectOptionText}>Option</Text>
        <RadioGroup
          style={styles.radioGroup}
          initialValue={selectedOption}
          onValueChange={setSelectedOption}>
          <RadioButton
            value={'highSchool'}
            label={'High School'}
            color={customTheme.colors.btnBg}
            size={wp(5)}
            labelStyle={
              selectedOption === 'highSchool'
                ? styles.selectedRadioButtonLabel
                : styles.radioButtonLabel
            }
          />
          <RadioButton
            value={'travelTeam'}
            label={'Travel Team'}
            color={customTheme.colors.btnBg}
            size={wp(5)}
            labelStyle={
              selectedOption === 'travelTeam'
                ? styles.selectedRadioButtonLabel
                : styles.radioButtonLabel
            }
          />
        </RadioGroup>

        {selectedOption === 'highSchool' ? (
          <HighSchoolForm />
        ) : (
          <TravelTeamForm />
        )}
      </View>

      <PrimaryButton title={'Save'} style={styles.saveButton} />
    </SafeAreaView>
  );
};

export default AddNewTeam;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backButtonContainer: { marginHorizontal: wp(5), marginTop: hp(3) },
  imageUploadContainer: { alignSelf: 'center', marginTop: hp(5) },
  selectOptionsContainer: {
    marginHorizontal: wp(8),
    marginTop: hp(2),
  },
  selectOptionText: {
    marginVertical: hp(1.5),
    color: customTheme.colors.txtFieldPlaceHolder,
    textTransform: 'uppercase',
    fontSize: customTheme.fontSizes.size_12,
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontWeight: '700',
  },
  selectedRadioButtonLabel: {
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontSize: customTheme.fontSizes.size_16,
    fontWeight: '600',
    color: Colors.light,
  },
  radioButtonLabel: {
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontSize: customTheme.fontSizes.size_16,
    color: Colors.light + '70',
    fontWeight: '600',
  },
  radioGroup: { flexDirection: 'row', gap: wp(7) },
  rowCenterSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownWithLimitedWidth: { marginTop: hp(3), width: wp(39) },
  saveButton: {
    marginHorizontal: wp(8),
    marginTop: 'auto',
    marginBottom: hp(2),
  },
  dataTitle: {
    marginHorizontal: wp(4),
    marginVertical: hp(2),
    fontSize: customTheme.fontSizes.size_16,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  dataItem: {
    borderBottomWidth: 1,
    borderBottomColor: customTheme.colors.slate_gray,
  },
});
