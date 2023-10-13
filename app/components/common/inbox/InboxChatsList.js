import { FlatList, StyleSheet } from 'react-native';
import React, { memo } from 'react';
import InboxChatItem from './InboxChatItem';
import { hp } from '../../../utils/responsive';
import { Text, View } from 'react-native-ui-lib';

const InboxChatsList = ({ containerStyle = {}, channelData = [] }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        ListEmptyComponent={
          <View center flex>
            <Text large-3xl-700 style={{ marginTop: hp(20) }}>
              No Chats Found
            </Text>
          </View>
        }
        data={channelData}
        renderItem={({ item }) => <InboxChatItem chatInfo={item} />}
      />
    </View>
  );
};

export default memo(InboxChatsList);

const styles = StyleSheet.create({
  container: { paddingTop: hp(1.5), flex: 1 },
});
