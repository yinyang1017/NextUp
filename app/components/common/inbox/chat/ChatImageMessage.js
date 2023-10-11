import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import commonChatStyles from './commonChatStyles';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import { hp, wp } from '../../../../utils/responsive';
import { chunk, isArray, times } from 'lodash';

const ChatImageMessage = props => {
  const userId = 1;

  const isSameUserMessage = props.currentMessage?.user?._id === userId;

  const isNextMessageFromSameUser =
    props.currentMessage?.user?._id === props.nextMessage?.user?._id;

  const isPreviousMessageFromSameUser =
    props.currentMessage?.user?._id === props.previousMessage?.user?._id;

  const RenderImages = useCallback(() => {
    const images = times(3, () => props.currentMessage.image);

    const isThreeImagesOrMore = images.length >= 3;

    const isMoreThanThreeImages = images.length > 3;

    const chunkImagesArr = chunk(images, 2).reverse();

    return images.length === 1 ? (
      <FastImage
        source={{ uri: props.currentMessage?.image }}
        style={styles.image}
      />
    ) : (
      <View style={styles.imagesRow}>
        {isThreeImagesOrMore
          ? chunkImagesArr.map((chunkItem, chunkIndex) => {
              if (isArray(chunkItem) && chunkItem.length === 2) {
                return (
                  <View
                    style={{
                      width: isMoreThanThreeImages ? '50%' : '100%',
                      height: '100%',
                    }}>
                    {chunkItem.map((nestedChunkItem, nestedChunkIndex) => (
                      <FastImage
                        key={chunkIndex + nestedChunkIndex}
                        style={{
                          height: hp(12),
                          width: isMoreThanThreeImages ? '100%' : '50%',
                        }}
                        source={{ uri: nestedChunkItem }}
                      />
                    ))}
                  </View>
                );
              } else {
                return (
                  <FastImage
                    key={chunkIndex}
                    style={styles.twoImagesImage}
                    source={{ uri: chunkItem[0] }}
                  />
                );
              }
            })
          : images.map((item, index) => {
              return (
                <FastImage
                  key={index}
                  style={styles.twoImagesImage}
                  source={{ uri: item }}
                />
              );
            })}
      </View>
    );
  }, [props.currentMessage]);

  return (
    <View style={commonChatStyles.container(isSameUserMessage)}>
      <Text style={commonChatStyles.dateTimeText}>
        {moment(props.currentMessage?.createdAt).format('hh:mm a')}
      </Text>
      <View
        style={styles.container(
          isSameUserMessage,
          isNextMessageFromSameUser,
          isPreviousMessageFromSameUser,
        )}>
        <RenderImages />
      </View>
    </View>
  );
};

export default ChatImageMessage;

const styles = StyleSheet.create({
  container: (
    isSameUserMessage,
    isNextMessageFromSameUser,
    isPreviousMessageFromSameUser,
  ) => ({
    ...commonChatStyles.container(isSameUserMessage, isNextMessageFromSameUser),
    ...commonChatStyles.messageBorderRadius(
      isSameUserMessage,
      isNextMessageFromSameUser,
    ),
    marginTop: isPreviousMessageFromSameUser ? 0 : hp(1),
    overflow: 'hidden',
    height: hp(24),
    width: wp(60),
    marginLeft: isSameUserMessage ? wp(1.5) : 0,
    marginRight: isSameUserMessage ? 0 : wp(1.5),
  }),
  image: { width: '100%', height: '100%' },
  imagesRow: { width: '100%', flexDirection: 'row', height: '100%' },
  twoImagesImage: { width: '50%', height: hp(24) },
});
