import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Composer, InputToolbar, Send } from 'react-native-gifted-chat';
import { hp, wp } from '../../../../utils/responsive';
import { FontFamily } from '../../../../views/GlobalStyles';
import { Colors, customTheme } from '../../../../constants';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ChatInput = props => {
  const openGalleryHandler = () => {
    launchImageLibrary();
  };

  const openCameraHandler = () => {
    launchCamera();
  };

  return (
    <InputToolbar
      {...props}
      containerStyle={styles.inputContainer}
      primaryStyle={{ alignItems: 'center' }}
      renderComposer={props1 => (
        <Composer {...props1} textInputStyle={styles.composer} />
      )}
      renderActions={() => {
        return (
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('../../../../assets/smiley.png')}
              style={{ height: wp(5), width: wp(5) }}
            />
          </TouchableOpacity>
        );
      }}
      renderSend={() => {
        return (
          <>
            <TouchableOpacity onPress={openGalleryHandler}>
              <Image
                source={require('../../../../assets/attach.png')}
                style={{ height: wp(5), width: wp(5), marginRight: wp(2.5) }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={openCameraHandler}>
              <Image
                source={require('../../../../assets/camera.png')}
                style={{ height: wp(5), width: wp(5), marginRight: wp(0.5) }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Send {...props} containerStyle={styles.sendButtonContainer} />
          </>
        );
      }}
    />
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  composer: {
    fontSize: 13,
    fontFamily: FontFamily.robotoRegular,
    color: Colors.light,
  },
  inputContainer: {
    marginHorizontal: wp(4),
    marginBottom: hp(0.5),
    backgroundColor: customTheme.colors.ractangelCardColor,
    borderTopWidth: 0,
    borderRadius: wp(12),
    paddingHorizontal: wp(4),
  },
});
