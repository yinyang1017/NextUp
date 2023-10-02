import React from 'react';
const { View, Text } = require('react-native');
const { default: styles } = require('./styles');

const GameHeaderTeamItem = ({ name = '', color, isReverse = false }) => {
  return (
    <View style={styles.gameHeaderTeamItem(isReverse)}>
      <View style={styles.gameHeaderTeamItemBadge(color)}>
        <Text style={styles.gameHeaderTeamItemBadgeText}>{name[0]}</Text>
      </View>
      <Text
        numberOfLines={2}
        style={styles.gameHeaderTeamItemName(color, isReverse)}>
        {name}
      </Text>
    </View>
  );
};

export default GameHeaderTeamItem;
