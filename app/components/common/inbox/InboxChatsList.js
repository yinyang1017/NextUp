import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import InboxChatItem from './InboxChatItem';
import { hp } from '../../../utils/responsive';
import AppLoader from '../../../utils/Apploader';

const InboxChatsList = ({
  containerStyle = {},
  channelData = [],
  isLoading = false,
}) => {
  if (isLoading) {
    return <AppLoader />;
  }
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

export default InboxChatsList;

const styles = StyleSheet.create({
  container: { paddingTop: hp(1.5), flex: 1 },
});
