import { FlatList, ScrollView, StyleSheet } from 'react-native';
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

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <SectionHeader title={'Upcoming Games'} />
      <FlatList
        horizontal
        data={times(4)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => <EventItem title="12:39" />}
        contentContainerStyle={{ columnGap: wp(2) }}
        showsHorizontalScrollIndicator={false}
      />
      <SectionHeader
        title={'Practice Schedule'}
        containerStyle={{ marginTop: hp(3.5) }}
      />
      <PracticeScheduleItem />
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
