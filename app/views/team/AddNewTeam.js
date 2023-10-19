import { StyleSheet } from 'react-native';
import React from 'react';
import Back from '../../utils/HeaderButtons/Back';
import { hp, wp } from '../../utils/responsive';
import ImageUpload from '../../components/common/ImageUpload';
import { KeyboardAwareScrollView, View } from 'react-native-ui-lib';
import PrimaryButton from '../../components/common/PrimaryButton';
import { FormRadioGroup } from '../../components/common/FormInputs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HighSchoolForm from '../../components/coach/Team/HighSchoolForm';
import TravelTeamForm from '../../components/coach/Team/TravelTeamForm';
import useAddNewTeam from '../../hooks/useAddNewTeam';

const AddNewTeam = () => {
  const { bottom } = useSafeAreaInsets();
  const {
    profileImage,
    onSelectProfileImageHandler,
    selectedTeamOption,
    onTeamOptionChangeHandler,
    isHighSchoolSelected,
    classesData,
    highSchoolFormik,
    onSelectDropdownValue,
    schoolsData,
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
        bounces={false}
        contentContainerStyle={{ flex: 1, paddingBottom: bottom }}>
        <ImageUpload
          source={{ uri: profileImage }}
          containerStyle={styles.imageUploadContainer}
          onSelectImage={onSelectProfileImageHandler}
        />
        <View style={styles.selectOptionsContainer}>
          <FormRadioGroup
            label="option"
            radioValues={teamTypeOptions}
            value={selectedTeamOption}
            onValueChange={onTeamOptionChangeHandler}
          />
          {isHighSchoolSelected ? (
            <HighSchoolForm
              classesData={classesData}
              formik={highSchoolFormik}
              onSelectDropdownValue={onSelectDropdownValue}
              schoolsData={schoolsData}
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
          style={styles.saveButton}
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
  selectOptionsContainer: { marginHorizontal: wp(8), marginTop: hp(2) },
  saveButton: {
    marginHorizontal: wp(8),
    marginTop: 'auto',
    marginBottom: hp(2),
  },
});
