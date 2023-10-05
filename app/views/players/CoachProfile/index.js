import React from 'react';
import {
  ScrollView,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Layout, Colors, Fonts} from '../../../constants';
import {ProfileHeader} from './ProfileHeader';
import coachImg from '../../../assets/images/coachPublicImage.png'
const wide = Layout.width;
export default function CoachDashboard() {
  const name = {firstName: 'Albert', secondName: 'Flores'};
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        flex: 1,
        // minHeight: isNotch ? Layout.height - 100 : Layout.height - 80,
        paddingBottom: 20,
        // backgroundColor: "green",
      }}>
      <ProfileHeader
        name={'Albert Flores'}
        experience={'5 Years'}
        position={'Head Coach'}
        record={'18-8'}
        coachImg={coachImg}
      />
    </ScrollView>
  );
}
