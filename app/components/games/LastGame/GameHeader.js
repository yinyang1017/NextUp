import React from 'react';
import { MyColors } from '../../../constants/colors';
const { View, Text } = require('react-native');
const { default: styles } = require('./styles');
const { default: GameHeaderTeamItem } = require('./GameHeaderTeamItem');

const GameHeader = ({
  containerStyle = {},
  leftTeaminfo = {
    name: 'Copper Kings',
    color: MyColors.lightBlue,
    subTitle: '',
  },
  rightTeamInfo = { name: 'Falcons', color: MyColors.lightRed, subTitle: '' },
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
