import React from 'react';
import { customTheme } from '../../../constants';
const { View, Text } = require('react-native');
const { default: styles } = require('./styles');
const { default: GameHeaderTeamItem } = require('./GameHeaderTeamItem');

const GameHeader = ({
  containerStyle = {},
  leftTeaminfo = {
    name: 'Copper Kings',
    color: customTheme.colors.lightBlue,
    subTitle: '',
  },
  rightTeamInfo = {
    name: 'Falcons',
    color: customTheme.colors.lightRed,
    subTitle: '',
  },
}) => {
  return (
    <View style={[styles.gameHeader, containerStyle]}>
      <GameHeaderTeamItem
        name={leftTeaminfo.name}
        color={leftTeaminfo.color}
        subTitle={leftTeaminfo.subTitle}
      />
      <Text style={styles.gameHeaderVSText}>VS</Text>
      <GameHeaderTeamItem
        name={rightTeamInfo.name}
        color={rightTeamInfo.color}
        subTitle={rightTeamInfo.subTitle}
        isReverse
      />
    </View>
  );
};

export default GameHeader;
