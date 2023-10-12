import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { customTheme } from '../../constants';
import { CustomTabView } from '../../components/common/CustomTabView';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FastImage from 'react-native-fast-image';
import { hp, wp } from '../../utils/responsive';

const TopTab = createMaterialTopTabNavigator();

const PlayerAccountStats = () => <Text>This is stats Component</Text>;
const ReadyToPro = () => {
  return <Text>This is ReadyToPro Component</Text>;
};

const CoachViewPlayerDetails = () => {
  const renderTabBar = props => <CustomTabView {...props} />;

  return (
    <ScrollView
      contentContainerStyle={styles.playerDash}
      showsVerticalScrollIndicator={true}>
      <FastImage
        source={{
          uri: 'https://unsplash.com/photos/CREqtqgBFcU/download?force=true',
          priority: FastImage.priority.high,
        }}
        resizeMode="cover"
        style={{ minHeight: hp(50) }}
      />
      <View style={styles.playerInfoRow}>
        <View>
          <Text style={styles.rankNumber}>6</Text>
          <Text style={{ color: customTheme.colors.light }}>RANK</Text>
        </View>
        <View style={styles.playerNameContainer}>
          <Text style={styles.playerName}>Lebron James </Text>
          <Text style={styles.playerPosition}>
            Power Forward <Text white> | </Text>{' '}
            <Text white>Los Angeles Lakers</Text>{' '}
          </Text>
        </View>
      </View>
      <TopTab.Navigator tabBar={renderTabBar}>
        <TopTab.Screen
          options={{ tabBarLabel: 'Stats' }}
          name="PlayerAccountStats"
          component={PlayerAccountStats}
        />
        <TopTab.Screen
          options={{ tabBarLabel: 'Ready to Pro' }}
          name="PlayerAccountReadyToPro"
          component={ReadyToPro}
        />
        <TopTab.Screen
          options={{ tabBarLabel: 'Highlights' }}
          name="PlayerAccountHighlights"
          component={ReadyToPro}
        />
      </TopTab.Navigator>
    </ScrollView>
  );
};

export default CoachViewPlayerDetails;

const styles = StyleSheet.create({
  playerDash: { flex: 1 },
  playerInfoRow: {
    marginVertical: hp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
  },
  rankNumber: {
    textAlign: 'center',
    color: customTheme.colors.yellow20,
    fontFamily: customTheme.fontFamily.robotoBold,
    fontSize: customTheme.fontSizes.size_16,
    fontWeight: 'bold',
  },
  playerName: {
    color: customTheme.colors.light,
    fontFamily: customTheme.fontFamily.robotoBold,
    fontSize: customTheme.fontSizes.size_16,
    fontWeight: '900',
  },
  playerPosition: {
    color: customTheme.colors.light,
    fontFamily: customTheme.fontFamily.robotoBold,
    fontSize: customTheme.fontSizes.size_16,
  },
  playerNameContainer: { marginLeft: wp(3) },
});
