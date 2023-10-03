import {Avatar, Image, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import {Pressable} from 'react-native';
import {ScrollViewContainer} from '../../../components/common/SrollViewContainer';
import {customTheme} from '../../../constants';
import _ from 'lodash';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleRight,
  faUser,
  faUserAlt,
  faUserAltSlash,
  faTicketSimple,
  faTrashAlt,
  faRightFromBracket,
  faStar,
  faShare,
  faShareNodes,
  faStickyNote,
  faCheckSquare,
  faHeadphonesSimple,
} from '@fortawesome/free-solid-svg-icons';
import {ConfirmationDialog} from '../../../components/common/confirmationDialog';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function MyAccount() {
  const [dialog, setDialog] = useState({
    logout: false,
  });
  const navigation = useNavigation();
  const profileMenuOptions = [
    {
      name: 'My Profile',
      icon: faUser,
    },
    {
      name: 'Subscriptions',
      icon: faTicketSimple,
    },
    {
      name: 'Help and Support ',
      icon: faHeadphonesSimple,
    },
    {
      name: 'Privacy Policy ',
      icon: faCheckSquare,
    },
    {
      name: 'Terms and Conditions ',
      icon: faStickyNote,
    },
    {
      name: 'Share Application',
      icon: faShareNodes,
    },
    {
      name: 'Rate Us',
      icon: faStar,
    },
    {
      name: 'Logout',
      icon: faRightFromBracket,
      onPress: () => {
        setDialog({
          logout: true,
        });
      },
    },
    {
      name: 'Delete Account',
      icon: faTrashAlt,
    },
  ];
  return (
    <ScrollViewContainer>
      <View
        style={{
          alignSelf: 'center',
        }}>
        <Image
          style={{
            borderWidth: 2,
            borderColor: customTheme.colors.white,
            height: 80,
            width: 80,
            borderRadius: 40,
            alignSelf: 'center',
          }}
          source={{
            uri: 'https://unsplash.com/photos/CREqtqgBFcU/download?force=true',
          }}
        />
        <Text
          style={{
            color: customTheme.colors.white,
            marginVertical: customTheme.spacings.spacing_8,
            fontSize: customTheme.fontSizes.size_20,
            textAlign: 'center',
            fontWeight: '700',
            fontFamily: customTheme.fontFamily.robotoRegular,
          }}>
          Michele_99
        </Text>
        <Pressable
          onPress={() => navigation.navigate('Home', {screen: 'EditProfile'})}>
          <Text
            style={{
              color: customTheme.colors.white,
              textAlign: 'center',
              fontSize: customTheme.fontSizes.size_16,
            }}>
            Edit profile
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          marginVertical: customTheme.spacings.spacing_40,
        }}>
        {_.map(profileMenuOptions, (item, index) => {
          return (
            <Pressable
              onPress={item.onPress}
              key={index}
              style={{
                backgroundColor: customTheme.colors.primary,
                marginVertical: customTheme.spacings.spacing_4,
                borderRadius: customTheme.spacings.spacing_8,
                paddingHorizontal: customTheme.spacings.spacing_16,
                paddingVertical: customTheme.spacings.spacing_8,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <FontAwesomeIcon
                  icon={item?.icon}
                  color={customTheme.colors.white}
                  size={customTheme.fontSizes.size_28}
                />
                <Text
                  style={{
                    color: customTheme.colors.white,
                    marginLeft: customTheme.spacings.spacing_8,
                  }}>
                  {item?.name}
                </Text>
              </View>
              <View
                style={{
                  marginLeft: 'auto',
                  borderLeftWidth: 1,
                  borderLeftColor: customTheme.colors.white,
                  opacity: 0.6,
                  paddingHorizontal: customTheme.spacings.spacing_8,
                }}>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  color={customTheme.colors.white}
                />
              </View>
            </Pressable>
          );
        })}
      </View>
      <ConfirmationDialog
        open={dialog.logout}
        title="Want to log out?"
        body="You won’t be able to continue your journey logged out."
        confirmText="Yes, log me out"
        cancelText="No, stay here"
        onClose={() => setDialog({...dialog, logout: false})}
        onConfirm={() => {
          navigation.navigate('Welcome');
          setDialog({...dialog, logout: false});
        }}
      />
    </ScrollViewContainer>
  );
}
