import { StyleSheet } from 'react-native';
import React, { useMemo } from 'react';
import { FormInputField } from '../../common/FormInputs';
import SelectionDropdown from '../../common/SelectionDropdown';
import times from 'lodash/times';
import { hp, wp } from '../../../utils/responsive';
import { View } from 'react-native-ui-lib';

const TravelTeamForm = ({
  formik,
  onSelectDropdownValue,
  statesData,
  citiesData,
}) => {
  const ageData = useMemo(() => times(5).map(i => i + 13 + '  &  Under'), []);

  return (
    <>
      <FormInputField
        containerStyle={styles.schoolNameInput}
        label={'Name'}
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
      />
      <View row centerV spread>
        <SelectionDropdown
          containerStyle={styles.dropdownWithLimitedWidth}
          title={'State'}
          value={formik.values.state}
          data={statesData?.data || []}
          onSelectItem={value => {
            onSelectDropdownValue(formik, 'state', value);
          }}
          error={formik.errors.state}
        />
        <SelectionDropdown
          containerStyle={styles.dropdownWithLimitedWidth}
          title={'City'}
          value={formik.values.city}
          data={citiesData || []}
          onSelectItem={value => {
            onSelectDropdownValue(formik, 'city', value);
          }}
          error={formik.errors.city}
        />
      </View>
      <SelectionDropdown
        containerStyle={styles.dropdownWithLimitedWidth}
        title={'Age'}
        value={formik.values.age}
        data={ageData}
        onSelectItem={value => {
          onSelectDropdownValue(formik, 'age', value);
        }}
        error={formik.errors.age}
      />
    </>
  );
};

export default TravelTeamForm;

const styles = StyleSheet.create({
  schoolNameInput: {
    flex: 0,
    marginVertical: hp(3),
    height: 'auto',
    width: '100%',
  },
  dropdownWithLimitedWidth: { width: wp(39) },
});
