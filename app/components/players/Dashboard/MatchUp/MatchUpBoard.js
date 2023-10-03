import * as React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Layout, Colors, Fonts} from '../../../../constants';
import bgImg from '../../../../assets/images/playerMatchUpCard.png';
const wide = Layout.width;
function MatchUpBoard({item}) {
  return (
    <>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: wide * 0.05,
          borderRadius: 8,
          width: wide * 0.6,
          height: wide * 0.3,
        }}
        //   onPress={() =>
        //     Navigation.navigate('PlayerCompare', {
        //       homePlayer: {
        //         playerId: item?.item.firstPlayerId,
        //         name: item?.item.firstPlayerName,
        //         profilePictureUrl: item?.item.firstPlayerProfilePicUrl,
        //       },
        //       secondPlayer: {
        //         id: item?.item.secondPlayerId,
        //         name: item?.item.secondPlayerName,
        //         profilePictureUrl: item?.item.secondPlayerProfilePicUrl,
        //       },

        //       isSinglePlayer: false,
        //     })
        //   }
      >
        <Image
          source={bgImg}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 8,
            position: 'absolute',
          }}
        />

        <View
          style={{
            marginTop: wide * 0.05,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            // backgroundColor: "green",
            width: '78%',
            justifyContent: 'space-between',
          }}>
          {/* edit by keshav */}
          <View
            style={{
              width: wide * 0.16,
              height: wide * 0.16,
              backgroundColor: Colors.light,
              borderRadius: (wide * 0.16) / 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 4,
              borderColor: '#565B68',
              marginLeft: wide * 0.004,
            }}>
            <FastImage
              style={{
                width: wide * 0.15,
                height: wide * 0.15,
                borderRadius: (wide * 0.15) / 2,
              }}
              source={item.item.firstPlayerImg}
            />
          </View>

          <View
            style={{
              width: wide * 0.16,
              height: wide * 0.16,
              backgroundColor: Colors.light,
              borderRadius: (wide * 0.16) / 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 4,
              borderColor: '#565B68',
            }}>
            <FastImage
              style={{
                width: wide * 0.15,
                height: wide * 0.15,
                borderRadius: (wide * 0.15) / 2,
              }}
              source={item.item.secondPlayerImg}
            />
          </View>
        </View>
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: wide * 0.01,
          }}>
          <Text
            style={{
              color: Colors.light,
              fontSize: 12,
              fontFamily: Fonts.Medium,
              fontWeight: '500',
              lineHeight: 16,
              width: wide * 0.2,
            }}
            numberOfLines={2}>
            {item?.item.firstPlayerName}
          </Text>

          <Text
            style={{
              color: Colors.light,
              fontSize: 12,
              fontFamily: Fonts.Medium,
              fontWeight: '500',
              lineHeight: 16,
              width: wide * 0.2,
            }}
            numberOfLines={2}>
            {item?.item.secondPlayerName}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
export default MatchUpBoard;
