import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';
import GameHeader from './GameHeader';
import LastGameScoreTable from './LastGameScoreTable';
import { useNavigation } from '@react-navigation/native';

const LastGame = () => {
  const navigation = useNavigation();

  const onPressGamesStatshandler = () => {
    navigation.navigate('GameStatistics');
  };

  return (
    <View>
      <Text style={styles.title}>Last Game</Text>
      <TouchableOpacity onPress={onPressGamesStatshandler} activeOpacity={0.7}>
        <GameHeader />
        <LastGameScoreTable />
      </TouchableOpacity>
    </View>
  );
};

export default LastGame;
