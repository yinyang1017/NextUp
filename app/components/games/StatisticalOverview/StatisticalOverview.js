import { Text, View } from 'react-native';
import React from 'react';
import { Dash } from 'react-native-ui-lib';
import { hp, wp } from '../../../utils/responsive';
import { VictoryPie } from 'victory-native';
import { Svg } from 'react-native-svg';
import styles from './styles';
import ScoreItem from './ScoreItem';
import StatsItem from './StatsItem';
import AgendaItem from './AgendaItem';
import { customTheme } from '../../../constants';

const StatisticalOverview = () => {
  return (
    <View>
      <Text style={styles.title}>Statistical Overview</Text>
      <View style={styles.scoreCardContainer}>
        <ScoreItem score={'0 - 0'} subTitle={'Home Record'} />
        <Dash
          vertical
          color={customTheme.colors.light + '10'}
          length={wp(15)}
        />
        <ScoreItem score={'0 - 0'} subTitle={'Away Record'} />
      </View>
      <Svg width={wp(46)} height={wp(46)} style={styles.chartSvg}>
        <View style={styles.totalGamesContainer}>
          <Text style={styles.totalGamesCount}>0</Text>
          <Text style={styles.totalGamesText}>Total Games</Text>
        </View>
        <VictoryPie
          standalone={false}
          colorScale={[customTheme.colors.darkRed, customTheme.colors.btnBg]}
          data={[
            { x: 'Dogs', y: 30 },
            { x: 'Cats', y: 70 },
          ]}
          height={wp(46)}
          width={wp(46)}
          innerRadius={wp(16)}
          labelComponent={<></>}
        />
      </Svg>
      <View style={styles.extraStatsContainer}>
        <StatsItem title={'W/L Streak'} value={'-'} />
        <StatsItem title={'Last 10'} value={'-'} />
        <View style={{ gap: hp(0.4) }}>
          <AgendaItem title={'0 Wins'} color={customTheme.colors.btnBg} />
          <AgendaItem title={'0 Losses'} color={customTheme.colors.darkRed} />
        </View>
      </View>
    </View>
  );
};

export default StatisticalOverview;
