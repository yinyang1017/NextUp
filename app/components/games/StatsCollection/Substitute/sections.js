import React from 'react';
import { SeletablePlayer } from '../LineUp/playitems';
import { wp } from '../../../../utils/responsive';
import { View } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import { customTheme } from '../../../../constants';
export function SubstitutesArea({ players }) {
  return (
    <View style={styles.substitutesArea}>
      {players.map(el => (
        <SeletablePlayer
          image={el.image}
          name={el.name}
          width={wp(18)}
          imageWidth={wp(13)}
          emptyColor={customTheme.colors.brightGreen}
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  substitutesArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: wp(3),
  },
});
