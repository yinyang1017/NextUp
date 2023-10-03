import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import PrimaryButton from '../../../../components/common/PrimaryButton';
import ImageUpload from '../../../../components/common/ImageUpload';
import {hp, wp} from '../../../../utils/responsive';
import {Fonts, Colors, Layout} from '../../../../constants';
import EditAnimatedInput from '../../../../Helpers/react-native-animated-input/src/AnimatedInput/EditInput';
import AnimatedInput from '../../../../Helpers/react-native-animated-input';

const wide = Layout.width;
function AccountDetail() {
  return (
    <View style={styles.container}>
      <ImageUpload
        source={{
          uri: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        }}
        containerStyle={styles.imageUploadContainer}
      />
      <EditAnimatedInput
        placeholder="FIRST NAME"
        // onChangeText={e => this.setTextofFields('fname', e)}
        // value={fname}
        styleInput={{
          fontFamily: Fonts.Bold,
          color: Colors.light,
          fontSize: 16,
          lineHeight: 18,
        }}
        styleLabel={{
          fontFamily: Fonts.Bold,
          color: Colors.txtFieldPlaceHolder,
        }}
        styleBodyContent={{
          borderBottomWidth: 1.5,
          borderBottomColor: Colors.newGrayFontColor,
          width: wide * 0.4,
        }}
      />
      <AnimatedInput
        placeholder="FIRST NAME"
        // onChangeText={e => this.setTextofFields('fname', e)}
        // value={fname}
        styleInput={{
          fontFamily: Fonts.Bold,
          color: Colors.light,
          fontSize: 16,
          lineHeight: 18,
        }}
        styleLabel={{
          fontFamily: Fonts.Bold,
          color: Colors.txtFieldPlaceHolder,
        }}
        styleBodyContent={{
          borderBottomWidth: 1.5,
          borderBottomColor: Colors.newGrayFontColor,
          width: wide * 0.4,
        }}
      />
      <View style={{marginTop: wide * 0.1, width: '90%', alignSelf: 'center'}}>
        <EditAnimatedInput
          placeholder="PHONE NUMBER"
          // onChangeText={e => this.setTextofFields('num', e)}
          // value={this.state.num}
          styleInput={{
            fontFamily: Fonts.Bold,
            color: Colors.light,
            fontSize: 14,
            lineHeight: 18,
          }}
          // isAutoFocus={
          //   this.state.num !== null && this.state.num.length > 0 ? false : true
          // }
          styleLabel={{fontFamily: Fonts.Bold, color: Colors.newGrayFontColor}}
          styleBodyContent={{
            borderBottomWidth: 1.5,
            borderBottomColor: Colors.newGrayFontColor,
          }}
          keyboardType={'number-pad'}
        />
      </View>
      <View
        style={{
          marginTop: wide * 0.1,
          width: '90%',
          alignSelf: 'center',
        }}>
        <AnimatedInput
          disabled
          placeholder="EMAIL ID"
          //valid={() => isValidEmail(email)}
          // errorText="Error"
          // onChangeText={(e) => this.setTextofEmailAndPass('email', e)}
          // value={this.state.email}
          styleInput={{
            fontFamily: Fonts.Bold,
            color: Colors.light,
            fontSize: 16,
            lineHeight: 18,
          }}
          styleLabel={{
            fontFamily: Fonts.Bold,
            color: Colors.newGrayFontColor,
          }}
          styleBodyContent={{
            borderBottomWidth: 1.5,
            borderBottomColor: Colors.newGrayFontColor,
            // width: wide * 0.8
          }}
          keyboardType={'email-address'}
        />
        <TextInput value="123" />
      </View>
      <PrimaryButton title={'Save'} style={styles.saveButton} />
    </View>
  );
}
export default AccountDetail;

const styles = StyleSheet.create({
  container: {flex: 1},
  imageUploadContainer: {alignSelf: 'center', marginTop: hp(5)},
  saveButton: {
    marginHorizontal: wp(8),
    marginTop: 'auto',
    marginBottom: hp(2),
  },
});
