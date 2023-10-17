import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, Dash } from 'react-native-ui-lib';
import { customTheme } from '../../constants';
import { CustomTabView } from '../../components/common/CustomTabView';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FastImage from 'react-native-fast-image';
import { hp, isIOS, wp } from '../../utils/responsive';
import CoachViewPlayerDetailsStatsTab from '../../components/coach/CoachViewPlayerDetailsStatsTab';
import { appImages } from '../../constants/appImages';
import Back from '../../utils/HeaderButtons/Back';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const TopTab = createMaterialTopTabNavigator();

const ReadyToPro = () => {
  return <Text>This is ReadyToPro Component</Text>;
};

const CoachViewPlayerDetails = () => {
  const renderTabBar = props => <CustomTabView {...props} />;

  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={true}>
      <Back
        containerStyle={styles.back(top)}
        onPress={() => navigation.goBack()}
      />
      <FastImage
        source={{
          uri: 'https://unsplash.com/photos/CREqtqgBFcU/download?force=true',
          priority: FastImage.priority.high,
        }}
        style={{ height: hp(50) }}
      />
      <View row centerV style={styles.playerProfileActionsContainer}>
        <TouchableOpacity>
          <Image
            source={appImages.playerRequestIcon}
            style={styles.playerProfileActionButton}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={appImages.playerCompareIcon}
            style={styles.playerProfileActionButton}
          />
        </TouchableOpacity>
      </View>
      <View row centerV style={styles.playerInfoRow}>
        <View>
          <Text style={styles.rankNumber}>6</Text>
          <Text small-x-500>RANK</Text>
        </View>
        <Dash
          vertical
          length={wp(6.5)}
          color={customTheme.colors.light + '30'}
          thickness={1}
          containerStyle={styles.dash}
        />
        <View flex>
          <View row centerV>
            <Text numberOfLines={1} large-3xl-700>
              Lebron James
            </Text>
            <Image
              source={require('../../assets/images/playerIcon.png')}
              style={styles.playerIcon}
            />
          </View>
          <Text regular-400 numberOfLines={1} style={styles.playerPosition}>
            Power Forward | Los Angeles Lakers
          </Text>
        </View>
      </View>
      <TopTab.Navigator
        tabBar={renderTabBar}
        sceneContainerStyle={styles.tabScreenContainer}>
        <TopTab.Screen
          options={{ tabBarLabel: 'Stats' }}
          name="CoachViewPlayerDetailsStatsTab"
          component={CoachViewPlayerDetailsStatsTab}
        />
        <TopTab.Screen
          options={{ tabBarLabel: 'Road to Pro' }}
          name="PlayerAccountReadyToPro"
          component={ReadyToPro}
        />
        <TopTab.Screen
          options={{ tabBarLabel: 'Content' }}
          name="PlayerAccountHighlights"
          component={ReadyToPro}
        />
      </TopTab.Navigator>
    </ScrollView>
  );
};

export default CoachViewPlayerDetails;

const styles = StyleSheet.create({
  container: { flex: 1 },
  playerInfoRow: { marginVertical: hp(1.5), paddingHorizontal: wp(4) },
  rankNumber: {
    textAlign: 'center',
    color: customTheme.colors.yellow20,
    fontFamily: customTheme.fontFamily.robotoBold,
    fontSize: customTheme.fontSizes.size_36,
    fontWeight: 'bold',
  },
  playerPosition: {
    color: customTheme.colors.light + '80',
    marginTop: hp(0.3),
  },
  dash: {
    marginLeft: wp(3),
    marginRight: wp(4),
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  tabScreenContainer: {
    paddingTop: hp(2),
    paddingBottom: isIOS ? hp(5) : hp(3),
    paddingHorizontal: wp(4),
    backgroundColor: customTheme.colors.lightDark,
  },
  playerIcon: { height: wp(5), width: wp(5), marginLeft: wp(3) },
  playerProfileActionButton: { height: wp(12), width: wp(12) },
  playerProfileActionsContainer: {
    columnGap: wp(4),
    zIndex: 1,
    top: hp(50.8) - wp(12),
    position: 'absolute',
    right: wp(6),
  },
  back: top => ({
    position: 'absolute',
    top: top + hp(2),
    right: 0,
    left: 0,
    zIndex: 1,
    paddingHorizontal: wp(5),
  }),
});
