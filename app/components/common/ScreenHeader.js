import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native-ui-lib"
import {
  Layout,
  customTheme
} from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { wp } from '../../utils/responsive';

let wide = Layout.width;

export const ScreenHeader = ({ title, backButtonAction = () => null }) => {
  const navigation = useNavigation()
  return (
    <View
      row
      marginB-20
      style={{
        alignItems: 'center',
      }}
    >
      {
        navigation.canGoBack() && <TouchableOpacity
          center
          activeOpacity={0.5}
          style={{
            height: wp(8),
            width: wp(8),
            borderRadius: wp(1),
            borderWidth: 2,
            borderColor: customTheme.colors.borderColor,
          }}
          onPress={() => {
            navigation.goBack()
            backButtonAction()
          }}
        >
          <Image
            height={wp(3.5)}
            width={wp(3.5)}
            source={require('../../assets/leftArrow1.png')}
          />
        </TouchableOpacity>
      }

      <Text
        medium-500
        marginL-12
      >
        {title}
      </Text>
    </View>
  );
};
