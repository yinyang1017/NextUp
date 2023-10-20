import { View } from 'react-native';
import React from 'react';
import StaffItem from '../../../components/common/StaffItem';
import { hp, wp } from '../../../utils/responsive';
import HeaderGreyComponent from '../../../components/common/HeaderGreyComponent';
import AddButtonWithIcon from '../../../components/common/AddButtonWithIcon';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

const Roles = () => {
  const { isCoach } = useAuth();
  const navigation = useNavigation();

  const renderRightContent = () => {
    return isCoach ? (
      <AddButtonWithIcon onPress={() => navigation.navigate('SearchPlayers')} />
    ) : null;
  };

  return (
    <View style={{ paddingHorizontal: wp(4.5) }}>
      <HeaderGreyComponent
        title="Coaches"
        containerStyle={{ marginTop: hp(2.5) }}
        rightContent={renderRightContent}
      />
      <StaffItem
        containerStyle={{ marginTop: hp(2) }}
        name={'Devon Lane'}
        email={'devonlane@gmail.com'}
      />
      <HeaderGreyComponent
        title="Stat Keeper"
        containerStyle={{ marginTop: hp(4) }}
        rightContent={renderRightContent}
      />
      <StaffItem
        containerStyle={{ marginTop: hp(2) }}
        name={'Jacob Jones'}
        email={'jacobjones@gmail.com'}
      />
      <HeaderGreyComponent
        title="Trainers"
        containerStyle={{ marginTop: hp(4) }}
        rightContent={renderRightContent}
      />
      <StaffItem
        containerStyle={{ marginTop: hp(2) }}
        name={'Devon Lane'}
        email={'devonlane@gmail.com'}
      />
    </View>
  );
};

export default Roles;
