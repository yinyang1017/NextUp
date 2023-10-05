import { StyleSheet, View } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import { Dash, Dialog, Text } from 'react-native-ui-lib';
import { customTheme } from '../../constants';
import { hp, wp } from '../../utils/responsive';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { times } from 'lodash';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import PrimaryButton from './PrimaryButton';

const getStaticTimeData = () => {
  return {
    hours: times(12).map(item => String(item + 1).padStart(2, '0')),
    minutes: times(60).map(item => String(item).padStart(2, '0')),
    seconds: times(60).map(item => String(item).padStart(2, '0')),
    timeTypes: ['PM', 'AM'],
  };
};

const SetTimeModal = ({ isVisible = false }) => {
  const { bottom } = useSafeAreaInsets();

  const timeData = useMemo(() => getStaticTimeData(), []);

  const renderItem = useCallback((data, index, isSelected) => {
    return (
      <Text large-x-600 style={styles.timeItem(isSelected)}>
        {data}
      </Text>
    );
  }, []);

  const commonScrollProps = useMemo(
    () => ({
      wrapperBackground: 'transparent',
      wrapperHeight: hp(21),
      highlightColor: customTheme.colors.light,
      itemHeight: hp(7),
      renderItem: renderItem,
    }),
    [renderItem],
  );

  return (
    <Dialog
      width={wp(100)}
      visible={isVisible}
      overlayBackgroundColor={customTheme.colors.black + '70'}
      bottom
      onDismiss={() => console.log('dismissed')}
      panDirection={null}>
      <View style={styles.container(bottom)}>
        <Text medium-x-400 style={styles.title}>
          Set time
        </Text>
        <Dash
          length={wp(100)}
          color={customTheme.colors.light + '20'}
          thickness={1}
        />
        <View style={styles.timeSelectionContainer}>
          <ScrollPicker
            {...commonScrollProps}
            dataSource={timeData.hours}
            selectedIndex={2}
            onValueChange={(data, selectedIndex) => {}}
          />
          <Text large-x-500 style={styles.timeSeparator(wp(18.5))}>
            :
          </Text>
          <ScrollPicker
            {...commonScrollProps}
            dataSource={timeData.minutes}
            selectedIndex={1}
            onValueChange={(data, selectedIndex) => {}}
          />
          <Text large-x-500 style={styles.timeSeparator(wp(37))}>
            :
          </Text>
          <ScrollPicker
            {...commonScrollProps}
            dataSource={timeData.seconds}
            selectedIndex={1}
            onValueChange={(data, selectedIndex) => {}}
          />
          <ScrollPicker
            {...commonScrollProps}
            dataSource={timeData.timeTypes}
            selectedIndex={1}
            onValueChange={(data, selectedIndex) => {}}
          />
        </View>
        <View style={styles.footerButtonsContainer}>
          <PrimaryButton title="Cancel" style={styles.cancelButton} />
          <PrimaryButton title="Save" style={styles.saveButton} />
        </View>
      </View>
    </Dialog>
  );
};

export default SetTimeModal;

const styles = StyleSheet.create({
  container: bottom => ({
    backgroundColor: customTheme.colors.background,
    height: hp(44) + bottom,
    paddingBottom: bottom,
    width: wp(100),
    borderTopRightRadius: wp(7.5),
    borderTopLeftRadius: wp(7.5),
  }),
  title: {
    alignSelf: 'center',
    paddingVertical: hp(2),
    color: customTheme.colors.txtFieldPlaceHolder,
  },
  timeItem: isSelected => ({
    color: isSelected ? customTheme.colors.light : '#4E4E4E',
  }),
  timeSelectionContainer: {
    flexDirection: 'row',
    height: hp(21),
    width: wp(75),
    alignSelf: 'center',
    marginTop: hp(4),
  },
  timeSeparator: left => ({
    left,
    top: hp(9),
    position: 'absolute',
  }),
  cancelButton: {
    width: wp(40),
    borderRadius: wp(10),
    borderColor: '#77797E',
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  saveButton: { width: wp(40), borderRadius: wp(10) },
  footerButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: hp(2),
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
});
