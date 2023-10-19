import { useEffect, useMemo, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  useGetListOfClasses,
  useGetListOfSchools,
  useGetListOfStatesAndCities,
} from '../api/onboarding.api';
import { useIsFocused } from '@react-navigation/native';

const teamTypeOptions = [
  { label: 'High School', value: 'highSchool' },
  { label: 'Travel Team', value: 'travelTeam' },
];

const highSchoolSchema = Yup.object().shape({
  school: Yup.string().required('Please select School'),
  teamYear: Yup.string().required('Please select Team'),
});

const travelTeamSchema = Yup.object().shape({
  teamName: Yup.string().required('Please enter team name'),
  state: Yup.string().required('Please select state'),
  city: Yup.string().required('Please select city'),
  age: Yup.string().required('Please select age'),
});

const useAddNewTeam = () => {
  const isFocus = useIsFocused();

  const [profileImage, setProfileImage] = useState('');

  const onSubmitFormHandler = (data, isHighSchool) => {
    console.log('~ onSubmitFormHandler ~ data:', data);
    if (isHighSchool) {
      // ... Add HighSchool Team API
    } else {
      // ... Add Travel Team API
    }
  };

  const highSchoolFormik = useFormik({
    initialValues: {
      school: '',
      teamYear: '',
    },
    onSubmit: onSubmitFormHandler,
    validationSchema: highSchoolSchema,
    validateOnChange: false,
    validateOnBlur: false,
  });

  const travelTeamFormik = useFormik({
    initialValues: {
      teamName: '',
      state: '',
      city: '',
      age: '',
    },
    onSubmit: onSubmitFormHandler,
    validationSchema: travelTeamSchema,
    validateOnChange: false,
    validateOnBlur: false,
  });

  // Travel Team Option
  const [citiesData, setCitiesData] = useState([]);

  const { data: schoolsData, mutate: getListOfSchools } = useGetListOfSchools();
  const { data: classesData, mutate: getListOfClasses } = useGetListOfClasses();
  const { data: statesData, mutate: getListOfStates } =
    useGetListOfStatesAndCities();
  const { mutate: getListOfCities } = useGetListOfStatesAndCities();

  const [selectedTeamOption, setSelectedTeamOption] = useState('highSchool');

  useEffect(() => {
    if (isFocus) {
      getListOfSchools();
      getListOfClasses();
      getListOfStates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocus]);

  useEffect(() => {
    if (travelTeamFormik.values.state) {
      travelTeamFormik.setFieldValue('city', '');
      getListOfCities(
        { state: travelTeamFormik.values.state },
        { onSuccess: data => setCitiesData(data.data) },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [travelTeamFormik.values.state]);

  const isHighSchoolSelected = useMemo(
    () => selectedTeamOption === 'highSchool',
    [selectedTeamOption],
  );

  const onSelectDropdownValue = (_formik, key, value) => {
    _formik.setFieldValue(key, value);
    value && _formik.setFieldError(key, '');
  };

  const onSelectProfileImageHandler = imageResponse => {
    const newUri = imageResponse?.assets?.[0]?.uri || '';
    setProfileImage(newUri);
  };

  const onPressSaveHandler = isHighSchoolSelected
    ? highSchoolFormik.handleSubmit
    : travelTeamFormik.handleSubmit;

  const onTeamOptionChangeHandler = value => {
    if (value === 'travelTeam') {
      highSchoolFormik.setErrors({
        school: '',
        teamYear: '',
      });
    } else {
      travelTeamFormik.setErrors({
        age: '',
        city: '',
        state: '',
        teamName: '',
      });
    }
    setSelectedTeamOption(value);
  };

  return {
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
    travelTeamFormik,
    statesData,
    onPressSaveHandler,
    teamTypeOptions,
  };
};

export default useAddNewTeam;
