import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Back from '../../../utils/HeaderButtons/Back';
import { useNavigation } from '@react-navigation/native';
import { hp, isAndroid, wp } from '../../../utils/responsive';
import HeaderGreyComponent from '../../../components/common/HeaderGreyComponent';
import AvatarItem from '../../../components/common/AvatarItem';
import { times } from 'lodash';
import { customTheme } from '../../../constants';
import { Text } from 'react-native-ui-lib';
import CheckboxItem from '../../../components/common/CheckboxItem';
import PrimaryButton from '../../../components/common/PrimaryButton';

const LineupDetails = () => {
  const navigation = useNavigation();

  const gobackHandler = () => {
    navigation.goBack();
  };

  const renderAvatarItem = (item, index, isDisable) => {
    return (
      <AvatarItem
        title="A. McCoy"
        containerStyle={styles.avatarItem}
        key={index}
        subTitle="F"
        subTitleStyle={{ color: customTheme.colors.btnBg }}
        isDisable={isDisable}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Back
        onPress={gobackHandler}
        title="O’Dea High School"
        containerStyle={styles.backButton}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <HeaderGreyComponent title="Selected Player" />
        <View style={styles.rowWrap}>
          {times(5).map((item, index) => renderAvatarItem(item, index))}
        </View>
        <HeaderGreyComponent
          title="Bench"
          containerStyle={styles.benchGreyHeader}
        />
        <View style={styles.rowWrap}>
          {times(10).map((item, index) => renderAvatarItem(item, index, true))}
        </View>
        <Text medium-500 style={styles.selectedPlayersText}>
          <Text medium-500 color={customTheme.colors.secondary}>
            5/5
          </Text>{' '}
          Players Selected
        </Text>
        <CheckboxItem
          title={'Mark as a Default'}
          containerStyle={styles.markAsDefaultCheckBox}
        />
        <View style={styles.footer}>
          <PrimaryButton title={'Edit Lineup'} />
          <PrimaryButton
            title={'Delete Lineup'}
            style={styles.deleteLineupButton}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LineupDetails;

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: wp(5) },
  backButton: { marginTop: hp(2), marginBottom: hp(4) },
  scrollContent: { paddingBottom: hp(isAndroid ? 3 : 5) },
  rowWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: hp(1),
  },
  avatarItem: { width: '20%', marginBottom: hp(2) },
  benchGreyHeader: { marginTop: hp(2) },
  selectedPlayersText: { alignSelf: 'center', marginTop: hp(3) },
  markAsDefaultCheckBox: { marginTop: hp(7), alignSelf: 'center' },
  footer: { gap: hp(1), marginTop: hp(3) },
  deleteLineupButton: { backgroundColor: 'transparent' },
});
