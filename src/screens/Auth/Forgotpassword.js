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
const Forgotpassword = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [showloginoption, setshowloginoption] = useState(false);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#FB9034'} />
      <ScrollView>
        <View style={styles.connainer}>
          <Image source={loginicon} style={styles.imgtop} />
          <View style={styles.textcenter}>
            <Text style={styles.logintext}>Forget Password</Text>
          </View>
          <View style={styles.textcenter}>
            <Text style={styles.textwe}>
              Enter a Registed Email or Phone no
            </Text>
            <Text style={styles.textwe}>to rest the password</Text>
          </View>
          <View style={styles.btnsdiv}>
            <TouchableOpacity onPress={() => setshowloginoption(false)}>
              <View style={showloginoption ? styles.btn : styles.activebtn}>
                <Text style={{color: textcolor}}>Email</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setshowloginoption(true)}>
              <View style={showloginoption ? styles.activebtn : styles.btn}>
                <Text>Phone</Text>
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
                  // secureTextEntry={passwordVisible}
                  // onBlur={() => Validation()}
                  // onChangeText={text => setPassword(text)}
                  onPressIn={() => setIndex(2)}
                  onFocus={() => setIndex(2)}
                />
              </View>
              <View style={styles.loginbtndiv}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotVerify')}>
                  <View style={styles.loginbtn}>
                    <Text style={styles.logintextstyle}>Get Otp</Text>
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
                // onBlur={() => Validation()}
                // onChangeText={text => setEmail(text)}
                keyboardType="email-address"
                onFocus={() => setIndex(1)}
              />

              <View style={styles.loginbtndiv}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotVerify')}>
                  <View style={styles.loginbtn}>
                    <Text style={styles.logintextstyle}>Get Otp</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={styles.backstyle}>
              <Text> Back to</Text>
              <Text style={{color: textcolor, marginLeft: 5}}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Forgotpassword;

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
    lineHeight: 42,
    marginBottom: 5,
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
  forgottext: {
    color: textcolor,
    fontSize: Height(12),
    marginTop: Height(10),
    marginRight: Width(34),
    textAlign: 'right',
  },
  backstyle: {
    color: 'black',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: Height(12),
    marginTop: Height(2),
    marginLeft: Width(30),
    display: 'flex',
    flexDirection: 'row',
  },
  textwe: {
    marginBottom: 10,
  },

  textcenter: {
    alignItems: 'center',
    width: windowWidth,
  },
});
