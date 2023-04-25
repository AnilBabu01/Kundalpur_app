import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import {serverInstance} from '../../API/ServerInstance';
import {Height, Width} from '../../utils/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {backendApiUrl} from '../../Config/config';
import loginicon from '../../assets/loginiconss.png';
import {
  primary,
  secondary,
  textcolor,
  donationavtivebtn,
  donationbtnunactiveborder,
} from '../../utils/Colors';
import Loader from '../../Conponents/Loader';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Login = ({navigation}) => {
  const [visible, setvisible] = useState(false);
  const [message, setmessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const [showloginoption, setshowloginoption] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [mobile, setmobile] = useState('');
  const createThreeButtonAlert = title =>
    Alert.alert('Authentication', title, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  const handlelogin = async () => {
    try {
      if (showloginoption === false) {
        setvisible(true);
        setmessage('Loging...');
        let res = await axios.post(`${backendApiUrl}user/login`, {
          identity: email,
          password: password,
        });

        if (res.data.status) {
          await AsyncStorage.setItem('token', res.data.tokens.access.token);
          createThreeButtonAlert('You have login successfully');
          navigation.navigate('Drawer');
          setvisible(false);
        }
      }
      if (showloginoption === true) {
        console.log(mobile);
        setvisible(true);
        setmessage('Getting Otp...');
        serverInstance('user/login-with-mobile', 'POST', {
          mobile_no: mobile,
        })
          .then(res => {
            if (res.status === 1) {
              createThreeButtonAlert('OTP Sent Successfully');
              navigation.navigate('Verifyotp', {mobile});
              setvisible(false);
            } else {
              createThreeButtonAlert(res.message);
              setvisible(false);
            }
          })
          .catch(error => {
            console.log(error);
            setvisible(false);
          });
      }
    } catch (error) {
      createThreeButtonAlert('Wrong email or password');
      setvisible(false);
    }
  };
  var reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const Validation = () => {
    console.log({email});
    console.log({password});
    var emailValid = false;
    if (email.length == 0) {
      setEmailError('Email is required');
    } else if (!reg.test(email)) {
      setEmailError('Please enter valid email address');
    } else {
      setEmailError('');
      emailValid = true;
    }

    var passwordValid = false;
    if (password.length == 0) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password should be minimum 6 characters');
    } else {
      setPasswordError('');
      passwordValid = true;
    }
  };
  const gettoken = async () => {
    let token = await AsyncStorage.getItem('token');
    if (token) {
      navigation.navigate('Drawer');
    }
  };
  useEffect(() => {
    gettoken();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={donationavtivebtn} />
      <ScrollView>
        <View style={styles.connainer}>
          <Image source={loginicon} style={styles.imgtop} />
          <View style={styles.textcenter}>
            <Text style={styles.logintext}>Login</Text>
          </View>
          <View style={styles.btnsdiv}>
            <TouchableOpacity onPress={() => setshowloginoption(false)}>
              <View style={showloginoption ? styles.btn : styles.activebtn}>
                <Text style={{color: showloginoption ? 'black' : 'white'}}>
                  Email
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setshowloginoption(true)}>
              <View style={showloginoption ? styles.activebtn : styles.btn}>
                <Text style={{color: showloginoption ? 'white' : 'black'}}>
                  Phone
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {showloginoption ? (
            <>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Gilroy-SemiBold',
                  fontSize: Height(12),
                  marginTop: Height(30),
                  marginLeft: Width(50),
                }}>
                Phone number<Text style={{color: textcolor}}> *</Text>
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
                  placeholder="Enter Mobile number"
                  placeholderTextColor="rgba(0, 0, 0, 0.6)"
                  style={{
                    width: Width(280),
                    fontFamily: 'Gilroy-SemiBold',
                    paddingHorizontal: Width(30),
                    fontSize: Height(16),
                  }}
                  // onBlur={() => Validation()}
                  onChangeText={text => setmobile(text)}
                  onPressIn={() => setIndex(2)}
                  onFocus={() => setIndex(2)}
                />
              </View>
              <View style={styles.loginbtndiv}>
                <TouchableOpacity onPress={() => handlelogin()}>
                  <View style={styles.loginbtn}>
                    <Text style={styles.logintextstyle}>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Gilroy-SemiBold',
                  fontSize: Height(12),
                  marginTop: Height(30),
                  marginLeft: Width(50),
                }}>
                Email<Text style={{color: textcolor}}> *</Text>
              </Text>
              <TextInput
                placeholder="Email"
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
                  borderColor: index === 1 ? textcolor : '#a9a9a9',
                }}
                onBlur={() => Validation()}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
                onFocus={() => setIndex(1)}
              />
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
                  marginTop: Height(30),
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
                  borderColor: index === 2 ? textcolor : '#a9a9a9',
                  marginTop: Height(10),
                }}
                onStartShouldSetResponder={() => setIndex(2)}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="rgba(0, 0, 0, 0.6)"
                  style={{
                    width: Width(280),
                    fontFamily: 'Gilroy-SemiBold',
                    paddingHorizontal: Width(30),
                    fontSize: Height(16),
                  }}
                  secureTextEntry={passwordVisible}
                  onBlur={() => Validation()}
                  onChangeText={text => setPassword(text)}
                  onPressIn={() => setIndex(2)}
                  onFocus={() => setIndex(2)}
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
              <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                <View>
                  <Text style={styles.forgottext}> Forget Password</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.loginbtndiv}>
                <TouchableOpacity onPress={() => handlelogin()}>
                  <View style={styles.loginbtn}>
                    <Text style={styles.logintextstyle}>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}

          <Text
            onPress={() => navigation.navigate('Signup')}
            style={{
              color: 'black',
              fontFamily: 'Gilroy-SemiBold',
              fontSize: Height(12),
              marginTop: Height(2),
              marginLeft: Width(30),
            }}>
            If doesn't have a account
            <Text style={{color: textcolor}}> Sign up</Text>
          </Text>
          <Loader visible={visible} message={message} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  connainer: {
    height: windowHeight,
  },
  imgtop: {
    width: windowWidth,
    height: windowHeight / 3.3,
    borderBottomRightRadius: windowHeight / 4,
    borderBottomLeftRadius: windowHeight / 4,
  },
  logintext: {
    color: textcolor,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 30,
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
    paddingLeft: 10,
    paddingRight: 10,
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
  },
  forgottext: {
    color: textcolor,
    fontSize: Height(12),
    marginTop: Height(10),
    marginRight: Width(34),
    textAlign: 'right',
  },
});
