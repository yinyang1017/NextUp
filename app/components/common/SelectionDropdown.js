import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../../utils/responsive';
import { FontFamily, FontSize } from '../../views/GlobalStyles';
import { Colors } from '../../constants';
import { MyColors } from '../../constants/colors';

const SelectionDropdown = ({ title, value, containerStyle = {} }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.selectionRow}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Image
          source={require('../../assets/chevrondown5.png')}
          style={{ height: wp(4), width: wp(4) }}
        />
      </View>
      <Text numberOfLines={1} style={styles.valueText}>
        {value}
      </Text>
    </View>
  );
};

export default SelectionDropdown;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#252933',
  },
  selectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  valueText: {
    fontFamily: FontFamily.robotoRegular,
    color: Colors.light,
    fontWeight: '600',
    paddingVertical: hp(1.5),
    fontSize: FontSize.bodyLargeBold_size,
  },
  title: {
    color: MyColors.txtFieldPlaceHolder,
    textTransform: 'uppercase',
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    fontWeight: '700',
    flex: 1,
  },
});
