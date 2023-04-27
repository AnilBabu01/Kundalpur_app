import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {OTP} from 'react-native-otp-form';
import {Height, Width} from '../../utils/responsive';
import loginicon from '../../assets/loginiconss.png';
import {primary, secondary, textcolor} from '../../utils/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const VerificationForgot = ({navigation}) => {
  const [index, setIndex] = useState(0);

  return (
    <ScrollView>
      <View>
        <View style={styles.connainer}>
          <Image source={loginicon} style={styles.imgtop} />
          <View style={styles.textcenter}>
            <Text style={styles.logintext}>Verification required</Text>
          </View>
          <View style={styles.textcenter}>
            <Text style={styles.textwe}>We have send the OTP to Your</Text>
            <Text style={styles.textwenum}>+623636565632</Text>
          </View>
          <OTP
            codeCount={6}
            containerStyle={{marginTop: 30, marginBottom: 80}}
            // otpStyles={{backgroundColor: '#e'}}
          />
          <View style={styles.loginbtndiv}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotReset')}>
              <View style={styles.loginbtn}>
                <Text style={styles.logintextstyle}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default VerificationForgot;

const styles = StyleSheet.create({
  connainer: {
    height: windowHeight,
  },
  imgtop: {
    width: windowWidth,
    height: windowHeight / 3.4,
    borderBottomRightRadius: windowHeight / 4,
    borderBottomLeftRadius: windowHeight / 4,
  },
  logintext: {
    color: textcolor,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 30,
    lineHeight: 42,
  },
  textwe: {
    marginBottom: 10,
  },
  textwenum: {
    color: 'black',
    fontSize: 20,
    fontWeight: 600,
  },
  textcenter: {
    alignItems: 'center',
    width: windowWidth,
  },
  btn: {
    width: 130,
    height: 35,
    backgroundColor: secondary,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activebtn: {
    width: 130,
    height: 35,
    backgroundColor: primary,
    borderRadius: 10,
    borderColor: textcolor,
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnsdiv: {
    width: windowWidth,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  loginbtn: {
    width: Width(315),
    height: Height(45),
    backgroundColor: textcolor,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginbtndiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: Height(30),
  },
  logintextstyle: {
    color: 'white',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: 42,
  },
});
