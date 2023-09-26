import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import InboxChatItem from './InboxChatItem';
import { hp } from '../../utils/responsive';

const InboxChatsList = ({ containerStyle = {} }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item, index }) => <InboxChatItem index={index} />}
      />
    </View>
  );
};

export default InboxChatsList;

const styles = StyleSheet.create({
  container: { paddingTop: hp(1.5), flex: 1 },
});
