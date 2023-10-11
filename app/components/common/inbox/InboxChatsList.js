import { FlatList, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import InboxChatItem from './InboxChatItem';
import { hp } from '../../../utils/responsive';

const InboxChatsList = ({ containerStyle = {}, channelData = [] }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={channelData}
        renderItem={({ item, index }) => (
          <InboxChatItem index={index} chatInfo={item} />
        )}
      />
    </View>
  );
};

export default memo(InboxChatsList);

const styles = StyleSheet.create({
  container: { paddingTop: hp(1.5), flex: 1 },
});
