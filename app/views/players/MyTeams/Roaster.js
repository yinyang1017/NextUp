import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../../../components/common/PrimaryButton';
import { hp, wp } from '../../../utils/responsive';

export default function Roaster() {
  const navigation = useNavigation();
  return (
    <PrimaryButton
      title={'Add players'}
      onPress={() => {
        navigation.navigate('SearchPlayers');
      }}
      style={{ marginHorizontal: wp(10), marginTop: hp(10) }}
    />
  );
}
