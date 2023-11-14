import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { customTheme } from '../../../constants';
import ScoreIcon from '../../../components/games/StatsCollection/ScoreIcon';
import { hp, wp } from '../../../utils/responsive';
import { Team } from '../../../components/games/StatsCollection/IconItems';
import { Image, Text, View } from 'react-native-ui-lib';
import Back from '../../../utils/HeaderButtons/Back';
import { FontSize } from '../../GlobalStyles';
import { Menu, MenuDivider, MenuItem } from 'react-native-material-menu';

export default function StatsHeader() {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  return (
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
        <Menu
          visible={visible}
          style={[
            {
              marginTop: 25,
              backgroundColor: customTheme.colors.primary,
            },
            styles.shadow(),
          ]}
          anchor={
            <View style={{ flexDirection: 'row' }}>
              <Text onPress={showMenu} style={styles.selectLabel}>
                1st Quater{' '}
              </Text>
              <Image
                source={require('../../../assets/chevrondown5.png')}
                height={hp(3)}
                width={hp(3)}
              />
            </View>
          }
          onRequestClose={hideMenu}>
          <View style={{ paddingHorizontal: wp(4) }}>
            <MenuItem
              onPress={hideMenu}
              pressColor={customTheme.colors.transparent}>
              <Text style={styles.menuItem}>1st Quater</Text>
            </MenuItem>
            <MenuDivider color={customTheme.colors.light} />
            <MenuItem
              onPress={hideMenu}
              pressColor={customTheme.colors.transparent}>
              <Text style={styles.menuItem}>2st Quater</Text>
            </MenuItem>
            <MenuDivider color={customTheme.colors.light} />
            <MenuItem
              onPress={hideMenu}
              pressColor={customTheme.colors.transparent}>
              <Text style={styles.menuItem}>3st Quater</Text>
            </MenuItem>
            <MenuDivider color={customTheme.colors.light} />
            <MenuItem
              onPress={hideMenu}
              pressColor={customTheme.colors.transparent}>
              <Text style={styles.menuItem}>4st Quater</Text>
            </MenuItem>
          </View>
        </Menu>
      </View>
    </View>
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
  shadow: () =>
    Platform.OS === 'ios'
      ? { shadowColor: customTheme.colors.dark, shadowOpacity: 0.6 }
      : {
          elevation: 10,
          shadowColor: customTheme.colors.charcoal_gray,
        },
  menuItem: {
    color: customTheme.colors.light,
  },
});
