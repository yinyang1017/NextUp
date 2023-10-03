/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Picker,
  View,
  TextField,
  Text,
  RadioGroup,
  RadioButton,
  DateTimePicker,
} from 'react-native-ui-lib';
import _ from 'lodash';
import { customTheme } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { SelectableCard } from './SelectableCard';
import { ActivityIndicator, Pressable } from 'react-native';
const dropdownIcon = (
  <FontAwesomeIcon icon={faChevronDown} color={customTheme.colors.light} />
);
/**
 * Renders a form input picker component.
 *
 * @param {object} props - The component props.
 * @param {array} props.data - The data for the picker items.
 * @param {string} props.value - The current value of the picker.
 * @param {function} props.onValueChange - The callback function to be called when the picker value changes.
 * @return {JSX.Element} The rendered form input picker component.
 */
export function FormInputPicker({ data, value, onValueChange, label, title }) {
  return (
    <View marginV-12 flex marginR-16>
      <Picker
        topBarProps={{ title: title }}
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
        searchStyle={{
          color: customTheme.colors.blue20,
          placeholderTextColor: customTheme.colors.primary,
        }}
        onChange={_value => {
          onValueChange(_value);
        }}>
        {_.map(data, (item, index) => {
          return (
            <Picker.Item key={index} label={item?.label} value={item?.value} />
          );
        })}
      </Picker>
    </View>
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
      {...props}
      containerStyle={[
        {
          borderBottomColor: customTheme.colors.tertiary,
          borderBottomWidth: 1,
          marginRight: customTheme.spacings.spacing_16,
        },
        props.containerStyle,
      ]}
      style={{
        paddingTop: customTheme.spacings.spacing_8,
        paddingBottom: customTheme.spacings.spacing_12,
      }}
      labelStyle={[
        {
          opacity: 0.6,
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
