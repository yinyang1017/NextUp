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
  const [fname, setFname] = React.useState('');
  const [sname, setSname] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <View style={styles.container}>
      <ImageUpload
        source={{
          uri: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        }}
        containerStyle={styles.imageUploadContainer}
      />
      <View
        style={{
          flexDirection: 'col',
          paddingHorizontal: wide * 0.05,
          gapColumn: hp(1),
          alignSelf: 'center',
          width: '100%',
          marginTop: wide * 0.15,
        }}>
        <View
          style={[styles.row, styles.flexItem]}>
          <AnimatedInput
            placeholder="FIRST NAME"
            onChangeText={e => setFname(e)}
            value={fname}
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
              width: wide * 0.43,
            }}
          />
          <AnimatedInput
            placeholder="SECOND NAME"
            onChangeText={e => setSname(e)}
            value={sname}
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
              width: wide * 0.43,
            }}
          />
        </View>
<View style={styles.flexItem}>
        <AnimatedInput
          placeholder="PHONE NUMBER"
          onChangeText={e => setPhone(e)}
          value={phone}
          styleInput={{
            fontFamily: Fonts.Bold,
            color: Colors.light,
            fontSize: 14,
            lineHeight: 18,
          }}
          // isAutoFocus={
          //   this.state.num !== null && this.state.num.length > 0 ? false : true
          // }
          styleLabel={{
            fontFamily: Fonts.Bold,
            color: Colors.newGrayFontColor,
          }}
          styleBodyContent={{
            borderBottomWidth: 1.5,
            borderBottomColor: Colors.newGrayFontColor,
          }}
          keyboardType={'number-pad'}
        />
        </View>

        <View style={styles.flexItem}>
          <AnimatedInput
            placeholder="EMAIL ID"
            onChangeText={e => setEmail(e)}
            value={email}
            //valid={() => isValidEmail(email)}
            errorText="Error"
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
            }}
            keyboardType={'email-address'}
          />
        </View>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '100%',
  },
  flexItem: { marginBottom: 15,}
  
});
