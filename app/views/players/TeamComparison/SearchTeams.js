import React, { useState } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity, View } from 'react-native-ui-lib';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Back from '../../../utils/HeaderButtons/Back';
import { Colors, Layout, Fonts } from '../../../constants';
import { SearchInput } from '../../../components/common/searchbar';
const wide = Layout.width;
import _ from 'lodash';
import { wp, hp } from '../../../utils/responsive';
import { FontSize } from '../../GlobalStyles';
import { useTeams } from '../../../hooks/useTeams';
import { FormInputPicker } from '../../../components/common/FormInputs';
export default function SearchTeams({ isOpen, close, selectTeam }) {
  const [searchText, setSearchText] = useState('');
  const { resetFilter, queryFilter, schools } = useTeams();
  // console.log(schools.length);
  // const { bottom } = useSafeAreaInsets();
  const bottom = 100;
  function onSearchTextChange(value) {
    // resetFilter();
    queryFilter('school', value);
  }
  function renderItem(item) {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(item);
        }}>
        <View
          style={{
            marginVertical: hp(1),
          }}>
          <Text style={{ color: Colors.light }}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View
      flex
      style={{
        backgroundColor: Colors.base,
        height: '100%',
        paddingVertical: 10,
        paddingBottom: bottom,
      }}>
      <Back containerStyle={styles.backContainer} title="Choose Team" />
      
      <View style={styles.searchWrapper}>
        <SearchInput style={styles.searchInput} onChange={onSearchTextChange} />
        <FlatList
          contentContainerStyle={[
            styles.listContentContainer,
            { paddingBottom: bottom + hp(5) },
          ]}
          showsVerticalScrollIndicator={false}
          data={schools || []}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>
    </View>
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
  backContainer: { marginHorizontal: wp(7), marginTop: hp(3) },
  listContentContainer: {
    paddingHorizontal: wp(5),
    marginTop: hp(4),
    gap: hp(2),
  },
  searchIcon: { height: wp(5), width: wp(5) },
  searchWrapper: {
    paddingTop: hp(2),
    paddingHorizontal: wp(5),
  },
});
