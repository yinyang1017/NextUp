import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GridView } from 'react-native-ui-lib';
import { wp } from '../../../utils/responsive';
import { customTheme } from '../../../constants';

const headerGridData = [
  { title: 'FG' },
  { title: '3PT' },
  { title: 'FT' },
  { title: 'TD' },
  { title: 'REB' },
  { title: 'AST' },
  { title: 'PTS' },
];

const boxScoreData = [
  [
    { title: '#0' },
    { title: '0-0' },
    { title: '0-0' },
    { title: '0-0' },
    { title: '0' },
    { title: '0' },
    { title: '1' },
    { title: '0' },
  ],
  [
    { title: '#1' },
    { title: '0-0' },
    { title: '0-0' },
    { title: '0-0' },
    { title: '0' },
    { title: '0' },
    { title: '1' },
    { title: '0' },
  ],
  [
    { title: '#2' },
    { title: '0-0' },
    { title: '0-0' },
    { title: '0-0' },
    { title: '0' },
    { title: '0' },
    { title: '1' },
    { title: '0' },
  ],
  [
    { title: '#3' },
    { title: '0-0' },
    { title: '0-0' },
    { title: '0-0' },
    { title: '0' },
    { title: '0' },
    { title: '1' },
    { title: '0' },
  ],
  [
    { title: '#4' },
    { title: '0-0' },
    { title: '0-0' },
    { title: '0-0' },
    { title: '0' },
    { title: '0' },
    { title: '1' },
    { title: '0' },
  ],
  [
    { title: 'T' },
    { title: '0-0' },
    { title: '0-0' },
    { title: '0-0' },
    { title: '0' },
    { title: '0' },
    { title: '1' },
    { title: '0' },
  ],
];

const renderHeaderCustomItem = item => {
  const isFirstItem = item.key === 0;
  const isLastItem = item.key === 6;
  return (
    <View style={styles.headerItem(isFirstItem, isLastItem)}>
      <Text style={styles.headerItemText}>{item.title}</Text>
    </View>
  );
};

const renderBodyCustomItem = (item, rowIndex) => {
  const isFirstItem = item.key === 0;
  const isLastItem = item.key === 7;
  return (
    <View style={styles.bodyItem(isFirstItem, isLastItem, rowIndex)}>
      <Text
        style={[
          styles.headerItemText,
          rowIndex === 5 && { color: customTheme.colors.btnBg },
        ]}>
        {item.title}
      </Text>
    </View>
  );
};

const QuickBoxScore = ({ containerStyle = {} }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <GridView
        items={headerGridData}
        numColumns={headerGridData.length}
        renderCustomItem={renderHeaderCustomItem}
      />
      {boxScoreData.map((item, index) => {
        return (
          <GridView
            key={index}
            items={item}
            numColumns={item.length}
            renderCustomItem={_item => renderBodyCustomItem(_item, index)}
          />
        );
      })}
    </View>
  );
};

export default QuickBoxScore;

const styles = StyleSheet.create({
  container: { alignItems: 'flex-end' },
  headerItem: (isFirstItem, isLastItem) => ({
    backgroundColor: customTheme.colors.lightGray,
    width: wp(11),
    height: wp(8.5),
    justifyContent: 'center',
    alignItems: 'center',
    margin: wp(0.3),
    ...(isFirstItem && { borderTopLeftRadius: wp(2) }),
    ...(isLastItem && { borderTopRightRadius: wp(2) }),
  }),
  headerItemText: {
    color: customTheme.colors.light,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  bodyItem: (isFirstItem, isLastItem, rowIndex) => ({
    backgroundColor: isFirstItem
      ? customTheme.colors.lightGray
      : customTheme.colors.lightDark,
    width: wp(11),
    height: wp(8.5),
    justifyContent: 'center',
    alignItems: 'center',
    margin: wp(0.3),
    borderTopLeftRadius: isFirstItem && rowIndex === 0 ? wp(2) : 0,
    borderBottomLeftRadius: isFirstItem && rowIndex === 5 ? wp(2) : 0,
    borderBottomRightRadius: isLastItem && rowIndex === 5 ? wp(2) : 0,
  }),
});
