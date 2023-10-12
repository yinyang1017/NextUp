import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {wp, hp} from '../../../../utils/responsive';
import Back from '../../../../utils/HeaderButtons/Back';
import ImageUpload from '../../../../components/common/ImageUpload';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AccountDetail from './AccountDetail';
import {Color, FontSize} from '../../../GlobalStyles';
import CustomTabView from './TopTabView';
import {MyColors} from '../../../../constants/colors';
import OtherDetails from './OtherDetails';
import Verification from './Verification';
function EditProfile() {
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();
  const screenOptions = {
    headerShown: true,
    tabBarScrollEnabled: true,
    tabBarIndicatorStyle: {
      backgroundColor: 'white',
      height: 2,
    },
    tabBarStyle: {
      elevator: 0,
      backgroundColor: MyColors.base,
      // height: 34,
    },
    tabBarLabelStyle: {
      textTransform: 'capitalize',
      fontSize: FontSize.bodyMediumSemibold_size,
      fontWeight: '400',
      color: Color.darkgray_100,
    },
  };
  return (
    <SafeAreaView style={styles.container}>
      <Back
        onPress={() => navigation.goBack()}
        containerStyle={styles.backButtonContainer}
        title="Edit Profile"
      />
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Account Details" component={AccountDetail} />
        <Tab.Screen name="Verification" component={Verification} />
        <Tab.Screen name="Other Details" component={OtherDetails} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default EditProfile;

const styles = StyleSheet.create({
  container: {flex: 1},
  backButtonContainer: {
    marginHorizontal: wp(5),
    marginTop: hp(3),
  },
});
