import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Modal } from 'react-native-ui-lib';
import { customTheme } from '../../../../constants';
import { convertNumberToTime } from '../../../../utils/time';
import { FontSize } from '../../../../views/GlobalStyles';
import { hp, wp } from '../../../../utils/responsive';

export default function WaitingModal({
  isVisible,
  close,
  goAhead,
  remainingTime,
  nextQuater,
}) {
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={close}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Quater {nextQuater} is Next</Text>
            <Text style={styles.timeoutText}>
              {convertNumberToTime(remainingTime)}
            </Text>
            <View style={styles.horizontalRow}>
              <Button
                label={'Not Finished'}
                style={styles.closeButton}
                onPress={close}
              />
              <Button
                label={'Start Quater'}
                style={styles.closeButton}
                onPress={goAhead}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  modalContent: {
    backgroundColor: customTheme.colors.background,
    paddingVertical: wp(10),
    width: hp(40),
    borderRadius: 30,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    color: customTheme.colors.light,
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    marginTop: 20,
  },
  timeoutText: {
    fontSize: 48,
    fontWeight: '600',
    color: customTheme.colors.light,
  },
  horizontalRow: {
    flexDirection: 'row',
    gap: hp(1),
  },
});
