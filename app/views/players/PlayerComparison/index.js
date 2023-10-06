import React from 'react';
import {Text} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {wp, hp} from '../../../utils/responsive';
import Back from '../../../utils/HeaderButtons/Back';
export default function PlayerComparison({route}) {
  const navigation = useNavigation();

  console.log(route);
  return (
    <SafeAreaView style={styles.container}>
      <Back
        onPress={() => navigation.goBack()}
        containerStyle={styles.backButtonContainer}
        title="Player Comparison"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  backButtonContainer: {
    marginHorizontal: wp(5),
    marginTop: hp(3),
  },
});
