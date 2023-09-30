import React from 'react';
import { MyColors } from '../../../constants/colors';
const { View, Text } = require('react-native');
const { default: styles } = require('./styles');
const { default: GameHeaderTeamItem } = require('./GameHeaderTeamItem');

const GameHeader = ({ containerStyle = {} }) => {
  return (
    <View style={[styles.gameHeader, containerStyle]}>
      <GameHeaderTeamItem name="Copper Kings" color={MyColors.lightBlue} />
      <Text style={styles.gameHeaderVSText}>VS</Text>
      <GameHeaderTeamItem name="Falcons" color={MyColors.lightRed} isReverse />
    </View>
  );
};

export default GameHeader;
