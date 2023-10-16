import { StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Back from '../../utils/HeaderButtons/Back';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { hp, wp } from '../../utils/responsive';
import ImageUpload from '../../components/common/ImageUpload';
import { Picker } from 'react-native-ui-lib';
import { customTheme } from '../../constants';
import SelectionDropdown from '../../components/common/SelectionDropdown';
import PrimaryButton from '../../components/common/PrimaryButton';
import {
  useGetListOfClasses,
  useGetListOfSchools,
  useGetListOfStatesAndCities,
} from '../../api/onboarding.api';
import {
  FormInputField,
  FormRadioGroup,
} from '../../components/common/FormInputs';
import { times } from 'lodash';

const AddNewTeam = () => {
  const navigation = useNavigation();
  const isFocus = useIsFocused();

  // High School Option
  const [selectedTeamYear, setSelectedTeamYear] = useState(' ');
  const [selectedHighSchoolCoaching, setSelectedHighSchoolCoaching] =
    useState(' ');

  // Travel Team Option
  const [selectedState, setSelectedState] = useState(' ');
  const [selectedCity, setSelectedCity] = useState(' ');
  const [citiesData, setCitiesData] = useState([]);
  const [selectedAge, setSelectedAge] = useState(' ');

  const { data: schoolsData, mutate: getListOfSchools } = useGetListOfSchools();
  const { data: classesData, mutate: getListOfClasses } = useGetListOfClasses();
  const { data: statesData, mutate: getListOfStates } =
    useGetListOfStatesAndCities();
  const { mutate: getListOfCities } = useGetListOfStatesAndCities();

  const [selectedOption, setSelectedOption] = useState('highSchool');

  useEffect(() => {
    if (isFocus) {
      getListOfSchools();
      getListOfClasses();
      getListOfStates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocus]);

  useEffect(() => {
    if (selectedState) {
      setSelectedCity(' ');
      getListOfCities(
        { state: selectedState },
        { onSuccess: data => setCitiesData(data.data) },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedState]);

  const ageData = useMemo(() => times(5).map(i => i + 13 + '  &  Under'), []);

  const HighSchoolForm = useCallback(() => {
    return (
      <>
        <SelectionDropdown
          containerStyle={{ marginTop: hp(4) }}
          title={'Select School'}
          value={selectedHighSchoolCoaching}
          data={schoolsData?.data || []}
          renderItem={item => {
            return (
              <Picker.Item
                onPress={() => {
                  setSelectedHighSchoolCoaching(item.name);
                }}
                label={item.name}
                value={item.name}
              />
            );
          }}
        />
        <SelectionDropdown
          containerStyle={{ marginTop: hp(3) }}
          title={'Select Team'}
          value={selectedTeamYear}
          data={classesData?.data || []}
          onSelectItem={setSelectedTeamYear}
        />
      </>
    );
  }, [
    schoolsData,
    selectedTeamYear,
    classesData,
    selectedHighSchoolCoaching,
    setSelectedTeamYear,
  ]);

  const TravelTeamForm = useCallback(() => {
    return (
      <>
        <FormInputField
          containerStyle={styles.schoolNameInput}
          label={'Name'}
          value={'ABC School'}
        />
        <View style={styles.rowCenterSpaceBetween}>
          <SelectionDropdown
            containerStyle={styles.dropdownWithLimitedWidth}
            title={'State'}
            value={selectedState}
            data={statesData?.data || []}
            onSelectItem={setSelectedState}
          />
          <SelectionDropdown
            containerStyle={styles.dropdownWithLimitedWidth}
            title={'City'}
            value={selectedCity}
            data={citiesData || []}
            onSelectItem={setSelectedCity}
          />
        </View>
        <SelectionDropdown
          containerStyle={styles.dropdownWithLimitedWidth}
          title={'Age'}
          value={selectedAge}
          data={ageData}
          onSelectItem={setSelectedAge}
        />
      </>
    );
  }, [
    ageData,
    citiesData,
    selectedAge,
    selectedCity,
    selectedState,
    statesData,
  ]);

  return (
    <View style={styles.container}>
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
        <FormRadioGroup
          label="option"
          radioValues={[
            { label: 'High School', value: 'highSchool' },
            { label: 'Travel Team', value: 'travelTeam' },
          ]}
          value={selectedOption}
          onValueChange={setSelectedOption}
        />

        {selectedOption === 'highSchool' ? (
          <HighSchoolForm />
        ) : (
          <TravelTeamForm />
        )}
      </View>

      <PrimaryButton title={'Save'} style={styles.saveButton} />
    </View>
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
  schoolNameInput: { flex: 0, marginTop: hp(4), height: 'auto' },
});
