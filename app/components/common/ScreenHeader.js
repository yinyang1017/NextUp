import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  Pressable
} from 'react-native';
import {
  CommonStyles,
  Colors,
  Layout,
  Container,
  Fonts,
  customTheme
} from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

let wide = Layout.width;

export const ScreenHeader = ({ title, backButtonAction }) => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        // height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: customTheme.spacings.spacing_48,
        marginBottom: customTheme.spacings.spacing_20
      }}
    >
      {
        navigation.canGoBack() && <Pressable
          style={{

            borderWidth: 1,
            borderColor: customTheme.colors.tertiary,
            borderRadius: wide * 0.03,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: customTheme.spacings.spacing_12,
            paddingVertical: customTheme.spacings.spacing_8,
            marginRight: customTheme.spacings.spacing_12
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon
            color={customTheme.colors.white}
            style={{
              fontSize: customTheme.spacings.spacing_16,
            }}



            icon={faArrowLeft}
          />
        </Pressable>
      }

      <Text
        style={{

          color: customTheme.colors.light,
          fontSize: customTheme.fontSizes.size_16,
          fontWeight: '700',
          fontFamily: customTheme.fontFamily.robotoBold,
        }}
      >
        {title}
      </Text>
    </View>
  );
};
