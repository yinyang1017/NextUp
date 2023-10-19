import { StyleSheet } from 'react-native';
import React, { memo } from 'react';
import { customTheme } from '../../../constants';
import { Picker } from 'react-native-ui-lib';
import SelectionDropdown from '../../common/SelectionDropdown';
import { hp } from '../../../utils/responsive';

const HighSchoolForm = ({
  onSelectDropdownValue,
  formik,
  schoolsData,
  classesData,
}) => {
  const renderSchoolItem = item => {
    const name = item.name;
    const color = customTheme.colors.light;
    return (
      <Picker.Item
        key={item.name}
        onPress={() => {
          onSelectDropdownValue(formik, 'school', name);
        }}
        label={name}
        value={name}
        selectedIconColor={color}
        labelStyle={{ color }}
      />
    );
  };

  return (
    <>
      <SelectionDropdown
        containerStyle={styles.highSchoolDropdownContainer}
        title={'Select School'}
        value={formik.values.school}
        data={schoolsData?.data || []}
        renderItem={renderSchoolItem}
        error={formik.errors.school}
      />
      <SelectionDropdown
        containerStyle={styles.highSchoolDropdownContainer}
        title={'Select Team'}
        value={formik.values.teamYear}
        data={classesData?.data || []}
        onSelectItem={value => {
          onSelectDropdownValue(formik, 'teamYear', value);
        }}
        error={formik.errors.teamYear}
      />
    </>
  );
};

export default memo(HighSchoolForm);

const styles = StyleSheet.create({
  highSchoolDropdownContainer: { marginTop: hp(3) },
});
