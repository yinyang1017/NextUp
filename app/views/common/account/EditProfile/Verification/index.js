import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from 'react-native';
import {wp, hp} from '../../../../../utils/responsive';
import {
  Permission,
  PERMISSION_TYPE,
} from '../../../../../utils/permissionCheck';
import {SafeAreaView} from 'react-native-safe-area-context';
import PrimaryButton from '../../../../../components/common/PrimaryButton';
import DeviceInfo from 'react-native-device-info';
import {showAppPermissionAlert} from '../../../../../utils/info';
import {Layout, Colors, Fonts} from '../../../../../constants';
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
import passportImg from '../../../../../assets/images/passport.png';
import tickSelectedIcon from '../../../../../assets/images/tick_selected.png';
import newUncheckIcon from '../../../../../assets/images/new_uncheck_icon.png';
import rejectDocIcon from '../../../../../assets/images/doc_reject_icon.png';
import dottedLine from '../../../../../assets/images/seperator_dash.png';
import placeholder from '../../../../../assets/images/Placeholder_PhotoId.png';
import placeholderBorder from '../../../../../assets/images/placeHolder_photoid_border.png';
import InfoIcon from '../../../../../assets/images/info_icon.png';
import CoachCertPlaceholder from '../../../../../assets/images/CochingCerti.png';
const wide = Layout.width;
function Verification() {
  const systemName = DeviceInfo.getSystemName();
  const [idProofUrl, setIdProofUrl] = React.useState(passportImg);
  const [isIdApproved, setApproved] = React.useState(true);
  const [isCoachCertiApproved, setCoachCertiApproved] = React.useState(false);
  const userData = {
    typeOfUser: 'COACH',
  };
  const [certificateIdUrl, setCertificateUrl] = React.useState(passportImg);
  function pickIdSingle(cropit, circular = false, isFrom) {
    Alert.alert(
      isFrom === 'ava' ? 'PHOTO ID' : 'COACHING CERTIFICATE',
      'Pick from',
      [
        {
          text: 'Gallery',
          onPress: async () => {
            const res = await Permission.checkPermission(
              PERMISSION_TYPE.gallery,
            );
            if (res) {
              ImagePicker.openPicker({
                width: 500,
                height: 500,
                cropping: cropit,
                cropperCircleOverlay: circular,
                sortOrder: 'none',
                compressImageMaxWidth: 1000,
                compressImageMaxHeight: 1000,
                compressImageQuality: 1,
                compressVideoPreset: 'MediumQuality',
                includeExif: true,
                cropperStatusBarColor: 'white',
                cropperToolbarColor: 'white',
                cropperActiveWidgetColor: 'white',
                cropperToolbarWidgetColor: '#3498DB',
                mediaType: 'photo',
              })
                .then(image => {
                  // console.log('received image', image);
                  if (isFrom === 'ava') {
                    setIdProofUrl(image.path);
                  } else {
                    setIdProofUrl(image.path);
                  }
                  //
                })
                .catch(e => {
                  console.log(e);
                  // Alert.alert(e.message ? e.message : e);
                });
            } else {
              if (systemName === 'ios') {
                showAppPermissionAlert(
                  'Alert',
                  'You have not granted permission for photo library.',
                );
              }
            }
          },
        },
        {
          text: 'Camera',
          onPress: async () => {
            const res = await Permission.checkPermission(
              PERMISSION_TYPE.camera,
            );
            if (res) {
              ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
                mediaType: 'photo',
              }).then(image => {
                if (isFrom === 'ava') {
                  setIdProofUrl(image.path);
                } else {
                  setIdProofUrl(image.path);
                }
              });
            } else {
              if (systemName === 'ios') {
                showAppPermissionAlert(
                  'Alert',
                  'You have not granted permission for camera.',
                );
              }
            }
          },
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }
  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => pickIdSingle(true, false, 'ava')}>
          {idProofUrl === '' || idProofUrl === undefined ? (
            <Image
              source={placeholder}
              resizeMode="cover"
              style={{tintColor: Colors.photIdRactangle}}
            />
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <FastImage
                style={{
                  height: wide * 0.3,
                  width: wide * 0.46,
                  borderRadius: 5,
                }}
                source={idProofUrl}
                resizeMode="cover"
              />

              <Image
                source={placeholderBorder}
                style={{
                  position: 'absolute',
                  tintColor: Colors.photIdRactangle,
                }}
              />
            </View>
          )}
          {idProofUrl === undefined ? (
            <Text
              style={{
                paddingTop: 10,
                color: Colors.greyTxtColor,
                fontSize: 12,
                fontFamily: Fonts.Regular,
                lineHeight: 16,
                width: wide * 0.5,
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              For profile verification, try not to skip the process
            </Text>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: wide * 0.015,
              }}>
              {isIdApproved === false ? (
                <Image
                  source={InfoIcon}
                  style={{
                    width: 15,
                    height: 15,
                    tintColor: Colors.photIdRactangle,
                  }}
                />
              ) : (
                <></>
              )}
              {isIdApproved === false ? (
                <Text
                  style={{
                    marginTop: 16,
                    color: Colors.photIdRactangle,
                    fontSize: 12,
                    fontFamily: Fonts.Regular,
                    lineHeight: 16,
                    width: wide * 0.5,
                    textAlign: 'center',
                    marginHorizontal: wide * 0.01,
                  }}>
                  Your document is under verification, We will notify once
                  verified.
                </Text>
              ) : isIdApproved == false ? (
                <View>
                  <Text
                    style={{
                      marginTop: 16,
                      color: Colors.photIdRactangle,
                      fontSize: 12,
                      fontFamily: Fonts.Regular,
                      lineHeight: 14,
                      width: wide * 0.52,
                      textAlign: 'center',
                      marginHorizontal: wide * 0.01,
                    }}>
                    Your document is rejeted. Please upload right documents.
                  </Text>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => pickIdSingle(true, false, 'ava')}>
                    <Text
                      style={{
                        color: Colors.btnBg,
                        fontSize: 12,
                        fontFamily: Fonts.Regular,
                        lineHeight: 16,
                        width: wide * 0.52,
                        textAlign: 'center',
                      }}>
                      {' '}
                      Reupload
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <></>
              )}
            </View>
          )}
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            top: wide * 0.18,
            bottom: wide * 0.18,
            left: wide * 0.04,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {idProofUrl === '' || idProofUrl === null ? (
            <Image style={styles.icon} source={newUncheckIcon} />
          ) : isIdApproved == null ? (
            <Image style={styles.icon} source={tickSelectedIcon} />
          ) : isIdApproved === true ? (
            <Image style={styles.icon} source={tickSelectedIcon} />
          ) : (
            <Image style={styles.icon} source={rejectDocIcon} />
          )}

          {userData?.typeOfUser === 'COACH' && (
            <>
              <Image
                style={{
                  flex: 1,
                  tintColor: Colors.photIdRactangle,
                }}
                source={dottedLine}
                resizeMode="stretch"
              />
              {certificateIdUrl === '' || certificateIdUrl === null ? (
                <Image style={styles.icon} source={newUncheckIcon} />
              ) : isCoachCertiApproved == null ? (
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={tickSelectedIcon}
                />
              ) : isCoachCertiApproved === true ? (
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={tickSelectedIcon}
                />
              ) : (
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={rejectDocIcon}
                />
              )}
            </>
          )}
        </View>
        {userData?.typeOfUser === 'COACH' && (
          <TouchableOpacity
            style={{marginTop: wide * 0.1}}
            onPress={() => pickIdSingle(true, false, 'certi')}>
            {certificateIdUrl === '' || certificateIdUrl === null ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Image
                  source={CoachCertPlaceholder}
                  resizeMode="cover"
                  style={{tintColor: Colors.photIdRactangle}}
                />
                <View
                  style={{
                    //   position: 'absolute',
                    alignItems: 'center',
                    paddingVertical: 10,
                  }}>
                  <Text
                    style={{
                      color: Colors.photIdRactangle,
                      fontSize: 14,
                      fontFamily: Fonts.Bold,
                      lineHeight: 18,
                    }}>
                    COACHING
                  </Text>
                  <Text
                    style={{
                      color: Colors.photIdRactangle,
                      fontSize: 14,
                      fontFamily: Fonts.Bold,
                      lineHeight: 18,
                    }}>
                    CERTIFICATE
                  </Text>
                </View>
              </View>
            ) : (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <FastImage
                  style={{
                    height: wide * 0.3,
                    width: wide * 0.46,
                    borderRadius: 5,
                  }}
                  source={certificateIdUrl}
                  resizeMode="cover"
                />

                <Image
                  source={placeholderBorder}
                  style={{
                    position: 'absolute',
                    tintColor: Colors.photIdRactangle,
                  }}
                />
              </View>
            )}
            {certificateIdUrl === '' || certificateIdUrl === undefined ? (
              <></>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: wide * 0.015,
                }}>
                {isCoachCertiApproved === false && (
                  <Image
                    source={InfoIcon}
                    style={{
                      width: 15,
                      height: 15,
                      tintColor: Colors.photIdRactangle,
                    }}
                  />
                )}
                {isCoachCertiApproved === true ? (
                  <Text
                    style={{
                      marginTop: 16,
                      color: Colors.photIdRactangle,
                      fontSize: 12,
                      fontFamily: Fonts.Regular,
                      lineHeight: 16,
                      width: wide * 0.5,
                      textAlign: 'center',
                      marginHorizontal: wide * 0.01,
                    }}>
                    Your document is under verification, We will notify once
                    verified.
                  </Text>
                ) : isCoachCertiApproved === false ? (
                  <View>
                    <Text
                      style={{
                        marginTop: 16,
                        color: Colors.photIdRactangle,
                        fontSize: 12,
                        fontFamily: Fonts.Regular,
                        lineHeight: 14,
                        width: wide * 0.52,
                        textAlign: 'center',
                        marginHorizontal: wide * 0.01,
                      }}>
                      Your document is rejeted. Please upload right documents.
                    </Text>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => pickIdSingle(true, false, 'certi')}>
                      <Text
                        style={{
                          color: Colors.btnBg,
                          fontSize: 12,
                          fontFamily: Fonts.Regular,
                          lineHeight: 16,
                          width: wide * 0.52,
                          textAlign: 'center',
                        }}>
                        {' '}
                        Upload New Documents
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <></>
                )}
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>
      <PrimaryButton title={'Save'} style={styles.saveButton} />
    </SafeAreaView>
  );
}
export default Verification;

const styles = StyleSheet.create({
  fullScreen: {flex: 1},
  container: {
    alignItems: 'center',
    marginTop: wide * 0.1,
    width: '90%',
    alignSelf: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  underlined: {
    color: Colors.lightBlue,
    textDecorationLine: 'underline',
  },
  saveButton: {
    marginHorizontal: wp(8),
    marginTop: 'auto',
    marginBottom: hp(2),
  },
});
