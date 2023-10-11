import { StyleSheet, View } from 'react-native';
import React from 'react';
import Back from '../../../../utils/HeaderButtons/Back';
import { hp, wp } from '../../../../utils/responsive';
import { Image, Text } from 'react-native-ui-lib';
import { customTheme } from '../../../../constants';
import { useNavigation } from '@react-navigation/native';

const ChatHeader = () => {
  const navigation = useNavigation();

  const gobackHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <View style={styles.headerBody}>
        <Back onPress={gobackHandler} />
        <View style={styles.userInfoContainer}>
          <Image
            source={require('../../../../assets/avatar3.png')}
            style={styles.profileImage}
          />
          <View style={styles.usernameInfoContainer}>
            <Text large-x-600>Kervin</Text>
            <Text style={styles.onlineText}>online</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  root: {
    borderBottomColor: customTheme.colors.titleLineColor,
    borderBottomWidth: 1,
    paddingVertical: hp(3),
  },
  headerBody: {
    paddingHorizontal: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoContainer: {
    marginLeft: wp(25),
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: { height: wp(12), width: wp(12), borderRadius: wp(12) },
  usernameInfoContainer: { marginLeft: wp(3) },
  onlineText: {
    marginTop: hp(0.2),
    color: customTheme.colors.btnBg,
    fontWeight: '500',
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
});
