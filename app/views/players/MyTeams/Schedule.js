import {
  FlatList,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import EventItem from '../../../components/common/EventItem';
import { hp, isAndroid, wp } from '../../../utils/responsive';
import { SectionHeader } from '../../../components/common/SectionHeader';
import { times } from 'lodash';
import PrimaryButton from '../../../components/common/PrimaryButton';
import PracticeScheduleItem from '../../../components/common/PracticeScheduleItem';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../hooks/useAuth';

const Schedule = () => {
  const navigation = useNavigation();
  const { isCoach } = useAuth();

  const onPressCreatePracticeHandler = () => {
    navigation.navigate('CreatePractice');
  };

  const onPressPracticeScheduleItemHandler = () => {
    const scheme = Platform.select({
      ios: 'maps://0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${43.0362},${-76.1365}`;
    const label = 'Practice Place';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <SectionHeader
        title={'Upcoming Games'}
        onPressSeeAll={() => {
          // TODO : Calendar Integration
        }}
      />
      <FlatList
        horizontal
        data={times(4)}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => <EventItem title="12:39" />}
        contentContainerStyle={{ columnGap: wp(2) }}
        showsHorizontalScrollIndicator={false}
      />
      <SectionHeader
        title={'Practice Schedule'}
        containerStyle={{ marginTop: hp(3.5) }}
        onPressSeeAll={() => {
          // TODO : Calendar Integration
        }}
      />
      <PracticeScheduleItem onPress={onPressPracticeScheduleItemHandler} />
      {isCoach && (
        <PrimaryButton
          onPress={onPressCreatePracticeHandler}
          title={'Create Practice'}
          style={{ marginTop: hp(6) }}
        />
      )}
    </ScrollView>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: wp(4.5),
    paddingBottom: hp(isAndroid ? 3 : 5),
    paddingTop: hp(1),
  },
});
