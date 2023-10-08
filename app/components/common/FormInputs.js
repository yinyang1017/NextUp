/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useMemo, useState } from 'react';
import {
  Picker,
  View,
  TextField,
  Text,
  RadioGroup,
  RadioButton,
  DateTimePicker,
  Modal,
  Incubator,
  Colors,
  PanningProvider,
  ActionSheet,
  TouchableOpacity
} from 'react-native-ui-lib';
import _ from 'lodash';
import { ScrollViewContainer } from './SrollViewContainer';
import { ScrollView } from 'react-native-gesture-handler';
import { Layout, customTheme } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SelectableCard } from './SelectableCard';
import { ActivityIndicator, Dimensions, Pressable } from 'react-native';
import { ViewContainer } from './ViewConatiner';
import { Title } from './titleLabel';
const dropdownIcon = (
  <FontAwesomeIcon icon={faChevronDown} color={customTheme.colors.light} />
);
const searchIcon = (
  <FontAwesomeIcon icon={faSearch} color={customTheme.colors.light} />
)
const _renderCustomModal = (modalProps) => {

  const { visible, children, toggleModal, onDone, label, onSearchChange, ...rest } = modalProps;
  console.log(rest, "visible")
  return (
    <Modal
      visible={visible}
      overlayBackgroundColor={customTheme.colors.background}
      width={Dimensions.get('window').width}
      height={Dimensions.get('window').height}
      animationType='slide'

    >
      <ViewContainer>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Pressable
            style={{

              borderWidth: 1,
              borderColor: customTheme.colors.tertiary,
              borderRadius: Layout.width * 0.03,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: customTheme.spacings.spacing_12,
              paddingVertical: customTheme.spacings.spacing_8,
              marginRight: customTheme.spacings.spacing_12
            }}
            onPress={() => {
              toggleModal();
              onDone();
            }}
          >
            <FontAwesomeIcon
              color={customTheme.colors.white}
              style={{
                fontSize: customTheme.spacings.spacing_16,
              }}
              icon={faArrowLeft}
            />
          </Pressable>
          <Text textAlign='center' white marginL-8>{label}</Text>
        </View>

        <TextField
          placeholder={label}
          paddingH-12
          paddingV-12
          marginT-12
          onChangeText={onSearchChange}
          placeholderTextColor={customTheme.colors.light}
          selectionColor={customTheme.colors.light}
          labelColor={customTheme.colors.light}

          color={customTheme.colors.light}

          containerStyle={{
            borderWidth: 1,
            height: Layout.height * 0.06,
            justifyContent: 'center',
            borderColor: customTheme.colors.tertiary,
            backgroundColor: customTheme.colors.background,
          }
          }
          trailingAccessory={searchIcon}
        />

      </ViewContainer>


      <ScrollView contentContainerStyle={{
        paddingHorizontal: customTheme.spacings.spacing_16

      }} >
        {
          children
        }

      </ScrollView>
    </Modal>
  )
}

const _renderActionSheet = (modalProps) => {
  const { visible, children, toggleModal, onDone, label, onSearchChange, data, ...rest } = modalProps;
  return <ActionSheet
    title={'Title'}
    message={'Message goes here'}
    cancelButtonIndex={3}
    destructiveButtonIndex={0}
    visible
    options={[
      { label: 'Cancel', onPress: () => console.log('cancel') }
    ]}
  />
}
/**
 * Renders a form input picker component.
 *
 * @param {object} props - The component props.
 * @param {array} props.data - The data for the picker items.
 * @param {string} props.value - The current value of the picker.
 * @param {function} props.onValueChange - The callback function to be called when the picker value changes.
 * @return {JSX.Element} The rendered form input picker component.
 */
