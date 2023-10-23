import { StyleSheet } from 'react-native';
import React from 'react';
import Back from '../../utils/HeaderButtons/Back';
import { hp, isAndroid, wp } from '../../utils/responsive';
import ImageUpload from '../../components/common/ImageUpload';
import { View } from 'react-native-ui-lib';
import PrimaryButton from '../../components/common/PrimaryButton';
import { FormRadioGroup } from '../../components/common/FormInputs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HighSchoolForm from '../../components/coach/Team/HighSchoolForm';
import TravelTeamForm from '../../components/coach/Team/TravelTeamForm';
import useAddNewTeam from '../../hooks/useAddNewTeam';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddNewTeam = () => {
  const { bottom } = useSafeAreaInsets();
  const {
    profileImage,
    onSelectProfileImageHandler,
    selectedTeamOption,
    onTeamOptionChangeHandler,
    isHighSchoolSelected,
    highSchoolFormik,
    onSelectDropdownValue,
    citiesData,
    onPressSaveHandler,
    statesData,
    travelTeamFormik,
    teamTypeOptions,
  } = useAddNewTeam();

  return (
    <View flex>
      <Back containerStyle={styles.backButtonContainer} title="Add New Team" />
      <KeyboardAwareScrollView
        extraScrollHeight={isAndroid ? hp(4) : 0}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: bottom, flexGrow: 1 }}>
        <ImageUpload
          source={{ uri: profileImage?.uri }}
          containerStyle={styles.imageUploadContainer}
          onSelectImage={onSelectProfileImageHandler}
        />
        <View style={styles.selectOptionsContainer}>
          <FormRadioGroup
            required
            label="option"
            radioValues={teamTypeOptions}
            value={selectedTeamOption}
            onValueChange={onTeamOptionChangeHandler}
          />
          {isHighSchoolSelected ? (
            <HighSchoolForm
              formik={highSchoolFormik}
              onSelectDropdownValue={onSelectDropdownValue}
            />
          ) : (
            <TravelTeamForm
              citiesData={citiesData}
              formik={travelTeamFormik}
              onSelectDropdownValue={onSelectDropdownValue}
              statesData={statesData}
            />
          )}
        </View>
        <PrimaryButton
          title={'Save'}
          style={styles.saveButton(bottom, isHighSchoolSelected)}
          onPress={onPressSaveHandler}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddNewTeam;

const styles = StyleSheet.create({
  backButtonContainer: { marginHorizontal: wp(5), marginTop: hp(3) },
  imageUploadContainer: { alignSelf: 'center', marginTop: hp(5) },
  selectOptionsContainer: {
    marginHorizontal: wp(6),
    marginTop: hp(2),
    height: hp(52),
  },
  saveButton: bottom => ({
    marginHorizontal: wp(8),
    marginBottom: bottom + hp(2),
  }),
});
