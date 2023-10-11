import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { customTheme } from '../../../constants';

const data = [
  {
    title: 'Team',
    quaterData: [
      { value: 'Q1' },
      { value: 'Q2' },
      { value: 'Q3' },
      { value: 'Q4' },
      { value: 'F', color: customTheme.colors.btnBg },
    ],
  },
  {
    title: 'Copper Kings',
    titleColor: customTheme.colors.lightBlue,
    quaterData: [
      { value: '18', color: customTheme.colors.lightBlue },
      { value: '18', color: customTheme.colors.lightBlue },
      { value: '19', color: customTheme.colors.lightBlue },
      { value: '16', color: customTheme.colors.lightBlue },
      { value: '71', color: customTheme.colors.lightBlue },
    ],
  },
  {
    title: 'Falcons',
    quaterData: [
      { value: '14' },
      { value: '21' },
      { value: '14' },
      { value: '18' },
      { value: '67' },
    ],
  },
];

const LastGameScoreTable = () => {
  return (
    <View style={styles.lastGameScoreTable}>
      {data.map((item, index) => {
        return (
          <View key={index} style={styles.lastGameScoreTableRow}>
            <Text style={styles.lastGameScoreTableRowTitle(item.titleColor)}>
              {item.title}
            </Text>
            <View style={styles.lastGameScoreTableRowBody}>
              {item.quaterData.map((qItem, qIndex) => (
                <Text
                  key={qIndex}
                  style={styles.lastGameScoreTableRowValue(qItem.color)}>
                  {qItem.value}
                </Text>
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default LastGameScoreTable;
