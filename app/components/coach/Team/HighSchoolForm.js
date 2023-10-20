import { StyleSheet } from 'react-native';
import React, { memo } from 'react';
import { customTheme } from '../../../constants';
import { Picker, View } from 'react-native-ui-lib';
import SelectionDropdown from '../../common/SelectionDropdown';
import { hp, wp } from '../../../utils/responsive';

const HighSchoolForm = ({ onSelectDropdownValue, formik, schoolsData }) => {
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
        title={'Team *'}
        value={formik.values.school}
        data={schoolsData?.data || []}
        renderItem={renderSchoolItem}
        error={formik.errors.school}
        placeholder="Select Team"
      />
      <View row spread centerV style={{ marginTop: hp(2) }}>
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
          containerStyle={{ width: wp(40) }}
          title="Level *"
          placeholder={'Select Level'}
          value={formik.values.level}
          data={['Jr & Varsity', 'Varsity', 'Both']}
          onSelectItem={value => {
            onSelectDropdownValue(formik, 'level', value);
          }}
          error={formik.errors.level}
        />
      </View>
    </>
  );
};

export default memo(HighSchoolForm);

const styles = StyleSheet.create({});
