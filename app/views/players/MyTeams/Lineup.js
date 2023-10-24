import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native-ui-lib';
import { hp, isAndroid, wp } from '../../../utils/responsive';
import LineupItem from '../../../components/common/LineupItem';
import PrimaryButton from '../../../components/common/PrimaryButton';
import { customTheme } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../hooks/useAuth';

const Lineup = () => {
  const navigation = useNavigation();

  const { isCoach } = useAuth();

  const onPressAddLineupHandler = () => {
    navigation.navigate('AddLineup');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View style={styles.lineupBox}>
        <Text large-xl-600>Coach Lineup</Text>
        <LineupItem title={'Starters'} isVerified />
        <LineupItem title={'High Energy'} />
      </View>
      <View style={styles.lineupBox}>
        <Text large-xl-600>AI Base Lineup</Text>
        <LineupItem
          title={'Shooting & Defense'}
          isAILineup
          containerStyle={styles.aiLineupItem}
          viewTextStyle={styles.aiLineupItemViewText}
        />
      </View>
      {!!isCoach && (
        <PrimaryButton
          onPress={onPressAddLineupHandler}
          style={styles.newLineupButton}
          title={'New Lineup'}
        />
      )}
    </ScrollView>
  );
};

export default Lineup;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4.5),
    paddingTop: hp(3),
    paddingBottom: isAndroid ? hp(3) : hp(5),
    gap: hp(3),
  },
  lineupBox: { gap: hp(1.5) },
  newLineupButton: { marginHorizontal: wp(4) },
  aiLineupItem: { backgroundColor: customTheme.colors.btnBg },
  aiLineupItemViewText: { color: customTheme.colors.light },
});
