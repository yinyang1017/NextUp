import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
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
import { faBackward } from '@fortawesome/free-solid-svg-icons';

let wide = Layout.width;

export const ScreenHeader = ({ title, backButtonAction }) => {
  return (
    <View
      style={{
        // height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 22,
        marginBottom: 8,
        paddingTop: customTheme.spacings.spacing_48
      }}
    >
      {
        backButtonAction && <TouchableOpacity
          style={{
            width: wide * 0.1,
            height: wide * 0.1,
          }}
          onPress={backButtonAction}
        >
          <FontAwesomeIcon
            style={{
              width: wide * 0.08,
              height: wide * 0.08,
              borderRadius: wide * 0.02,
              borderWidth: 1.5,
              borderColor: Colors.borderColor,
            }}
            icon={faBackward}
          />
        </TouchableOpacity>
      }

      <Text
        style={{

          color: customTheme.colors.light,
          fontSize: customTheme.fontSizes.size_32,
          fontWeight: '700',
          fontFamily: customTheme.fontFamily.robotoBold,
        }}
      >
        {title}
      </Text>
    </View>
  );
};
