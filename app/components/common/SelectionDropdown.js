import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { hp, wp } from '../../utils/responsive';
import { customTheme } from '../../constants';
import { Picker, Text, View } from 'react-native-ui-lib';
import { appImages } from '../../constants/appImages';

const SelectionDropdown = ({
  title,
  value,
  containerStyle = {},
  isPicker = true,
  onPressValue = () => {},
  data = [],
  onSelectItem = () => {},
  renderItem,
  error = '',
}) => {
  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        <View row centerV spread>
          <Text small-700 flex style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Image source={appImages.dropdown} style={styles.dropdownIcon} />
        </View>
        {isPicker ? (
          <Picker
            listProps={{
              contentContainerStyle: styles.pickerListContentContainer,
            }}
            topBarProps={{
              containerStyle: {
                backgroundColor: customTheme.colors.background,
              },
              cancelButtonProps: {
                iconStyle: { tintColor: customTheme.colors.light },
              },
              title,
            }}
            showSearch
            pickerModalProps={{
              overlayBackgroundColor: customTheme.colors.background,
            }}
            renderPicker={() => (
              <Text medium-600 numberOfLines={1} style={styles.valueText}>
                {value || ' '}
              </Text>
            )}
            searchStyle={{
              placeholderTextColor: customTheme.colors.light + 75,
              color: customTheme.colors.light,
            }}
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
            <Text medium-600 numberOfLines={1} style={styles.valueText}>
              {value || ' '}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {!!error && (
        <Text small style={styles.errorText}>
          {error}
        </Text>
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
  valueText: { paddingVertical: hp(1.5) },
  title: {
    color: customTheme.colors.txtFieldPlaceHolder,
    textTransform: 'uppercase',
    paddingRight: wp(2),
  },
  dropdownIcon: { height: wp(4), width: wp(4) },
  pickerListContentContainer: {
    paddingBottom: hp(5),
    backgroundColor: customTheme.colors.background,
  },
  errorText: { color: customTheme.colors.red10, marginTop: hp(1) },
});
