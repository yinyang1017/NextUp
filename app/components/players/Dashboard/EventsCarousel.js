import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SectionHeader } from '../../common/SectionHeader';
import { useNavigation } from '@react-navigation/native';
import { times } from 'lodash';
import EventItem from '../../common/EventItem';
import { wp } from '../../../utils/responsive';

export const EventCarousel = ({ title = 'Upcoming Schedules' }) => {
  const navigation = useNavigation();
  return (
    <>
      <SectionHeader title={title} />
      <ScrollView
        style={styles.frameScrollview}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}>
        {times(5).map((_, index) => {
          return (
            <EventItem
              key={index}
              onPress={() => navigation.navigate('CoUpGame')}
              title="22 Aug 2022, 18:00"
            />
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  frameScrollview: { alignSelf: 'stretch', width: '100%' },
  frameScrollViewContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    columnGap: wp(4),
  },
});
