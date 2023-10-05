import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Back from '../../../utils/HeaderButtons/Back';
import { hp, wp } from '../../../utils/responsive';
import {
  FormInputField,
  FormInputPicker,
} from '../../../components/common/FormInputs';
import PrimaryButton from '../../../components/common/PrimaryButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import SetTimeModal from '../../../components/common/SetTimeModal';

export const CreatePractice = () => {
  const navigation = useNavigation();

  const [showTimePicker, setShowTimePicker] = useState(false);

  const gobackHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Back
        title="Create Practice"
        containerStyle={styles.back}
        onPress={gobackHandler}
      />
      <View style={styles.dropdownSelectionBody}>
        <FormInputPicker
          label={'Location'}
          rootContainerStyle={styles.locationDropdown}
        />
        <View style={styles.datTimeRowDropdown}>
          <FormInputPicker label={'date'} />
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => setShowTimePicker(true)}
              style={[StyleSheet.absoluteFill, { zIndex: 2 }]}
            />
            <FormInputPicker label={'Time'} />
          </View>
        </View>
        <FormInputField label={'Tag'} />
      </View>
      <PrimaryButton style={styles.button} title={'Schedule'} />
      <SetTimeModal isVisible={showTimePicker} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  back: { marginTop: hp(2), marginLeft: wp(5) },
  button: { marginHorizontal: wp(8), marginTop: 'auto', marginBottom: hp(4) },
  dropdownSelectionBody: { marginHorizontal: wp(6), marginTop: wp(7) },
  locationDropdown: { flex: 0 },
  datTimeRowDropdown: { flexDirection: 'row', alignItems: 'center' },
});
