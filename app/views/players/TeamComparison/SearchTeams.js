import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button, Picker } from 'react-native-ui-lib';
import Back from '../../../utils/HeaderButtons/Back';
import FastImage from 'react-native-fast-image';
import { Colors, Layout, Fonts } from '../../../constants';
import { SearchInput } from '../../../components/common/searchbar';
const wide = Layout.width;
import { wp, hp } from '../../../utils/responsive';
import { FontSize } from '../../GlobalStyles';
function SearchPanel({}) {
  const [searchText, setSearchText] = useState('');
  function onSearchTextChange() {}
  const dummyList = [
    'New York',
    'Bufflo',
    'New York',
    'Bufflo',
    'New York',
    'Bufflo',
    'New York',
    'Bufflo',
    'New York',
    'Bufflo',
    'New York',
    'Bufflo',
    'New York',
    'Bufflo',
    'New York',
    'Bufflo',
    'Mavericks'
  ];
  function renderItem(item) {
    return (
      <View style={{
        marginVertical: hp(2),
      }}>
        <Text style={{color: Colors.light}}>{item}</Text>
      </View>
    );
  }
  return (
    <View style={styles.searchWrapper}>
      <SearchInput style={styles.searchInput} onChange={onSearchTextChange} />
      <FlatList data={dummyList} renderItem={({ item }) => renderItem(item)} />
    </View>
  );
}
export default function SearchTeams({ isOpen, close }) {
  return (
    <Modal visible={isOpen} animationType={'slide'}>
      <View
        style={{
          backgroundColor: Colors.base,
          height: '100%',
          paddingVertical: 10,
        }}>
        <Back containerStyle={styles.backContainer} title="Choose Team" />
        <SearchPanel />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    // height: 45,
    // margin: 12,
    // borderWidth: 1,
    // padding: 10,
    // borderColor: Colors.lightshade,
    // color: Colors.lightshade,

    borderWidth: 2,
    borderColor: Colors.newGrayFontColor,
    fontFamily: Fonts.Bold,
    height: 45,
    // width: '90%',
    paddingLeft: 10,
    paddingRight: wide * 0.1,
    borderRadius: 5,
    color: Colors.light,
    fontSize: 16,
  },
  searchIcon: { height: wp(5), width: wp(5) },
  searchWrapper: {
    paddingTop: hp(2),
    paddingHorizontal: wp(5),
  },
});
