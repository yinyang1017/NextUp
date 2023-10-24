import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { wp, hp } from '../../../../utils/responsive';
import Back from '../../../../utils/HeaderButtons/Back';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AccountDetail from './AccountDetail';
import { Color, FontSize } from '../../../GlobalStyles';
import { MyColors } from '../../../../constants/colors';
import OtherDetails from './OtherDetails';
import Verification from './Verification';
import { ViewContainer } from '../../../../components/common/ViewConatiner';
import { CustomTabView } from '../../../../components/common/CustomTabView';
import { useAuth } from '../../../../hooks/useAuth';
import PlayerOtherDetails from './PlayerOtherDetails';
import PlayerAcoountEdit from './PlayerAcoountEdit';
function EditProfile() {
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();
  const { isPlayer, isCoach } = useAuth();

  return (
    <ViewContainer headerTilte={'Edit Player Profile'}>
      <Tab.Navigator tabBar={props => <CustomTabView {...props} />}>
        <Tab.Group>
          {
            isCoach && (<Tab.Screen
              name="AccountDetails"
              options={{
                tabBarLabel: 'Account Details',
              }}
              component={AccountDetail} />)
          }
          {
            isPlayer && (<Tab.Screen
              name="AccountDetails"
              options={{
                tabBarLabel: 'Account Details',
              }}
              component={PlayerAcoountEdit} />)
          }
        </Tab.Group>

        <Tab.Screen name="Verification" options={{ tabBarLabel: 'Verification' }} component={Verification} />
        <Tab.Group>
          {
            isCoach && <Tab.Screen name="OtherDetails" options={{ tabBarLabel: 'Other Details' }} component={OtherDetails} />
          }
          {
            isPlayer && <Tab.Screen name="OtherDetails" options={{ tabBarLabel: 'Other Details' }} component={PlayerOtherDetails} />
          }

        </Tab.Group>

      </Tab.Navigator>
    </ViewContainer>
  );
}

export default EditProfile;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backButtonContainer: {
    marginHorizontal: wp(5),
    marginTop: hp(3),
  },
});
