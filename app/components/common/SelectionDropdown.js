import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { memo } from 'react';
import { hp, wp } from '../../utils/responsive';
import { Colors, customTheme } from '../../constants';
import { Picker } from 'react-native-ui-lib';
import { _renderCustomModal } from './FormInputs';

const SelectionDropdown = ({
  title,
  value,
  containerStyle = {},
  isPicker = true,
  onPressValue = () => {},
  data = [],
  onSelectItem = () => {},
  renderItem,
  onSearchChange = () => {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.selectionRow}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Image
          source={require('../../assets/chevrondown5.png')}
          style={styles.dropdownIcon}
        />
      </View>
      {isPicker ? (
        <Picker
          listProps={{ contentContainerStyle: { paddingBottom: hp(5) } }}
          renderCustomModal={props =>
            _renderCustomModal({
              ...props,
              label: title,
              title: 'Search',
              onSearchChange: onSearchChange,
            })
          }
          renderPicker={() => (
            <Text numberOfLines={1} style={styles.valueText}>
              {value}
            </Text>
          )}
          searchStyle={{ placeholderTextColor: customTheme.colors.primary }}
          value={value}>
          {renderItem
            ? data.map(renderItem)
            : data.map((item, index) => (
                <Picker.Item
                  key={index}
                  onPress={() => onSelectItem(item)}
                  label={item}
                  value={item}
                  selectedIconColor={customTheme.colors.light}
                  labelStyle={{ color: customTheme.colors.light }}
                />
              ))}
        </Picker>
      ) : (
        <TouchableOpacity onPress={onPressValue}>
          <Text numberOfLines={1} style={styles.valueText}>
            {value}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(SelectionDropdown);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: customTheme.colors.aboutTxtBorder,
  },
  selectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  valueText: {
    fontFamily: customTheme.fontFamily.robotoRegular,
    color: Colors.light,
    fontWeight: '600',
    paddingVertical: hp(1.5),
    fontSize: customTheme.fontSizes.size_16,
  },
  title: {
    color: customTheme.colors.txtFieldPlaceHolder,
    textTransform: 'uppercase',
    fontSize: customTheme.fontSizes.size_12,
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontWeight: '700',
    flex: 1,
  },
  dropdownIcon: { height: wp(4), width: wp(4) },
});
