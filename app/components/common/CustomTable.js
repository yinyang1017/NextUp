import React from 'react';
import { View, ScrollView, FlatList, StyleSheet } from 'react-native';
import { customTheme } from '../../constants';
import { Text } from 'react-native-ui-lib';
import { hp, wp } from '../../utils/responsive';

// const data = [
//   {
//     id: '1',
//     name: 'Row 1',
//     columns: ['Data A', 'Data B', 'Data C', 'Data D', 'Data E'],
//   },
//   {
//     id: '2',
//     name: 'Row 2',
//     columns: ['Data F', 'Data G', 'Data H', 'Data I', 'Data J'],
//   },
//   {
//     id: '3',
//     name: 'Row 3',
//     columns: ['Data K', 'Data L', 'Data M', 'Data N', 'Data O'],
//   },
//   // Add more data rows as needed
// ];

export const CustomTable = ({
  title = '',
  headerWidthArray = [],
  data = [],
  headerData = [],
  titleStyle = {},
  tableContainerStyle = {},
}) => {
  const renderHeader = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.rowScrollView}
        bounces={false}>
        <View style={[styles.row, styles.header, styles.headerRow]}>
          <Text
            regular-700
            style={[
              styles.headerLeadingCellText,
              { width: headerWidthArray[0] },
            ]}>
            {headerData[0]}
          </Text>
          {headerData.slice(1).map((headerTitle, index) => (
            <Text
              regular-400
              key={index}
              style={[
                styles.cellHeader,
                { width: headerWidthArray[index + 1] },
              ]}>
              {headerTitle}
            </Text>
          ))}
        </View>
      </ScrollView>
    );
  };

  const renderRowItem = ({ item, index }) => {
    const backgroundColor =
      index % 2 === 0
        ? customTheme.colors.primary
        : customTheme.colors.tertiary;

    const isLastRow = index === data.length - 1;
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.rowScrollView}
        bounces={false}>
        <View
          style={[
            styles.row,
            styles.rowScrollView,
            { backgroundColor: backgroundColor },
            isLastRow && styles.lastRowRadius,
          ]}>
          <Text
            numberOfLines={1}
            small-400
            style={[styles.rowTitle, { width: headerWidthArray[0] }]}>
            {item[0]}
          </Text>
          {item.slice(1).map((column, _index) => (
            <Text
              small-600
              key={_index}
              style={[styles.cell, { width: headerWidthArray[_index + 1] }]}>
              {column}
            </Text>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <View>
      <Text large-xl-600 style={[styles.title, titleStyle]}>
        {title ?? ''}
      </Text>
      <FlatList
        bounces={false}
        data={data}
        ListHeaderComponent={renderHeader}
        renderItem={renderRowItem}
        keyExtractor={item => item.id}
        contentContainerStyle={tableContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { marginTop: hp(1), marginBottom: hp(3) },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(2),
  },
  header: {
    backgroundColor: customTheme.colors.tertiary,
  },
  cellHeader: { textAlign: 'center' },
  cell: {
    textAlign: 'center',
    color: customTheme.colors.light,
  },
  rowTitle: { textAlign: 'left', paddingHorizontal: wp(1) },
  blueTitle: {
    color: customTheme.colors.blue20,
    textAlign: 'left',
  },
  headerLeadingCellText: {
    color: customTheme.colors.btnBg,
    paddingHorizontal: wp(1),
  },
  headerRow: {
    width: '100%',
    borderTopLeftRadius: wp(3),
    borderTopRightRadius: wp(3),
  },
  rowScrollView: { width: '100%' },
  lastRowRadius: {
    borderBottomLeftRadius: wp(3),
    borderBottomRightRadius: wp(3),
  },
});
