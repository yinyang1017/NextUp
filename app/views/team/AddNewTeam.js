import { StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Back from '../../utils/HeaderButtons/Back';
import { useIsFocused } from '@react-navigation/native';
import { hp, wp } from '../../utils/responsive';
import ImageUpload from '../../components/common/ImageUpload';
import { KeyboardAwareScrollView, Picker, View } from 'react-native-ui-lib';
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
import times from 'lodash/times';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';

const AddNewTeam = () => {
  const isFocus = useIsFocused();
  const { bottom } = useSafeAreaInsets();

  const [profileImage, setProfileImage] = useState(
    'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  );

  const highSchoolForm = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const travelTeamForm = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  // Travel Team Option
  const [citiesData, setCitiesData] = useState([]);

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

  const travelTeamWatchValues = travelTeamForm.watch(['state']);

  useEffect(() => {
    if (travelTeamWatchValues[0]) {
      travelTeamForm.setValue('city', ' ');
      getListOfCities(
        { state: travelTeamWatchValues[0] },
        { onSuccess: data => setCitiesData(data.data) },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [travelTeamWatchValues[0]]);

  const ageData = useMemo(() => times(5).map(i => i + 13 + '  &  Under'), []);
  const isHighSchoolSelected = selectedOption === 'highSchool';

  const _tmpTravelTeamValues = travelTeamForm.watch(['teamName']);

  const HighSchoolForm = useCallback(() => {
    const renderSchoolItem = item => {
      const name = item.name;
      const color = customTheme.colors.light;

      return (
        <Picker.Item
          key={item.name}
          onPress={() => highSchoolForm.setValue('school', name)}
          label={name}
          value={name}
          selectedIconColor={color}
          labelStyle={{ color }}
        />
      );
    };

    return (
      <>
        <Controller
          name="school"
          control={highSchoolForm.control}
          rules={{ required: 'Please select School' }}
          render={({ field: { value }, fieldState: { error } }) => (
            <SelectionDropdown
              containerStyle={styles.highSchoolDropdownContainer}
              title={'Select School'}
              value={value}
              data={schoolsData?.data || []}
              renderItem={renderSchoolItem}
              error={error?.message}
            />
          )}
        />
        <Controller
          name="teamYear"
          control={highSchoolForm.control}
          rules={{ required: 'Please select Team' }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <SelectionDropdown
              containerStyle={styles.highSchoolDropdownContainer}
              title={'Select Team'}
              value={value}
              data={classesData?.data || []}
              onSelectItem={onChange}
              error={error?.message}
            />
          )}
        />
      </>
    );
  }, [schoolsData, classesData, highSchoolForm]);

  const TravelTeamForm = useCallback(() => {
    return (
      <>
        <Controller
          name="teamName"
          control={travelTeamForm.control}
          rules={{ required: 'Please enter team name' }}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            return (
              <FormInputField
                containerStyle={styles.schoolNameInput}
                label={'Name'}
                // value={_tmpTravelTeamValues[0] || ''}
                onChangeText={text => travelTeamForm.setValue('teamName', text)}
                error={error?.message}
              />
            );
          }}
        />
        <View row centerV spread>
          <Controller
            name="state"
            control={travelTeamForm.control}
            rules={{ required: 'Please select state' }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <SelectionDropdown
                containerStyle={styles.dropdownWithLimitedWidth}
                title={'State'}
                value={value}
                data={statesData?.data || []}
                onSelectItem={onChange}
                error={error?.message}
              />
            )}
          />
          <Controller
            name="city"
            control={travelTeamForm.control}
            rules={{ required: 'Please select city' }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <SelectionDropdown
                containerStyle={styles.dropdownWithLimitedWidth}
                title={'City'}
                value={value}
                data={citiesData || []}
                onSelectItem={onChange}
                error={error?.message}
              />
            )}
          />
        </View>
        <Controller
          name="age"
          control={travelTeamForm.control}
          rules={{ required: 'Please select age group' }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <SelectionDropdown
              containerStyle={styles.dropdownWithLimitedWidth}
              title={'Age'}
              value={value}
              data={ageData}
              onSelectItem={onChange}
              error={error?.message}
            />
          )}
        />
      </>
    );
  }, [ageData, citiesData, statesData, travelTeamForm]);

  const onSelectProfileImageHandler = imageResponse => {
    const newUri = imageResponse?.assets?.[0]?.uri || '';
    setProfileImage(newUri);
  };

  const onSubmitFormHandler = (data, isHighSchool) => {
    console.log('~ onSubmitFormHandler ~ data:', data);
    if (isHighSchool) {
      // ... Add HighSchool Team API
    } else {
      // ... Add Travel Team API
    }
  };

  const onPressSaveHandler = isHighSchoolSelected
    ? highSchoolForm.handleSubmit(data => onSubmitFormHandler(data, true))
    : travelTeamForm.handleSubmit(data => onSubmitFormHandler(data, false));

  return (
    <View flex>
      <Back containerStyle={styles.backButtonContainer} title="Add New Team" />
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{ flex: 1, paddingBottom: bottom }}>
        <ImageUpload
          source={{ uri: profileImage }}
          containerStyle={styles.imageUploadContainer}
          onSelectImage={onSelectProfileImageHandler}
        />
        <View style={styles.selectOptionsContainer}>
          <FormRadioGroup
            label="option"
            radioValues={[
              { label: 'High School', value: 'highSchool' },
              { label: 'Travel Team', value: 'travelTeam' },
            ]}
            value={selectedOption}
            onValueChange={value => {
              if (value === 'travelTeam') {
                highSchoolForm.clearErrors();
              } else {
                travelTeamForm.clearErrors();
              }

              setSelectedOption(value);
            }}
          />
          {isHighSchoolSelected ? HighSchoolForm() : TravelTeamForm()}
        </View>
        <PrimaryButton
          title={'Save'}
          style={styles.saveButton}
          onPress={onPressSaveHandler}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddNewTeam;

const styles = StyleSheet.create({
  backButtonContainer: { marginHorizontal: wp(5), marginTop: hp(3) },
  imageUploadContainer: { alignSelf: 'center', marginTop: hp(5) },
  selectOptionsContainer: { marginHorizontal: wp(8), marginTop: hp(2) },
  dropdownWithLimitedWidth: { marginTop: hp(3), width: wp(39) },
  saveButton: {
    marginHorizontal: wp(8),
    marginTop: 'auto',
    marginBottom: hp(2),
  },
  schoolNameInput: { flex: 0, marginTop: hp(3), height: 'auto' },
  highSchoolDropdownContainer: { marginTop: hp(3) },
});
