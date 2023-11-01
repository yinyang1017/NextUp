import { StyleSheet } from 'react-native';
import React, { useCallback } from 'react';
import Back from '../../../utils/HeaderButtons/Back';
import { hp, wp } from '../../../utils/responsive';
import GameHeaderTeamItem from '../../../components/games/LastGame/GameHeaderTeamItem';
import { customTheme } from '../../../constants';
import { GridView, Text, View } from 'react-native-ui-lib';
import StatsBoxItem from '../../../components/common/StatsBoxItem';
import { SafeAreaView } from 'react-native-safe-area-context';

const boxAveragesData = [
  { title: '56.0', subtitle: 'Points' },
  { title: '56.0', subtitle: 'Turnovers' },
  { title: '56.0', subtitle: 'Blocks' },
  { title: '56.0', subtitle: 'Rebounds' },
  { title: '56.0', subtitle: 'Fouls' },
  { title: '56.0', subtitle: 'Assists' },
  { title: '56.0', subtitle: 'Steals' },
  { title: '56.0', subtitle: 'Charges' },
];

const shootingAveragesData = [
  { title: '91.4%', subtitle: 'EFG%' },
  { title: '76.6%', subtitle: '2FG%' },
  { title: '90.4%', subtitle: 'TS%' },
  { title: '73.1%', subtitle: '3FG%' },
  { title: '66.7%', subtitle: 'FT%' },
];

const advanceAnalyticsData = [
  { title: '51.8', subtitle: 'AST Ratio' },
  { title: '22.8', subtitle: 'Pace' },
  { title: '245.8', subtitle: 'Off Ef%' },
];

const AdvanceStats = () => {
  const getStatBoxWidth = numOfColumns => {
    const OUTER_SPACE = wp(2.2) * 2;

    const MARGIN_SPACE = wp(1) * numOfColumns;

    return (wp(100) - OUTER_SPACE - MARGIN_SPACE) / numOfColumns - wp(1);
  };

  const renderBoxAverageCustomItem = useCallback(
    item => (
      <StatsBoxItem
        key={item.key}
        title={item.title}
        subtitle={item.subtitle}
        style={{ width: getStatBoxWidth(4), margin: wp(1) }}
      />
    ),
    [],
  );

  const renderShootingAverageCustomItem = useCallback(
    item => (
      <StatsBoxItem
        key={item.key}
        title={item.title}
        subtitle={item.subtitle}
        style={{ width: getStatBoxWidth(5), margin: wp(1) }}
        titleStyle={{ fontSize: customTheme.fontSizes.size_16 }}
      />
    ),
    [],
  );

  const renderAnalyticsCustomItem = useCallback(
    item => (
      <StatsBoxItem
        key={item.key}
        title={item.title}
        subtitle={item.subtitle}
        style={{ width: getStatBoxWidth(3), margin: wp(1) }}
      />
    ),
    [],
  );

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1 }}>
      <Back title="Advance Statistics" containerStyle={styles.backButton} />
      <View row centerV spread style={styles.gameScoreContainer}>
        <GameHeaderTeamItem
          name="Copper Kings"
          subTitle="Varsity Team"
          color={customTheme.colors.lightBlue}
        />
        <Text header-400>3-1</Text>
      </View>

      <View style={styles.boxSpace}>
        <Text style={styles.boxTitle} large-x-600>
          Box Averages
        </Text>
        <GridView
          items={boxAveragesData}
          numColumns={4}
          renderCustomItem={renderBoxAverageCustomItem}
        />
      </View>
      <View style={styles.boxSpace}>
        <Text style={styles.boxTitle} large-x-600>
          Shooting Averages
        </Text>
        <GridView
          items={shootingAveragesData}
          numColumns={5}
          renderCustomItem={renderShootingAverageCustomItem}
        />
      </View>
      <View style={styles.boxSpace}>
        <Text style={styles.boxTitle} large-x-600>
          Advanced Analytics
        </Text>
        <GridView
          items={advanceAnalyticsData}
          numColumns={4}
          renderCustomItem={renderAnalyticsCustomItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default AdvanceStats;

const styles = StyleSheet.create({
  backButton: { marginHorizontal: wp(5), marginTop: hp(2) },
  gameScoreContainer: {
    backgroundColor: customTheme.colors.primary,
    marginHorizontal: wp(2),
    borderRadius: wp(2),
    paddingVertical: hp(2),
    paddingLeft: wp(6),
    paddingRight: wp(9),
    marginTop: hp(3),
  },
  boxSpace: { marginHorizontal: wp(2.2), marginTop: hp(3), gap: hp(1) },
  boxTitle: { marginLeft: wp(3) },
});
