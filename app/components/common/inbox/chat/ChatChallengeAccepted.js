import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native-ui-lib';
import { hp, wp } from '../../../../utils/responsive';
import { FontFamily, FontSize } from '../../../../views/GlobalStyles';
import { Colors } from '../../../../constants';
import { MyColors } from '../../../../constants/colors';
import { appImages } from '../../../../constants/appImages';

const ChatChallengeAccepted = ({ containerStyle = {} }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={appImages.fileEnvelope} />
      </View>
      <View style={styles.content}>
        <Text style={styles.dateText}>December 18, 2020</Text>
        <Text style={styles.acceptedText}>
          Ray has accepted your request and preparing your challenge.
        </Text>
      </View>
    </View>
  );
};

export default ChatChallengeAccepted;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    height: wp(12),
    width: wp(12),
    backgroundColor: MyColors.btnBg,
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { height: wp(5), width: wp(5) },
  content: { marginLeft: wp(2.5) },
  dateText: {
    fontSize: FontSize.size_3xs,
    color: '#A6A6A6',
    lineHeight: 10,
    fontFamily: FontFamily.robotoRegular,
  },
  acceptedText: {
    fontSize: FontSize.size_sm_3,
    color: Colors.light,
    fontFamily: FontFamily.robotoRegular,
    paddingRight: wp(15),
    marginTop: hp(0.2),
  },
});
