import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Height, Width} from '../../utils/responsive';
import loginicon from '../../assets/loginiconss.png';
import {primary, secondary, textcolor} from '../../utils/Colors';
import {serverInstance} from '../../API/ServerInstance';
import Toast from 'react-native-toast-message';
import Loader from '../../Conponents/Loader';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUp = ({navigation}) => {
  const [visible, setvisible] = useState(false);
  const [message, setmessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisible1, setPasswordVisible1] = useState(true);
  const [fullname, setfullname] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [repassword, setrepassword] = useState('');
  const [fullnameError, setfullnameError] = useState('');
  const [phonenoError, setphonenoError] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [repasswordError, setrepasswordError] = useState('s');
  const [index, setIndex] = useState(0);
  const createThreeButtonAlert = title => {
    Alert.alert('Authentication', title, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const hanldlesubmit = () => {
    if ((fullname, phoneno, email, password, repassword)) {
      setvisible(true);
      setmessage('Account Creating...');
      serverInstance('user/create-account', 'POST', {
        fullname: fullname,
        mobileno: phoneno,
        email: email,
        password: password,
      })
        .then(res => {
          if (res.status === true) {
            Toast.show({
              type: 'success',
              text1: 'Success',
              text2: res.msg,
            });
            navigation.navigate('Login', {
              email: email,
              password: password,
            });
            setvisible(false);
            setmessage('');
          }
          if (res.status === 0) {
            Toast.show({
              type: 'error',
              text1: 'Error',
              text2: res.message,
            });
            setvisible(false);
            setmessage('');
          }
        })
        .catch(error => {
          console.log(error);
          setvisible(false);
          setmessage('');
        });
    }
  };

  var reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const Validation = () => {
    if (fullname.length == 0) {
      setfullnameError('FullName is required');
    } else {
      setfullnameError('');
    }

    if (email.length == 0) {
      setemailError('Email is required');
    } else if (!reg.test(email)) {
      setemailError('Please enter valid email address');
    } else {
      setemailError('');
    }

    if (phoneno.length == 0) {
      setphonenoError('Mobile NO is required');
    } else if (phoneno.length < 10) {
      setphonenoError('Mobile NO should be minimum 10 numbers');
    } else {
      setphonenoError('');
    }

    if (password.length == 0) {
      setpasswordError('Password is required');
    } else if (password.length < 6) {
      setpasswordError('Password should be minimum 6 characters');
    } else if (repassword != password) {
      setpasswordError('Both password should be same');
    } else {
      setpasswordError('');
    }

    if (repassword.length == 0) {
      setrepasswordError('Password is required');
    } else if (repassword.length < 6) {
      setrepasswordError('Password should be minimum 6 characters');
    } else if (password != repassword) {
      setrepasswordError('Both password should be same');
    } else {
      setrepasswordError('');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.connainer}>
          <Image source={loginicon} style={styles.imgtop} />
          <View style={styles.textcenter}>
            <Text style={styles.logintext}>Create Account</Text>
          </View>

          <Text
            style={{
              color: 'black',
              fontFamily: 'Gilroy-SemiBold',
              fontSize: Height(12),
              marginTop: Height(1),
              marginLeft: Width(50),
            }}>
            Full Name<Text style={{color: textcolor}}> *</Text>
          </Text>
          <View
            style={{
              width: Width(315),
              height: Height(50),
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1.5,
              borderRadius: Width(10),
              borderColor: index === 1 ? textcolor : '#a9a9a9',
              marginTop: Height(10),
            }}
            onStartShouldSetResponder={() => setIndex(2)}>
            <TextInput
              placeholder="Enter Full Name"
              placeholderTextColor="rgba(0, 0, 0, 0.6)"
              style={{
                width: Width(280),
                fontFamily: 'Gilroy-SemiBold',
                paddingHorizontal: Width(30),
                fontSize: Height(16),
              }}
              onBlur={() => Validation()}
              onChangeText={text => setfullname(text)}
              onPressIn={() => setIndex(1)}
              onFocus={() => setIndex(1)}
            />
          </View>
          {fullnameError.length > 0 && (
            <Text
              style={{
                color: 'red',
                marginLeft: Width(60),
                fontSize: Height(11),
                fontFamily: 'Gilroy-SemiBold',
              }}>
              {fullnameError}
            </Text>
          )}

          <Text
            style={{
              color: 'black',
              fontFamily: 'Gilroy-SemiBold',
              fontSize: Height(12),
              marginTop: Height(1),
              marginLeft: Width(50),
            }}>
            Phone number<Text style={{color: textcolor}}> *</Text>
          </Text>
          <TextInput
            placeholder="Enter Mobile number"
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
            style={{
              alignSelf: 'center',
              width: Width(315),
              height: Height(50),
              fontFamily: 'Gilroy-SemiBold',
              borderWidth: 1.5,
              borderRadius: Width(10),
              paddingHorizontal: Width(30),
              fontSize: Height(16),
              marginTop: Height(10),
              borderColor: index === 2 ? textcolor : '#a9a9a9',
            }}
            onBlur={() => Validation()}
            onChangeText={text => setphoneno(text)}
            onFocus={() => setIndex(2)}
          />
          {phonenoError.length > 0 && (
            <Text
              style={{
                color: 'red',
                marginLeft: Width(60),
                fontSize: Height(11),
                fontFamily: 'Gilroy-SemiBold',
              }}>
              {phonenoError}
            </Text>
          )}
          <Text
            style={{
              color: 'black',
              fontFamily: 'Gilroy-SemiBold',
              fontSize: Height(12),
              marginTop: Height(1),
              marginLeft: Width(50),
            }}>
            Email<Text style={{color: textcolor}}> *</Text>
          </Text>
          <View
            style={{
              width: Width(315),
              height: Height(50),
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1.5,
              borderRadius: Width(10),
              borderColor: index === 3 ? textcolor : '#a9a9a9',
              marginTop: Height(10),
            }}
            onStartShouldSetResponder={() => setIndex(2)}>
            <TextInput
              placeholder="Enter the Email"
              placeholderTextColor="rgba(0, 0, 0, 0.6)"
              style={{
                width: Width(280),
                fontFamily: 'Gilroy-SemiBold',
                paddingHorizontal: Width(30),
                fontSize: Height(16),
              }}
              onBlur={() => Validation()}
              onChangeText={text => setemail(text)}
              keyboardType="email-address"
              onPressIn={() => setIndex(3)}
              onFocus={() => setIndex(3)}
            />
          </View>
          {emailError.length > 0 && (
            <Text
              style={{
                color: 'red',
                marginLeft: Width(60),
                fontSize: Height(11),
                fontFamily: 'Gilroy-SemiBold',
              }}>
              {emailError}
            </Text>
          )}
          <Text
            style={{
              color: 'black',
              fontFamily: 'Gilroy-SemiBold',
              fontSize: Height(12),
              marginTop: Height(1),
              marginLeft: Width(50),
            }}>
            Password<Text style={{color: textcolor}}> *</Text>
          </Text>
          <View
            style={{
              width: Width(315),
              height: Height(50),
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1.5,
              borderRadius: Width(10),
              borderColor: index === 4 ? textcolor : '#a9a9a9',
              marginTop: Height(10),
            }}
            onStartShouldSetResponder={() => setIndex(2)}>
            <TextInput
              placeholder="Enter the Password"
              placeholderTextColor="rgba(0, 0, 0, 0.6)"
              style={{
                width: Width(280),
                fontFamily: 'Gilroy-SemiBold',
                paddingHorizontal: Width(30),
                fontSize: Height(16),
              }}
              secureTextEntry={passwordVisible ? true : false}
              onBlur={() => Validation()}
              onChangeText={text => setpassword(text)}
              onPressIn={() => setIndex(4)}
              onFocus={() => setIndex(4)}
            />
            <Ionicons
              name={passwordVisible ? 'eye' : 'eye-off'}
              onPress={() => setPasswordVisible(!passwordVisible)}
              color="#666666"
              size={Height(20)}
            />
          </View>
          {passwordError.length > 0 && (
            <Text
              style={{
                color: 'red',
                marginLeft: Width(60),
                fontSize: Height(11),
                fontFamily: 'Gilroy-SemiBold',
              }}>
              {passwordError}
            </Text>
          )}
          <Text
            style={{
              color: 'black',
              fontFamily: 'Gilroy-SemiBold',
              fontSize: Height(12),
              marginTop: Height(1),
              marginLeft: Width(50),
            }}>
            Confirm Password<Text style={{color: textcolor}}> *</Text>
          </Text>
          <View
            style={{
              width: Width(315),
              height: Height(50),
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1.5,
              borderRadius: Width(10),
              borderColor: index === 2 ? textcolor : '#a9a9a9',
              marginTop: Height(10),
            }}
            onStartShouldSetResponder={() => setIndex(2)}>
            <TextInput
              placeholder="Enter the Confirm Password"
              placeholderTextColor="rgba(0, 0, 0, 0.6)"
              style={{
                width: Width(280),
                fontFamily: 'Gilroy-SemiBold',
                paddingHorizontal: Width(30),
                fontSize: Height(16),
              }}
              secureTextEntry={passwordVisible1 ? true : false}
              onBlur={() => Validation()}
              onChangeText={text => setrepassword(text)}
              onPressIn={() => setIndex(2)}
              onFocus={() => setIndex(2)}
            />
            <Ionicons
              name={passwordVisible1 ? 'eye' : 'eye-off'}
              onPress={() => setPasswordVisible1(!passwordVisible1)}
              color="#666666"
              size={Height(20)}
            />
          </View>
          {repasswordError.length > 0 && (
            <Text
              style={{
                color: 'red',
                marginLeft: Width(60),
                fontSize: Height(11),
                fontFamily: 'Gilroy-SemiBold',
              }}>
              {repasswordError}
            </Text>
          )}
          <View style={styles.loginbtndiv}>
            <TouchableOpacity onPress={() => hanldlesubmit()}>
              <View style={styles.loginbtn}>
                <Text style={styles.logintextstyle}>SignUp</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{
              color: 'black',
              fontFamily: 'Gilroy-SemiBold',
              fontSize: Height(12),
              // marginTop: Height(2),
              marginLeft: Width(30),
            }}>
            If you have a account
            <Text style={{color: textcolor}}>Login</Text>
          </Text>
        </View>
      </ScrollView>
      <Loader visible={visible} message={message} />
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  connainer: {
    height: windowHeight,
  },
  imgtop: {
    width: windowWidth,
    height: windowHeight / 4,
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
    // height: Height(45),
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
