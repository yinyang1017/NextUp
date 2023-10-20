import { StyleSheet } from 'react-native';
import React from 'react';
import { FormInputField } from '../../common/FormInputs';
import SelectionDropdown from '../../common/SelectionDropdown';
import { hp, wp } from '../../../utils/responsive';
import { View } from 'react-native-ui-lib';
import { customTheme } from '../../../constants';

const TravelTeamForm = ({
  formik,
  onSelectDropdownValue,
  statesData,
  citiesData,
}) => {
  return (
    <>
      <FormInputField
        containerStyle={styles.schoolNameInput}
        label={'Team Name *'}
        placeholder="Enter Team Name"
        value={formik.values.teamName}
        onChangeText={text => {
          formik.setFieldValue('teamName', text);
          formik.setFieldError(
            'teamName',
            text ? '' : 'Please enter team name',
          );
        }}
        error={formik.errors.teamName}
        onBlur={formik.handleBlur('teamName')}
        placeholderTextColor={customTheme.colors.$textNeutral}
      />
      <View row centerV spread style={{ marginVertical: hp(1) }}>
        <SelectionDropdown
          containerStyle={styles.dropdownWithLimitedWidth}
          title={'States *'}
          value={formik.values.state}
          data={statesData?.data || []}
          onSelectItem={value => {
            onSelectDropdownValue(formik, 'state', value);
          }}
          error={formik.errors.state}
          placeholder="Select State"
        />
        <SelectionDropdown
          containerStyle={styles.dropdownWithLimitedWidth}
          title={'Cities *'}
          value={formik.values.city}
          data={citiesData || []}
          onSelectItem={value => {
            onSelectDropdownValue(formik, 'city', value);
          }}
          error={formik.errors.city}
          placeholder="Select City"
        />
      </View>
      <View row centerV spread>
        <SelectionDropdown
          containerStyle={{ width: wp(40) }}
          title="Gender *"
          placeholder={'Select Gender'}
          value={formik.values.gender}
          data={['Boys', 'Girls']}
          onSelectItem={value => {
            onSelectDropdownValue(formik, 'gender', value);
          }}
          error={formik.errors.gender}
        />
        <SelectionDropdown
          containerStyle={styles.dropdownWithLimitedWidth}
          title={'Age Group *'}
          value={formik.values.ageGroup}
          data={['Jr & Varsity', 'Varsity', 'Both']}
          onSelectItem={value => {
            onSelectDropdownValue(formik, 'ageGroup', value);
          }}
          error={formik.errors.ageGroup}
          placeholder="Select Age Group"
        />
      </View>
    </>
  );
};

export default TravelTeamForm;

const styles = StyleSheet.create({
  schoolNameInput: {
    flex: 0,
    marginBottom: hp(3),
    height: 'auto',
    width: '100%',
  },
  dropdownWithLimitedWidth: { width: wp(42) },
});
