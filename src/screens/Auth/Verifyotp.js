import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {serverInstance} from '../../API/ServerInstance';
import {useRoute} from '@react-navigation/native';
import {OTP} from 'react-native-otp-form';
import {Height, Width} from '../../utils/responsive';
import loginicon from '../../assets/loginiconss.png';
import {primary, secondary, textcolor} from '../../utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../Conponents/Loader';
import RNOtpVerify from 'react-native-otp-verify';
import Toast from 'react-native-toast-message';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Verifyotp = ({navigation}) => {
  const route = useRoute();
  const [visible, setvisible] = useState(false);
  const [message, setmessage] = useState('');
  const [mobilemo, setmobilemo] = useState('');
  const [otp, setotp] = useState('');

  const handleVerify = () => {
    try {
      setvisible(true);
      setmessage('Loging...');
      serverInstance('user/verify-opt', 'POST', {
        username: mobilemo,
        otp: otp,
      })
        .then(async res => {
          if (res.tokens) {
            await AsyncStorage.setItem('token', res.tokens.access.token);

            Toast.show({
              type: 'success',
              text1: 'Success',
              text2: 'You have login successfully!',
            });
            setvisible(false);
            if (res.user?.name === null) {
              navigation.navigate('CompleteProfile');
            } else {
              navigation.navigate('Drawer');
            }

            console.log(res.user?.name);
          }
          if (res.code === 406) {
            Toast.show({
              type: 'error',
              text1: 'Error',
              text2: res.message,
            });
            setvisible(false);
          }
        })
        .catch(error => {
          console.log(error.message);
          setvisible(false);
        });
    } catch (error) {
      console.log(error);
      setvisible(false);
    }
  };

  useEffect(() => {
    // docs: https://github.com/faizalshap/react-native-otp-verify
    RNOtpVerify.getOtp()
      .then(p =>
        RNOtpVerify.addListener(message => {
          try {
            if (message) {
              const messageArray = message.split('\n');
              if (messageArray[2]) {
                const otp = messageArray[2].split(' ')[0];
                console.log('auto fetch otp : ', otp);
                // if (otp.length === 6) {
                //   setOtpArray(otp.split(''));
                // }
              }
            }
          } catch (error) {
            console.log(
              error.message,
              'RNOtpVerify.getOtp - read message, OtpVerification',
            );
          }
        }),
      )
      .catch(error => {
        console.log(error.message, 'RNOtpVerify.getOtp, OtpVerification');
      });

    // remove listener on unmount
    return () => {
      RNOtpVerify.removeListener();
    };
  }, []);

  useEffect(() => {
    setmobilemo(route.params?.mobile);
  }, []);
  console.log('anil', otp);
  return (
    <ScrollView>
      <View>
        <View style={styles.connainer}>
          <Image source={loginicon} style={styles.imgtop} />
          <View style={styles.textcenter}>
            <Text style={styles.logintext}>Login</Text>
          </View>
          <View style={styles.textcenter}>
            <Text style={styles.textwe}>We have send the OTP to Your</Text>
            <Text style={styles.textwe}>mobile number</Text>
            <Text style={styles.textwenum}>{mobilemo && mobilemo}</Text>
            <Text>{otp}</Text>
          </View>
          <OTP
            codeCount={6}
            containerStyle={{marginTop: 30, marginBottom: 80}}
            onFinish={text => setotp(text)}
            keyboardType="number-pad"
          />

          <View style={styles.loginbtndiv}>
            <TouchableOpacity onPress={() => handleVerify()}>
              <View style={styles.loginbtn}>
                <Text style={styles.logintextstyle}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Loader visible={visible} message={message} />
    </ScrollView>
  );
};

export default Verifyotp;

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
