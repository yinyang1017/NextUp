/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { TextInputMask } from 'react-native-masked-text'
import DateTimePickerModal from "react-native-modal-datetime-picker";
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
  TouchableOpacity,
  MaskedInput
} from 'react-native-ui-lib';
import _ from 'lodash';
import { ScrollViewContainer } from './SrollViewContainer';
import { ScrollView } from 'react-native-gesture-handler';
import { Layout, customTheme } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SelectableCard } from './SelectableCard';
import { ActivityIndicator, Dimensions, Pressable, Modal as NativeModal, FlatList } from 'react-native';
import { ViewContainer, statusBarHeight } from './ViewConatiner';
import moment from 'moment';
import { hp } from '../../utils/responsive';
const dropdownIcon = (
  <FontAwesomeIcon icon={faChevronDown} color={customTheme.colors.light} />
);
const searchIcon = (
  <FontAwesomeIcon icon={faSearch} color={customTheme.colors.light} />
)
const _renderCustomModal = (modalProps) => {
  const { visible, children, toggleModal, onDone, label, onSearchChange, title, ...rest } = modalProps;
  return (
    <Modal
      visible={visible}
      overlayBackgroundColor={customTheme.colors.background}
      width={Dimensions.get('window').width}
      height={Dimensions.get('window').height}
      animationType='slide'

    >
      <View style={{
        padding: customTheme.spacings.spacing_16,
        paddingTop: statusBarHeight
      }}>
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
              toggleModal(false);
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
          placeholder={title}
          paddingH-12
          paddingV-12
          marginT-12
          onChangeText={onSearchChange}
          placeholderTextColor={customTheme.colors.white_08}

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

      </View>


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

// const _renderActionSheet = (modalProps) => {
//   const { visible, children, toggleModal, onDone, label, onSearchChange, data, ...rest } = modalProps;
//   return (


//   )
// }
/**
 * Renders a form input picker component.
 *
 * @param {object} props - The component props.
 * @param {array} props.data - The data for the picker items.
 * @param {string} props.value - The current value of the picker.
 * @param {function} props.onValueChange - The callback function to be called when the picker value changes.
 * @return {JSX.Element} The rendered form input picker component.
 */
export function FormInputPicker({ data = [], value, onValueChange, label, title, ...rest }) {
  const [search, setSearch] = useState(null)
  const searchData = search ? data.filter((item) => item.toLowerCase().includes(search.toLowerCase())) : data
  return (
    <View flex >
      <Picker
        topBarProps={{
          title: title,
        }}
        useSafeAreas
        showSearch
        renderPicker={() => {
          return (
            <>

              <FormInputField
                readonly
                value={value}
                label={label}
                picker
                required={rest?.required}
                error={rest?.error}
                placeholder={rest?.placeholder}

              />
            </>
          );
        }}

        renderCustomModal={(props) => _renderCustomModal({ ...props, label, title, onSearchChange: (text) => setSearch(text) })}
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

              key={index} label={item?.label || item} value={item?.value || item}
              renderItem={(props) => {
                return (
                  <Text marginB-8 white marginT-32 style={{
                    fontFamily: customTheme.fontFamily.robotoMedium,
                    fontSize: customTheme.fontSizes.size_16
                  }}>{props}</Text>
                )
              }}

            />
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
export function FormActionPicker({ data = [], value, onValueChange, label, title, containerStyle, ...rest }) {
  const [visible, setVisible] = useState(null)
  const handleVisible = () => {
    setVisible(!visible)
  }
  return (
    <>
      <TouchableOpacity onPress={handleVisible} flex  >
        <FormInputField
          readonly
          onKeyPress={() => setVisible(true)}
          onPress={() => setVisible(true)}
          value={value}
          label={label}
          picker
          error={rest?.error}
          required={rest?.required}
          placeholder={rest?.placeholder}


        />
      </TouchableOpacity>

      <Incubator.Dialog
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}
        panDirection={PanningProvider.Directions.DOWN}
        bottom

        width={Layout.width}

        containerStyle={{
          backgroundColor: customTheme.colors.primary,
          borderTopEndRadius: customTheme.spacings.spacing_16,
          borderTopStartRadius: customTheme.spacings.spacing_16,
          marginBottom: 0
        }}
      >
        <>

          <FlatList
            contentContainerStyle={{
              padding: customTheme.spacings.spacing_16,
            }}
            data={data ?? []}
            ListHeaderComponent={() => (
              <Text marginB-16 style={{
                color: customTheme.colors.light,
                fontSize: customTheme.fontSizes.size_16,
                fontFamily: customTheme.fontFamily.robotoMedium,
                textAlign: 'center',
                opacity: 0.6,
              }}>{'Select an option'}</Text>
            )}
            ListFooterComponent={() => (
              <TouchableOpacity onPress={() => setVisible(false)} marginB-16>
                <Text style={{
                  color: customTheme.colors.green10,
                  fontSize: customTheme.fontSizes.size_16,
                  fontFamily: customTheme.fontFamily.robotoMedium,
                  textAlign: 'center',
                }}>Cancel</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity marginB-32 key={index} onPress={() => {
                onValueChange(item?.value || item);
                setVisible(false);
              }}>
                <Text center green10 style={{
                  color: customTheme.colors.green10,
                  fontSize: customTheme.fontSizes.size_16,
                  fontFamily: customTheme.fontFamily.robotoMedium,
                }}>{item?.label || item}</Text>

              </TouchableOpacity>
            )}
          />

        </>
      </Incubator.Dialog>

    </ >

  )
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
  ...rest
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
        {label} {rest?.required && <Text red10>*</Text>}
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
      <Text red10>{rest?.error}</Text>
    </View>
  );
}

/**
 * A function that renders a selectable form.
 *
 * @return {JSX.Element} An empty JSX element.
 */
export function FormSelectable({ data, value, onChange, ...rest }) {
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
      <Text red10>{rest?.error}</Text>
    </>
  );
}

export function FormInputField({ label, value, error, onChangeText, ...props }) {
  return (
    <View flex marginV-32 marginR-16 height={customTheme.spacings.spacing_40} >
      <View row spread centerH marginB-12>
        <Text style={{
          opacity: 0.6,
          marginBottom: customTheme.spacings.spacing_8,
          textTransform: 'uppercase',
          color: customTheme.colors.light,
          fontSize: customTheme.fontSizes.size_12,
          fontWeight: '700',
          opacity: 0.6,
          fontFamily: customTheme.fontFamily.robotoBold,

        }}>{label} {
            props?.required && <Text red10>*</Text>
          }</Text>

        {
          props?.picker && <FontAwesomeIcon icon={faChevronDown} color={customTheme.colors.light} />
        }
      </View>
      <TextField
        {...props}
        enablesReturnKeyAutomatically
        placeholderTextColor={customTheme.colors.tertiary}
        value={value}
        color={customTheme.colors.light}
        selectionColor={customTheme.colors.light}
        fieldStyle={[
          {
            borderBottomColor: customTheme.colors.tertiary,
            borderBottomWidth: 1,
            marginBottom: customTheme.spacings.spacing_8,
            paddingBottom: customTheme.spacings.spacing_8,
            fontSize: customTheme.fontSizes.size_16,
            fontFamily: customTheme.fontFamily.robotoRegular,

          },
        ]}
        onChangeText={onChangeText}
        retainValidationSpace
        enableErrors={error}
        validationMessage={error}
      />
    </View>

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
  const [visible, setVisible] = useState(null)
  const handleVisible = () => {
    setVisible(!visible)
  }
  return <>
    <TouchableOpacity onPress={handleVisible} flex>
      <FormInputField
        readonly
        onKeyPress={() => setVisible(true)}
        onPress={() => setVisible(true)}
        picker
        label={label}
        value={value}
        required={props?.required}
        error={props?.error}
        placeholder={props?.placeholder}


      />

    </TouchableOpacity>
    <DateTimePickerModal
      isVisible={visible}
      mode="date"
      onConfirm={(date) => {
        setVisible(false)
        onChange(moment(date).format('MM/DD/YYYY').toString())
      }}
      maximumDate={new Date()}


      onCancel={() => handleVisible()}
    />

  </>
}


export const FormMaskedInput = ({ label,
  value,
  onChangeText,
  data,
  title, onValueChange,
  forHeight,
  ...props }) => {
  const [visible, setVisible] = useState(false)
  const splitValue = value.split('-')
  const inputValue = splitValue[0]
  const pickerValue = splitValue[1] ?? data[0].value
  return <View marginV-24 flex marginR-16 >
    < >
      <TouchableOpacity onPress={() => setVisible(true)} row spread centerH  >
        <Text style={{
          opacity: 0.6,
          marginBottom: customTheme.spacings.spacing_16,
          textTransform: 'uppercase',
          color: customTheme.colors.light,
          fontSize: customTheme.fontSizes.size_12,
          fontWeight: '700',
          fontFamily: customTheme.fontFamily.robotoBold,
        }}>{label}</Text>

        <FontAwesomeIcon icon={faChevronDown} color={customTheme.colors.light} />
      </TouchableOpacity>
      <View flex row centerH style={{
        borderBottomColor: customTheme.colors.tertiary,
        borderBottomWidth: 1,
        marginRight: customTheme.spacings.spacing_16,
      }
      }>
        <TextInputMask
          {...props}
          Tra
          type='custom'
          value={inputValue}
          placeholderTextColor={customTheme.colors.tertiary}
          onChangeText={(txt) => {
            const pickValue = txt + '-' + pickerValue || data[0].value
            onChangeText(pickValue);
          }}
          options={{
            mask: forHeight ? pickerValue === 'CM' ? '999' : `9'99''` : '999',
          }}
          selectionColor={customTheme.colors.light}
          style={{
            color: customTheme.colors.light,
            flex: 1,
            marginBottom: customTheme.spacings.spacing_8,
            fontSize: customTheme.fontSizes.size_16,
          }}
        />
        <Text white>{pickerValue ?? ''}</Text>
      </View>
      <Incubator.Dialog
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}
        panDirection={PanningProvider.Directions.DOWN}
        bottom

        width={Layout.width}

        containerStyle={{
          backgroundColor: customTheme.colors.primary,
          borderTopEndRadius: customTheme.spacings.spacing_16,
          borderTopStartRadius: customTheme.spacings.spacing_16,
          marginBottom: 0
        }}
      >
        <>

          <FlatList
            contentContainerStyle={{
              padding: customTheme.spacings.spacing_16,
            }}
            data={data ?? []}
            ListHeaderComponent={() => (
              <Text marginB-16 style={{
                color: customTheme.colors.light,
                fontSize: customTheme.fontSizes.size_16,
                fontFamily: customTheme.fontFamily.robotoMedium,
                textAlign: 'center',
                opacity: 0.6,
              }}>{title}</Text>
            )}
            ListFooterComponent={() => (
              <TouchableOpacity onPress={() => setVisible(false)} marginB-16>
                <Text style={{
                  color: customTheme.colors.green10,
                  fontSize: customTheme.fontSizes.size_16,
                  fontFamily: customTheme.fontFamily.robotoMedium,
                  textAlign: 'center',
                }}>Cancel</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity marginB-32 key={index} onPress={() => {
                const split = value.split('-')
                const pickValue = split[1] + '-' + item?.value || item
                onValueChange(pickValue);
                setVisible(false);
              }}>
                <Text center green10 style={{
                  color: customTheme.colors.green10,
                  fontSize: customTheme.fontSizes.size_16,
                  fontFamily: customTheme.fontFamily.robotoMedium,
                }}>{item?.label || item}</Text>

              </TouchableOpacity>
            )}
          />

        </>
      </Incubator.Dialog>
    </>

    {props?.error && <Text red10>{props?.error}</Text>}
  </View>


}