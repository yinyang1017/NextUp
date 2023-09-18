import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions } from 'react-native';
import { customTheme } from '../../constants';

export const ConfirmationDialog = ({
    open, onClose, onConfirm,
    title = "Want to log out?",
    body = "You won’t be able to continue your journey logged out.",
    confirmText = "Yes, log me out",
    cancelText = "No, stay here",
}) => {
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={open}
                onRequestClose={() => {
                    onClose(!open);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <FontAwesomeIcon icon={faWarning} color={customTheme.colors.secondary} size={40} />
                        <Text style={{
                            color: customTheme.colors.light,
                            fontSize: customTheme.fontSizes.size_16
                        }}>{title ?? ''}</Text>
                        <Text style={{
                            color: customTheme.colors.light,
                            fontSize: customTheme.fontSizes.size_12,
                            opacity: 0.8,
                            textAlign: 'center',
                            marginVertical: customTheme.spacings.spacing_8
                        }}>{body ?? ''}</Text>
                        <Pressable
                            style={{
                                backgroundColor: customTheme.colors.secondary,
                                paddingVertical: customTheme.spacings.spacing_12,
                                borderRadius: customTheme.spacings.spacing_20,
                                width: Dimensions.get('screen').width - customTheme.spacings.spacing_48,
                                marginVertical: customTheme.spacings.spacing_8,


                            }}
                            onPress={onConfirm}
                        >
                            <Text style={{
                                color: customTheme.colors.primary,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontFamily: customTheme.fontFamily.robotoBold
                            }}>{confirmText ?? ''}</Text>

                        </Pressable>
                        <Pressable
                            onPress={onClose}
                            style={{
                                backgroundColor: '#332000',
                                paddingVertical: customTheme.spacings.spacing_12,
                                borderRadius: customTheme.spacings.spacing_20,
                                width: Dimensions.get('screen').width - customTheme.spacings.spacing_48,
                                marginVertical: customTheme.spacings.spacing_8,


                            }}
                        >
                            <Text style={styles.textStyle}>{cancelText ?? ''}</Text>
                        </Pressable>

                    </View>

                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: customTheme.colors.primary,
        borderRadius: 20,
        padding: 35,
        width: Dimensions.get('screen').width - customTheme.spacings.spacing_20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

