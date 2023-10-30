import React from 'react';
import { StyleSheet } from 'react-native';
import VSCard1 from '../../../components/games/LiveGame/VSCard1';
import Back from '../../../utils/HeaderButtons/Back';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hp, wp } from '../../../utils/responsive';
export default function LiveGame({}) {
  return (
    <SafeAreaView style={styles.container}>
      <Back
        containerStyle={styles.backButtonContainer}
        title="Upcoming Games"
      />
      <VSCard1 title="MPL D-League Aug 09,13:03" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  backButtonContainer: {
    marginHorizontal: wp(5),
    marginTop: hp(1),
    marginBottom: hp(3),
  },
});
