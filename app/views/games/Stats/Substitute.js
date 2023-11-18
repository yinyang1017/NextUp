import React, { useContext, useState, useCallback } from 'react';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import StatsHeader from './StatsHeader';
import { customTheme } from '../../../constants';
import { hp, wp } from '../../../utils/responsive';
import { FontSize } from '../../GlobalStyles';
import { Alert, StyleSheet } from 'react-native';
import { Button, Text, View } from 'react-native-ui-lib';
import { SeletablePlayer } from '../../../components/games/StatsCollection/LineUp/playitems';
import { useNavigation } from '@react-navigation/native';
import { GameContext } from '../../../context/GameProvider';

export default function Substitute({ MAX_SUBS = 2 }) {
  const navigation = useNavigation();
  const { activePlayers, substitutePlayers, setLineup } =
    useContext(GameContext);
  const [ins, setIns] = useState([]);
  const [outs, setOuts] = useState([]);
  function toggleIns(id) {
    if (ins.includes(id)) {
      setIns(ins.filter(el => el !== id));
    } else {
      setIns([...ins, id]);
    }
  }
  function toggleOuts(id) {
    if (outs.includes(id)) {
      setOuts(outs.filter(el => el !== id));
    } else {
      setOuts([...outs, id]);
    }
  }
  function handleSubstitute() {
    if (ins.length !== outs.length) {
      Alert.alert('Error', 'You should check your inputs again.');
    } else {
      setLineup(e => [...e.filter(el => !ins.includes(el)), ...outs]);
      navigation.navigate('Main');
      // console.log(ins, outs);
    }
  }
  return (
    <ViewContainer hideStatusBar isView={false}>
      <StatsHeader />
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.leftBar}>
            <Text style={styles.subtitle}>Active Lineup</Text>
            <View style={styles.activePlayerBox}>
              {activePlayers.map((el, index) => (
                <SeletablePlayer
                  key={index}
                  name={el.name}
                  selected={ins.includes(el.id)}
                  toggle={() => toggleIns(el.id)}
                  number={el.number}
                  available={el.available}
                  image={el.image}
                  width={hp(7)}
                  imageWidth={hp(7)}
                />
              ))}
            </View>
          </View>
          <View style={styles.rightBar}>
            <View style={styles.boxList}>
              <Text style={styles.subtitle}>Select Substitute</Text>
              <View style={styles.substitutesArea}>
                {substitutePlayers.map(el => (
                  <SeletablePlayer
                    image={el.image}
                    name={el.name}
                    width={wp(18)}
                    selected={outs.includes(el.id)}
                    toggle={() => toggleOuts(el.id)}
                    imageWidth={wp(13)}
                    emptyColor={customTheme.colors.brightGreen}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <Button
            label="Substitute"
            onPress={handleSubstitute}
            style={{
              alignSelf: 'center',
              paddingVertical: wp(3),
              paddingHorizontal: hp(10),
            }}
          />
          <Button
            label="Cancel"
            style={{ alignSelf: 'flex-end', borderRadius: wp(1) }}
            backgroundColor={customTheme.colors.gray_300}
            size="small"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </ViewContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customTheme.colors.background,
  },
  topSection: {
    flexDirection: 'row',
  },
  leftBar: {
    width: '40%',

    paddingHorizontal: hp(2),
  },
  rightBar: {
    width: '60%',
    paddingHorizontal: hp(2),
    gap: wp(1),
  },
  subtitle: {
    height: wp(10),
    paddingVertical: wp(1),
    textAlignVertical: 'bottom',
    fontSize: FontSize.bodyLargeBold_size,
    color: customTheme.colors.light,
  },
  activePlayerBox: {
    marginVertical: wp(4),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: hp(3),
    rowGap: wp(2),
    borderRightColor: customTheme.colors.overlayWhite,
    borderRightWidth: 1,
    height: wp(40),
    width: '100%',
  },
  boxList: {
    gap: hp(1),
  },
  bottomSection: {
    paddingHorizontal: hp(2),
  },
  substitutesArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: wp(3),
  },
});
