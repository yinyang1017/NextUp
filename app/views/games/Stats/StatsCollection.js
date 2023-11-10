import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Switch, Text, View } from 'react-native-ui-lib';
import Orientation from 'react-native-orientation-locker';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import { hp, wp } from '../../../utils/responsive';
import Back from '../../../utils/HeaderButtons/Back';
import { customTheme } from '../../../constants';
import { Team } from '../../../components/games/StatsCollection/IconItems';
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: wp(-10),
        }}>
        <Text style={{ color: customTheme.colors.light }}>26</Text>
        <Team
          logo={require('../../../assets/chicago-bulls-logo1.png')}
          size={20}
          title="ABCD"
          subtitle="EFGH"
        />

        <Text style={{ color: customTheme.colors.light }}>26</Text>
      </View>
    </ViewContainer>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: customTheme.colors.gray_300,
    paddingHorizontal: hp(1),
    paddingVertical: wp(2),
    height: wp(15),
  },
});
