import React, {useState} from 'react';
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
} from 'react-native';
import {Height, Width} from '../../utils/responsive';
import loginicon from '../../assets/loginiconss.png';
import {primary, secondary, textcolor} from '../../utils/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignUp = ({navigation}) => {
  const [index, setIndex] = useState(0);

  return (
    <ScrollView>
      <View>
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
              borderColor: index === 2 ? textcolor : '#a9a9a9',
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
              // secureTextEntry={passwordVisible}
              // onBlur={() => Validation()}
              // onChangeText={text => setPassword(text)}
              onPressIn={() => setIndex(2)}
              onFocus={() => setIndex(2)}
            />
          </View>

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
              borderColor: index === 1 ? textcolor : '#a9a9a9',
            }}
            // onBlur={() => Validation()}
            // onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            onFocus={() => setIndex(1)}
          />

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
              borderColor: index === 2 ? textcolor : '#a9a9a9',
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
              // secureTextEntry={passwordVisible}
              // onBlur={() => Validation()}
              // onChangeText={text => setPassword(text)}
              onPressIn={() => setIndex(2)}
              onFocus={() => setIndex(2)}
            />
          </View>
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
              borderColor: index === 2 ? textcolor : '#a9a9a9',
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
              // secureTextEntry={passwordVisible}
              // onBlur={() => Validation()}
              // onChangeText={text => setPassword(text)}
              onPressIn={() => setIndex(2)}
              onFocus={() => setIndex(2)}
            />
          </View>
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
              // secureTextEntry={passwordVisible}
              // onBlur={() => Validation()}
              // onChangeText={text => setPassword(text)}
              onPressIn={() => setIndex(2)}
              onFocus={() => setIndex(2)}
            />
          </View>

          <View style={styles.loginbtndiv}>
            <TouchableOpacity onPress={() => navigation.navigate('OnBoarding')}>
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
              marginTop: Height(2),
              marginLeft: Width(30),
            }}>
            If you have a account
            <Text style={{color: textcolor}}>Login</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
