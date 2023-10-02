import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Back from '../../../../utils/HeaderButtons/Back';
import { hp, wp } from '../../../../utils/responsive';
import { Image } from 'react-native-ui-lib';
import { FontFamily, FontSize } from '../../../../views/GlobalStyles';
import { Colors } from '../../../../constants';
import { useNavigation } from '@react-navigation/native';
import { MyColors } from '../../../../constants/colors';

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
            <Text style={styles.username}>Kervin</Text>
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
    borderBottomColor: '#333333',
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
  username: {
    fontSize: FontSize.size_xl,
    color: Colors.light,
    fontWeight: '600',
    fontFamily: FontFamily.robotoRegular,
  },
  onlineText: {
    marginTop: hp(0.2),
    color: MyColors.btnBg,
    fontWeight: '500',
    fontFamily: FontFamily.robotoRegular,
  },
});
