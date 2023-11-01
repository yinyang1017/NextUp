import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { appImages } from '../../constants/appImages';
import { wp } from '../../utils/responsive';
import { Picker, Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../constants';

const seasonsItems = ['2023-24', '2022-23', '2021-22', '2020-21', '2019-20'];

const SeasonSelectDropdown = ({ selectedSeason, onSelectSeason }) => {
  return (
    <Picker
      value={selectedSeason}
      topBarProps={{
        cancelButtonProps: {
          iconStyle: { tintColor: customTheme.colors.light },
        },
        title: 'Select season',
        titleStyle: {
          color: customTheme.colors.light,
          fontFamily: customTheme.fontFamily.robotoMedium,
        },
      }}
      renderPicker={() => (
        <View row centerV style={styles.selectSeasonContainer}>
          <Text small-x>{selectedSeason}</Text>
          <Image source={appImages.dropdown} style={styles.dropdownIcon} />
        </View>
      )}>
      {seasonsItems.map((item, index) => {
        return (
          <Picker.Item
            onPress={() => onSelectSeason(item)}
            value={item}
            label={item}
            key={index}
            selectedIconColor={customTheme.colors.light}
            labelStyle={{ color: customTheme.colors.light }}
          />
        );
      })}
    </Picker>
  );
};

export default SeasonSelectDropdown;

const styles = StyleSheet.create({
  selectSeasonContainer: { marginRight: wp(4) },
  dropdownIcon: { height: wp(5), width: wp(5), marginLeft: wp(1) },
});
