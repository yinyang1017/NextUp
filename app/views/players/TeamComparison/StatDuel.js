import React, {useState} from 'react';
import {Picker, Text, View} from 'react-native-ui-lib';
import _ from 'lodash';
import {Color, FontFamily, FontSize} from '../../GlobalStyles';

export default function StatDuel() {
  const [sort, setSort] = useState('Defensive');
  const items = [
    {value: 'Defensive', label: 'Defensive'},
    {value: 'professional', label: 'professional'},
  ];
  return (
    <View
      style={{
        marginTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: FontSize.size_3xl,
            color: Color.othersWhite,
            lineHeight: 22,
            textAlign: 'left',
            fontFamily: FontFamily.robotoBold,
            fontWeight: '600',
          }}>
          Stat Duel
        </Text>
        <Picker
          value={sort}
          fieldType="filter"
          placeholder={''}
          onChange={e => {
            setSort(e);
          }}
          style={{
            fontSize: FontSize.bodyMediumSemibold_size,
            color: Color.othersWhite,
            lineHeight: 22,
            textAlign: 'left',
            fontFamily: FontFamily.robotoBold,
            fontWeight: '600',
          }}
          customPickerProps={{}}>
          {_.map(items, item => {
            return (
              <Picker.Item
                key={item.id}
                value={item.value}
                label={item.label}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
}