export function FormInputPicker({ data = [], value, onValueChange, label, title }) {
  const [search, setSearch] = useState(null)
  const searchData = search ? data.filter((item) => item.toLowerCase().includes(search.toLowerCase())) : data
  return (
    <View marginV-12 flex marginR-16>
      <Picker
        topBarProps={{
          title: title,
        }}
        useSafeAreas
        showSearch
        renderPicker={() => {
          return (
            <>
              <TextField
                label={label}
                labelColor={customTheme.colors.light}
                labelStyle={{
                  opacity: 0.6,
                  marginBottom: customTheme.spacings.spacing_8,
                  textTransform: 'uppercase',
                  color: customTheme.colors.light,
                  fontSize: customTheme.fontSizes.size_12,
                  fontWeight: '700',
                  opacity: 0.6,
                  fontFamily: customTheme.fontFamily.robotoBold,
                }}
                value={value}
                color={customTheme.colors.light}
                fieldStyle={{
                  marginBottom: customTheme.spacings.spacing_12,
                }}
                containerStyle={{
                  borderBottomColor: customTheme.colors.tertiary,
                  borderBottomWidth: 1,
                }}
                trailingAccessory={dropdownIcon}
              />
            </>
          );
        }}

        renderCustomModal={(props) => _renderCustomModal({ ...props, label, onSearchChange: (text) => setSearch(text) })}
        onChange={value => {
          onValueChange(value);
        }}>
        {_.map(searchData, (item, index) => {
          return (
            <Picker.Item
              labelStyle={{
                color: customTheme.colors.light,
                fontSize: customTheme.fontSizes.size_16,
                fontFamily: customTheme.fontFamily.robotoRegular,
              }}
              key={index} label={item?.label || item} value={item?.value || item} />
          );
        })}
      </Picker>
    </View>
  );
}
/**
 * Renders a form input picker component.
 *
 * @param {object} props - The component props.
 * @param {array} props.data - The data for the picker items.
 * @param {string} props.value - The current value of the picker.
 * @param {function} props.onValueChange - The callback function to be called when the picker value changes.
 * @return {JSX.Element} The rendered form input picker component.
 */
export function FormActionPicker({ data = [], value, onValueChange, label, title }) {
  const [open, setOpen] = useState(false);
  return (
    <TouchableOpacity marginV-12 flex marginR-16 onPress={() => setOpen(true)}>
      <TextField
        label={label}
        readonly
        labelColor={customTheme.colors.light}
        labelStyle={{
          opacity: 0.6,
          marginBottom: customTheme.spacings.spacing_8,
          textTransform: 'uppercase',
          color: customTheme.colors.light,
          fontSize: customTheme.fontSizes.size_12,
          fontWeight: '700',
          opacity: 0.6,
          fontFamily: customTheme.fontFamily.robotoBorld,
        }}
        value={value}
        color={customTheme.colors.light}
        fieldStyle={{
          marginBottom: customTheme.spacings.spacing_12,
        }}
        containerStyle={{
          borderBottomColor: customTheme.colors.tertiary,
          borderBottomWidth: 1,
        }}
        trailingAccessory={dropdownIcon}
      />
      <ActionSheet
        title={'Title'}
        message={'Message goes here'}
        cancelButtonIndex={3}
        destructiveButtonIndex={3}
        visible={open}
        useNativeIOS
        options={[
          {
            label: 'option 1'
          },
          {
            label: 'option 2'
          },

          { label: 'Cancel', onPress: () => console.log('cancel') }
        ]}
      />

    </TouchableOpacity>
  );
}



/**
 * Renders a radio group form component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The label for the form.
 * @param {any} props.value - The value of the radio group.
 * @param {Function} props.onValueChange - The callback function when the value changes.
 * @param {Array} props.radioValues - The array of radio values.
 * @param {string} props.direction - The direction of the radio group (row or column).
 * @return {ReactElement} The rendered radio group component.
 */
