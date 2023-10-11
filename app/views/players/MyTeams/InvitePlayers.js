import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back from '../../../utils/HeaderButtons/Back';
import { hp, wp } from '../../../utils/responsive';
import { useNavigation } from '@react-navigation/native';
import { FormInputField } from '../../../components/common/FormInputs';
import PrimaryButton from '../../../components/common/PrimaryButton';
import Share from 'react-native-share';

const InvitePlayers = () => {
  const navigation = useNavigation();

  const onPressShareHandler = () => {
    const url = 'https://awesome.contents.com/';
    const title = 'Nextup';
    const subTitle = 'Invite friend';
    const options = Platform.select({
      ios: {
        activityItemSources: [
          {
            // For using custom icon instead of default text icon at share preview when sharing with message.
            placeholderItem: {
              type: 'url',
              content: subTitle,
            },
            item: {
              default: {
                type: 'text',
                content: url,
              },
            },
            linkMetadata: {
              title: title,
              // icon: icon,
            },
          },
        ],
      },
      default: {
        title,
        subject: title,
        message: `${url}`,
      },
    });
    try {
      Share.open(options);
    } catch (error) {}
  };

  const onPressInviteHandler = () => {
    navigation.navigate('InvitePlayers');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Back
        containerStyle={styles.backContainer}
        onPress={() => navigation.goBack()}
        title="Invite Player"
      />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}>
        <View>
          <FormInputField
            placeholder={'Enter Full name'}
            onChangeText={text => {}}
            containerStyle={styles.fullNameInput}
            label="Full name"
          />
          <FormInputField
            placeholder={'Enter email id'}
            onChangeText={text => {}}
            containerStyle={styles.emailIdInput}
            label="Email ID"
            keyboardType="email-address"
          />
          <FormInputField
            placeholder={'Enter phone number'}
            onChangeText={text => {}}
            containerStyle={styles.emailIdInput}
            label="Phone number"
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.footer}>
          <PrimaryButton
            title={'Share'}
            style={styles.shareButton}
            onPress={onPressShareHandler}
          />
          <PrimaryButton title={'Invite'} onPress={onPressInviteHandler} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InvitePlayers;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backContainer: { marginHorizontal: wp(7), marginTop: hp(3) },
  fullNameInput: {
    marginTop: hp(5),
    marginVertical: hp(2),
    marginHorizontal: wp(8),
    marginRight: wp(8),
    flex: 0,
  },
  emailIdInput: {
    marginVertical: hp(2),
    marginHorizontal: wp(8),
    marginRight: wp(8),
    flex: 0,
  },
  shareButton: { backgroundColor: 'transparent' },
  footer: {
    marginTop: 'auto',
    marginHorizontal: wp(10),
    marginBottom: hp(2),
    gap: hp(2),
  },
});
