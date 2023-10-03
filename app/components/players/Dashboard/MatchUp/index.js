import * as React from 'react';
import {TouchableOpacity, View, Text, FlatList, Image} from 'react-native';

import {Layout, Colors, Fonts} from '../../../../constants';
import MatchUpBoard from './MatchUpBoard';
import { FontSize } from '../../../../views/GlobalStyles';
import {hp} from '../../../../utils/responsive';
import {FontFamily} from '../../../../views/GlobalStyles';
import { MyColors } from '../../../../constants/colors';

import _img1 from '../../../../assets/images/dummyPlayer.png';
import _img2 from '../../../../assets/images/dummy2.png';
const wide = Layout.width;
function MatchUp() {
  const data = [
    {
      secondPlayerName: 'Player B',
      firstPlayerName: 'Player A',
      firstPlayerImg: _img1,
      secondPlayerImg: _img2,
    },
  ];
  return (
    <View
      style={{
        marginTop: wide * 0.08,
        // width: '100%',
        width: '92%',
        alignSelf: 'center',
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: FontFamily.robotoRegular,
            fontWeight: '700',
            color: MyColors.light,
            fontSize: FontSize.size_3xl,
            marginTop: hp(1),
          }}>
          Player Matchup
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: wide * 0.01,
          }}>
          <Text
            style={{
              color: Colors.btnBg,
              fontFamily: Fonts.Medium,
              fontSize: 14,
              lineHeight: 16,
              fontWeight: '500',
            }}>
            See All
          </Text>
          <Image
            source={require('.../../../../assets/images/seeAll_Icon.png')}
            style={{width: 14, height: 14}}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: wide * 0.03,
          marginBottom: wide,
        }}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          style={{
            marginLeft: wide * 0.02,
            overflow: 'visible',
          }}
          horizontal
          pagingEnabled={true}
          legacyImplementation={false}
          keyExtractor={item => item.index}
          renderItem={item => <MatchUpBoard item={item} />}
        />
      </View>
    </View>
  );
}
export default MatchUp;