export function FormRadioGroup({
  label = 'Form Label',
  value,
  onValueChange,
  radioValues = [],
  direction = 'row',
}) {
  const viewDir = {
    row: true,
    column: false,
  };
  return (
    <View marginV-12>
      <Text
        style={{
          opacity: 0.6,
          marginBottom: customTheme.spacings.spacing_8,
          textTransform: 'uppercase',
          color: customTheme.colors.light,
          fontSize: customTheme.fontSizes.size_12,
          fontWeight: '700',
          opacity: 0.6,
          fontFamily: customTheme.fontFamily.robotoBold,
        }}>
        {label}
      </Text>
      <RadioGroup initialValue={value} onValueChange={onValueChange}>
        <View row={viewDir[direction]} animated>
          {_.map(radioValues, (item, index) => {
            return (
              <RadioButton
                key={index}
                value={item?.value ?? ''}
                label={item?.label ?? ''}
                containerStyle={{
                  marginRight: customTheme.spacings.spacing_16,
                  marginTop: customTheme.spacings.spacing_8,
                }}
                labelStyle={{
                  color: customTheme.colors.light,
                }}
                color={customTheme.colors.blue20}
              />
            );
          })}
        </View>
      </RadioGroup>
    </View>
  );
}

/**
 * A function that renders a selectable form.
 *
 * @return {JSX.Element} An empty JSX element.
 */
export function FormSelectable({ data, value, onChange }) {
  return (
    <>
      <View row center spread>
        {_.map(data, (item, index) => {
          return (
            <SelectableCard
              key={index}
              title={item?.label}
              imgSrc={item?.imgSrc}
              isSelected={item?.value === value}
              onPress={() => onChange(item?.value)}
              conatinerStyle={{
                marginHorizontal: customTheme.spacings.spacing_16,
              }}
            />
          );
        })}
      </View>
    </>
  );
}

export function FormInputField({ label, value, ...props }) {
  return (
    <TextField
      label={label}
      marginV-12
      labelColor={customTheme.colors.light}
      placeholderTextColor={customTheme.colors.light + '60'}
      value={value}
      color={customTheme.colors.light}
      fieldStyle={{ marginBottom: customTheme.spacings.spacing_12 }}
      {...props}
      containerStyle={[
        {
          borderBottomColor: customTheme.colors.tertiary,
          borderBottomWidth: 1,
          marginRight: customTheme.spacings.spacing_16,
          flex: 1,
        },
        props.containerStyle,
      ]}
      labelStyle={[
        {
          opacity: 0.6,
          marginBottom: customTheme.spacings.spacing_8,
          textTransform: 'uppercase',
          color: customTheme.colors.light,
          fontSize: customTheme.fontSizes.size_12,
          fontWeight: '700',
          fontFamily: customTheme.fontFamily.robotoBold,
        },
        props.labelStyle,
      ]}
    />
  );
}

/**
 * Renders a form button component.
 *
 * @param {object} props - The button component props.
 * @param {boolean} props.loading - Specifies if the button is in a loading state.
 * @param {boolean} props.disabled - Specifies if the button is disabled.
 * @param {function} props.onPress - The function to be called when the button is pressed.
 * @return {JSX.Element} - The rendered button component.
 */
export function FormButton({
  loading = false,
  disabled = false,
  onPress,
  label = 'Submit',
}) {
  const handlePress = () => {
    if (loading || disabled) {
      return;
    }
    onPress();
  };
  return (
    <>
      <Pressable
        onPress={handlePress}
        disabled={disabled || loading}
        style={{
          backgroundColor:
            disabled || loading
              ? customTheme.colors.tertiary
              : customTheme.colors.blue20,
          borderRadius: customTheme.spacings.spacing_16,
          paddingVertical: customTheme.spacings.spacing_12,
          marginBottom: customTheme.spacings.spacing_48,
        }}>
        <View row center spread>
          <ActivityIndicator
            animating={loading}
            color={customTheme.colors.white}
          />
          <Text
            animated
            style={{
              color: customTheme.colors.white,
              fontSize: customTheme.fontSizes.size_16,
              fontWeight: '700',
              fontFamily: customTheme.fontFamily.robotoBold,
              textAlign: 'center',
              opacity: disabled ? 0.4 : 1,
            }}>
            {loading ? 'Loading...' : label}
          </Text>
        </View>
      </Pressable>
    </>
  );
}

export function FormDatePicker({ label, value, onChange, ...props }) {
  return (
    <View>
      <DateTimePicker
        mode="date"
        onChange={onChange}
        renderInput={inputProps => (
          <FormInputField
            label={label}
            value={value}
            {...props}
            {...inputProps}
          />
        )}
      />
    </View>
  );
}
