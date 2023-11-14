import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Image, Switch, Text, View } from 'react-native-ui-lib';
import Orientation from 'react-native-orientation-locker';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import { hp, wp } from '../../../utils/responsive';
import Back from '../../../utils/HeaderButtons/Back';
import { customTheme } from '../../../constants';
import { Team } from '../../../components/games/StatsCollection/IconItems';
import ScoreIcon from '../../../components/games/StatsCollection/ScoreIcon';
import { FontSize } from '../../GlobalStyles';
export default function StatsCollection() {
  console.log(hp(100), wp(100));
  useEffect(() => {
    Orientation.lockToLandscapeLeft();
    return () => Orientation.unlockAllOrientations();
  }, []);
  return (
    <ViewContainer hideStatusBar isView={false}>
      <View style={styles.header}>
        <Back />
        <View style={{ flexDirection: 'row' }}>
          <Team
            logo={require('../../../assets/chicago-bulls-logo1.png')}
            size={20}
            score={26}
            scoreColor={customTheme.colors.togelBackground}
            title="Kalumet"
            subtitle="Copper Kings"
          />
          <ScoreIcon
            size={hp(6)}
            isLeft
            bgColor={customTheme.colors.red40}
            thumbColor={customTheme.colors.gray_300}
          />
          <Team
            logo={require('../../../assets/los-angeles-lakers-logo6.png')}
            size={20}
            score={24}
            reverse
            scoreColor={customTheme.colors.red30}
            title="Devine Child"
            subtitle="Falcons"
          />
        </View>
        <View style={styles.horizontal}>
          <Text style={styles.selectLabel}>1st Quater</Text>
          <Image
            source={require('../../../assets/chevrondown5.png')}
            height={hp(3)}
            width={hp(3)}
          />
        </View>
      </View>
    </ViewContainer>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: customTheme.colors.gray_300,
    paddingHorizontal: hp(1),
    alignItems: 'flex-start',
    paddingVertical: wp(2),
    justifyContent: 'space-between',
  },
  selectLabel: {
    color: customTheme.colors.light,
    fontSize: FontSize.bodyLargeBold_size,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
});
