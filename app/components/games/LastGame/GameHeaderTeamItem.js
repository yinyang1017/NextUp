import React from 'react';
import { Text } from 'react-native-ui-lib';
const { View } = require('react-native');
const { default: styles } = require('./styles');

const GameHeaderTeamItem = ({
  name = '',
  color,
  isReverse = false,
  nameStyle = {},
  subTitle = '',
  subTitleStyle = {},
}) => {
  return (
    <View style={styles.gameHeaderTeamItem(isReverse)}>
      <View style={styles.gameHeaderTeamItemBadge(color)}>
        <Text medium>{name[0]}</Text>
      </View>
      {subTitle ? (
        <View style={styles.gameHeaderTeamItemNameContainer}>
          <Text regular-400 style={[nameStyle]}>
            {name}
          </Text>
          <Text
            small-400
            style={[
              styles.gameHeaderTeamItemSubTitle(color, isReverse),
              subTitleStyle,
            ]}>
            {subTitle}
          </Text>
        </View>
      ) : (
        <Text
          small-x-600
          numberOfLines={2}
          style={[styles.gameHeaderTeamItemName(color, isReverse), nameStyle]}>
          {name}
        </Text>
      )}
    </View>
  );
};

export default GameHeaderTeamItem;
