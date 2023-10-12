import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Avatar, Image, Text } from 'react-native-ui-lib';
import { appImages } from '../../constants/appImages';
import { hp, wp } from '../../utils/responsive';

const StaffItem = ({
  name,
  email,
  containerStyle = {},
  onPressMore = () => {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Avatar
        source={require('../../assets/avatar-without-online-badge.png')}
        size={wp(12.5)}
        containerStyle={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} medium-600 style={styles.name}>
          {name}
        </Text>
        <Text numberOfLines={1} small-400 style={styles.email}>
          {email}
        </Text>
      </View>
      <TouchableOpacity onPress={onPressMore}>
        <Image style={styles.moreIcon} source={appImages.moreVertical} />
      </TouchableOpacity>
    </View>
  );
};

export default StaffItem;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  image: { marginRight: wp(3) },
  infoContainer: { gap: hp(0.5), flex: 1, paddingRight: wp(2) },
  moreIcon: { height: wp(6), width: wp(6) },
});
