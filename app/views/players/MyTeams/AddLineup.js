import { StyleSheet } from 'react-native';
import React from 'react';
import { hp, isAndroid, wp } from '../../../utils/responsive';
import Back from '../../../utils/HeaderButtons/Back';
import { FormInputField } from '../../../components/common/FormInputs';
import HeaderGreyComponent from '../../../components/common/HeaderGreyComponent';
import { times } from 'lodash';
import AvatarItem from '../../../components/common/AvatarItem';
import { Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../../constants';
import PrimaryButton from '../../../components/common/PrimaryButton';
import { appImages } from '../../../constants/appImages';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddLineup = () => {
  const renderAvatarItem = (_, index) => {
    return (
      <AvatarItem
        title="A. McCoy"
        containerStyle={styles.avatarItem}
        key={index}
      />
    );
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Back title="Create New Lineup" containerStyle={styles.backButton} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <FormInputField
          label={'LINEUP  NAME'}
          placeholder="Enter lineup name"
          containerStyle={styles.lineupNameInput}
          onChangeText={() => {}}
        />
        <HeaderGreyComponent title="Forwards" />
        <View row center style={styles.rowWrap}>
          {times(5).map(renderAvatarItem)}
        </View>
        <HeaderGreyComponent
          title="Centers"
          containerStyle={{ marginTop: hp(2) }}
        />
        <View
          row
          center
          style={[styles.rowWrap, { justifyContent: 'flex-start' }]}>
          {times(2).map(renderAvatarItem)}
        </View>
        <HeaderGreyComponent
          title="Guards"
          containerStyle={{ marginTop: hp(2) }}
        />
        <View row center style={styles.rowWrap}>
          {times(8).map(renderAvatarItem)}
        </View>
        <Text medium-500 style={styles.playerSelected}>
          <Text medium-500 color={customTheme.colors.darkRed}>
            0/5
          </Text>{' '}
          Players Selected
        </Text>
        <View style={styles.footer}>
          <PrimaryButton
            title={'Ai Coach Lineup'}
            style={styles.aiCochLineup}
            iconSource={appImages.crown}
            iconStyle={styles.aiCochLineupButtonIcon}
          />
          <PrimaryButton title={'Save'} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddLineup;

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: wp(5) },
  backButton: { marginTop: hp(2) },
  avatarItem: { width: '20%', marginBottom: hp(2) },
  listContentContainer: { marginTop: hp(2) },
  rowWrap: { flexWrap: 'wrap', marginTop: hp(1) },
  playerSelected: { marginTop: hp(5), alignSelf: 'center' },
  scrollContent: { paddingBottom: hp(isAndroid ? 3 : 5) },
  footer: { marginTop: hp(15), rowGap: hp(2) },
  aiCochLineup: { backgroundColor: customTheme.colors.tangaroa },
  aiCochLineupButtonIcon: { tintColor: customTheme.colors.darkYellow2 },
  lineupNameInput: { marginVertical: hp(4), height: 'auto' },
});
