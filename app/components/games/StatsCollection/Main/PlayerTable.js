import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { customTheme } from '../../../../constants';
import { hp } from '../../../../utils/responsive';

const headerData = ['Player', 'PTS', 'ATS', 'REB', 'FL'];
const widthData = ['28%', '18%', '18%', '18%', '18%'];

const tableData = [
  {
    id: 1,
    imageUrl: require('../../../../assets/ellipse-7572.png'),
    timeout: 0,
    data: ['9', '1', '0', '10'],
  },
  {
    id: 2,
    imageUrl: require('../../../../assets/ellipse-7572.png'),
    timeout: 10,
    data: ['9', '1', '0', '10'],
  },
  {
    id: 3,
    imageUrl: require('../../../../assets/ellipse-7572.png'),
    timeout: 0,
    data: ['9', '1', '0', '10'],
  },
  {
    id: 4,
    imageUrl: require('../../../../assets/ellipse-7572.png'),
    timeout: 4,
    data: ['9', '1', '0', '10'],
  },
  {
    id: 5,
    imageUrl: require('../../../../assets/ellipse-7572.png'),
    timeout: 0,
    data: ['9', '1', '0', '10'],
  },
];

function PlayerIcon({ image, size }) {
  return (
    <Image
      source={image}
      style={{ height: size, width: size }}
      borderRadius={size / 2}
    />
  );
}
function SimpleIcon({ text, size }) {
  return (
    <View
      style={{
        width: size,
        borderRadius: size / 2,
        height: size,
        backgroundColor: customTheme.colors.red30,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: customTheme.colors.light }}>{text}</Text>
    </View>
  );
}

const PlayerTable = ({ players }) => {
  console.log(players);
  return (
    <View>
      <View style={styles.tableHeader}>
        {headerData.map((item, index) => {
          return (
            <Text
              key={index}
              style={[styles.headerText(index), { width: widthData[index] }]}>
              {item}
            </Text>
          );
        })}
      </View>
      <View style={styles.tableBody}>
        {players.map(item => {
          return (
            <View key={item.id} style={styles.tableBodyRow}>
              <View style={{ width: widthData[0], alignItems: 'center' }}>
                {!item.available ? (
                  <SimpleIcon text={item.number} size={hp(3)} />
                ) : (
                  <PlayerIcon image={item.image} size={hp(3)} />
                )}
              </View>
              {['9', '1', '0', '10'].map((dataItem, dataindex) => {
                return (
                  <Text
                    key={dataindex}
                    style={[
                      styles.tableBodyCellValue,
                      { width: widthData[dataindex + 1] },
                    ]}>
                    {dataItem}
                  </Text>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default PlayerTable;
