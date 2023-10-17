import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { ActionSheet, Avatar, Image, Text } from 'react-native-ui-lib';
import { appImages } from '../../constants/appImages';
import { hp, wp } from '../../utils/responsive';
import { useAuth } from '../../hooks/useAuth';
import { customTheme } from '../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const StaffItem = ({
  name,
  email,
  containerStyle = {},
  onPressMore = () => {},
}) => {
  const { isCoach } = useAuth();
  const { bottom } = useSafeAreaInsets();

  const [isDeleteActionSheetVisible, setIsDeleteActionSheetVisible] =
    useState(false);

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
      {isCoach && (
        <TouchableOpacity
          onPress={() => {
            setIsDeleteActionSheetVisible(true);
          }}>
          <Image style={styles.moreIcon} source={appImages.moreVertical} />
        </TouchableOpacity>
      )}

      <ActionSheet
        containerStyle={{
          backgroundColor: customTheme.colors.background,
          paddingBottom: bottom,
        }}
        visible={isDeleteActionSheetVisible}
        cancelButtonIndex={2}
        destructiveButtonIndex={0}
        onDismiss={() => setIsDeleteActionSheetVisible(false)}
        options={[
          {
            label: 'Delete',
            onPress: () => {
              Alert.alert(
                'Delete',
                'Are you sure you want to delete this staff ?',
                [
                  { text: 'Cancel', style: 'cancel', isPreferred: true },
                  { text: 'Delete', style: 'destructive' },
                ],
              );
            },
          },
          {
            label: 'Cancel',
            onPress: () => {
              setIsDeleteActionSheetVisible(false);
            },
          },
        ]}
        renderAction={(option, index) => (
          <TouchableOpacity
            onPress={option.onPress}
            style={{ paddingVertical: hp(2), alignItems: 'center' }}
            activeOpacity={0.7}>
            <Text
              medium-700
              color={index === 0 ? customTheme.colors.darkRed2 : undefined}>
              {option.label}
            </Text>
          </TouchableOpacity>
        )}
      />
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
