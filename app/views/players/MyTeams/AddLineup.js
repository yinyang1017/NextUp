import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { hp, isAndroid, wp } from '../../../utils/responsive';
import Back from '../../../utils/HeaderButtons/Back';
import { useNavigation } from '@react-navigation/native';
import { FormInputField } from '../../../components/common/FormInputs';
import HeaderGreyComponent from '../../../components/common/HeaderGreyComponent';
import { times } from 'lodash';
import AvatarItem from '../../../components/common/AvatarItem';
import { Text } from 'react-native-ui-lib';
import { customTheme } from '../../../constants';
import PrimaryButton from '../../../components/common/PrimaryButton';
import { appImages } from '../../../constants/appImages';

const AddLineup = () => {
  const navigation = useNavigation();

  const gobackHandler = () => {
    navigation.goBack();
  };

  const renderAvatarItem = (item, index) => {
    return (
      <AvatarItem
        title="A. McCoy"
        containerStyle={styles.avatarItem}
        key={index}
      />
    );
  };

  return (
    <View edges={['top']} style={styles.container}>
      <Back
        onPress={gobackHandler}
        title="Create New Lineup"
        containerStyle={styles.backButton}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <FormInputField
          label={'LINEUP  NAME'}
          placeholder="Enter lineup name"
          containerStyle={{ marginVertical: hp(4), height: 'auto' }}
        />
        <HeaderGreyComponent title="Forwards" />
        <View style={styles.rowWrap}>{times(5).map(renderAvatarItem)}</View>
        <HeaderGreyComponent
          title="Centers"
          containerStyle={{ marginTop: hp(2) }}
        />
        <View style={[styles.rowWrap, { justifyContent: 'flex-start' }]}>
          {times(2).map(renderAvatarItem)}
        </View>
        <HeaderGreyComponent
          title="Guards"
          containerStyle={{ marginTop: hp(2) }}
        />
        <View style={styles.rowWrap}>{times(8).map(renderAvatarItem)}</View>
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
      </ScrollView>
    </View>
  );
};

export default AddLineup;

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: wp(5) },
  backButton: { marginTop: hp(2) },
  avatarItem: { width: '20%', marginBottom: hp(2) },
  listContentContainer: { marginTop: hp(2) },
  rowWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: hp(1),
  },
  playerSelected: { marginTop: hp(5), alignSelf: 'center' },
  scrollContent: { paddingBottom: hp(isAndroid ? 3 : 5) },
  footer: { marginTop: hp(15), rowGap: hp(2) },
  aiCochLineup: { backgroundColor: customTheme.colors.tangaroa },
  aiCochLineupButtonIcon: { tintColor: customTheme.colors.darkYellow2 },
});
