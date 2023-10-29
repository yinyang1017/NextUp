import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontFamily, FontSize } from '../../../../views/GlobalStyles';
import { MyColors } from '../../../../constants/colors';
import { hp } from '../../../../utils/responsive';
import { Colors, Fonts, Layout } from '../../../../constants';
import { SectionHeader } from '../../../common/SectionHeader';
import _ from 'lodash';
const wide = Layout.width;

import { GroupAvatar } from '../../../common/GroupAvatar';
import { Avatar } from 'react-native-ui-lib';
import Challenge, {
  ActiveChallenges,
  CompletedChallenges,
} from './ChallengeCard';
const avatarUrls = [
  'https://example.com/avatar1.jpg',
  'https://example.com/avatar2.jpg',
  'https://example.com/avatar3.jpg',
  // Add more avatar URLs as needed
];
const avatarImgs = [
  require('../../../../assets/ellipse-691.png'),
  require('../../../../assets/ellipse-7566.png'),
  require('../../../../assets/ellipse-7572.png'),
];
const playerScores = [
  {
    label: 'PTS',
    id: '12',
    value: '35',
  },
  {
    label: 'REB',
    id: '12',
    value: '35',
  },
  {
    label: 'ATS',
    id: '12',
    value: '35',
  },
];
import cardBgImg from './../../../../assets/frame1000003182.png';
export default function Challenges() {
  return (
    <View style={styles.containerStyle}>
      <SectionHeader
        title={'AI Driven Challenges'}
        textStyle={styles.headerText}
        onPressSeeAll={() => {
          // TODO : Calendar Integration
        }}
      />
      <Challenge
        backgroundImage={cardBgImg}
        dueTime=""
        avatarImgs={avatarImgs}
        variant="small"
      />
      <Challenge
        backgroundImage={cardBgImg}
        dueTime="08 days left"
        avatarImgs={avatarImgs}
        variant="small"
      />
      <Challenge
        backgroundImage={cardBgImg}
        dueTime="08 days left"
        avatarImgs={avatarImgs}
        variant="small"
      />
      {/* <ActiveChallenges avatarUrls={avatarUrls} />
      <CompletedChallenges playerScores={playerScores} /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  headerText: {
    fontFamily: FontFamily.robotoRegular,
    fontWeight: '700',
    color: MyColors.light,
    fontSize: FontSize.size_3xl,
  },
  containerStyle: {
    marginTop: wide * 0.08,
    // width: '100%',
    width: '92%',
    alignSelf: 'center',
  },
});
