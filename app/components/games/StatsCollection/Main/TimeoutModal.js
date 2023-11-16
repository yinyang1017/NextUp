import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Modal } from 'react-native-ui-lib';
import { customTheme } from '../../../../constants';
import { convertNumberToTime } from '../../../../utils/time';
import { FontSize } from '../../../../views/GlobalStyles';

export default function TimeoutModal({ isVisible, close, remainingTime }) {
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={close}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Timeout</Text>
            <Text style={styles.timeoutText}>
              {convertNumberToTime(remainingTime)}
            </Text>
            <TouchableOpacity onPress={close}>
              <Button
                label={'Start Time'}
                style={styles.closeButton}
                onPress={close}
              />
            </TouchableOpacity>
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
    paddingVertical: 20,
    paddingHorizontal: '10%',
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
});
