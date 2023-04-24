import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Height, Width} from '../../utils/responsive';
import DatePicker from '@react-native-community/datetimepicker';
import {primary, secondary, textcolor} from '../../utils/Colors';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import profileimg from '../../assets/profileimg.jpg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Updateprofile = ({navigation}) => {
  const [imageUri, setImageUri] = useState('');
  const [openModel, setopenModel] = useState(false);
  const [dateofbirth, setdateofbirth] = useState(new Date());
  const [anniversary, setanniversary] = useState(new Date());

  const [index, setIndex] = useState(0);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('A date has been picked: ', date);
    hideDatePicker();
    setchequedate(date);
  };
  const handleChoosePhoto = () => {
    setopenModel(false);
    const options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.5,
      includeBase64: true,
    };

    launchImageLibrary(options, Response => {
      if (Response.didCancel) {
        console.log('User cancelled image picker');
      } else if (Response.error) {
        console.log('ImagePicker Error: ', Response.error);
      } else {
        setImageUri(Response.assets[0].uri);
        console.log(Response.assets[0]);
      }
    });
  };

  const handleTakePhoto = () => {
    setopenModel(false);
    const options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.5,
      includeBase64: true,
    };

    launchCamera(options, Response => {
      if (Response.didCancel) {
        console.log('User cancelled image picker');
      } else if (Response.error) {
        console.log('ImagePicker Error: ', Response.error);
      } else {
        setImageUri(Response.assets[0].uri);
        console.log(Response.assets[0]);
      }
    });
  };
  return (
    <ScrollView>
      <View>
        <Modal animationType={'fade'} transparent={true} visible={openModel}>
          <View style={[styles.modal, styles.elevation]}>
            <Text style={styles.canceltext} onPress={() => setopenModel(false)}>
              <Ionicons name="close-outline" size={40} />
            </Text>
            <View style={styles.chooseview}>
              <TouchableOpacity onPress={() => handleTakePhoto()}>
                <View>
                  <Ionicons name="camera" size={50} />
                  <Text>Camera</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChoosePhoto()}>
                <View>
                  <Ionicons name="image" size={50} />
                  <Text>Gallery</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.avatorcontainer}>
          <View style={styles.avatorview}>
            {imageUri ? (
              <>
                <Image source={{uri: imageUri}} style={styles.avator} />
              </>
            ) : (
              <>
                <Image source={profileimg} style={styles.avator} />
              </>
            )}

            <TouchableOpacity onPress={() => setopenModel(true)}>
              <View style={styles.setaddbtn}>
                <Ionicons name="add-circle" size={20} style={{color: 'red'}} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Gilroy-SemiBold',
              fontSize: Height(15),
              marginTop: Height(1),
              marginLeft: Width(50),
            }}>
            Full Name
          </Text>
          <View
            style={{
              width: Width(340),
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
              marginTop: Height(10),
              marginLeft: Width(50),
            }}>
            Email
          </Text>
          <View
            style={{
              width: Width(340),
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
              placeholder="Enter Email"
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
              marginTop: Height(10),
              marginLeft: Width(50),
            }}>
            Address
          </Text>
          <View
            style={{
              width: Width(340),
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
              placeholder="Enter Address"
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
              marginTop: Height(10),
              marginLeft: Width(50),
            }}>
            Mobile Number
          </Text>
          <View
            style={{
              width: Width(340),
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
              placeholder="Enter Mobile Number"
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
              marginTop: Height(10),
              marginLeft: Width(50),
            }}>
            Birth Of Date
          </Text>
          <TouchableOpacity
            style={{
              height: Height(50),
              width: Width(340),
              borderWidth: 1.5,
              borderColor: index === 2 ? textcolor : '#a9a9a9',
              alignSelf: 'center',
              borderRadius: Width(10),
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: Height(10),
            }}
            onPress={() => {
              setIndex(2), showDatePicker();
            }}>
            <FontAwesome5
              name="calendar"
              size={Height(20)}
              color="#666666"
              style={{marginLeft: Width(30)}}
            />
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Gilroy-SemiBold',
                fontSize: Height(16),
                marginLeft: Width(20),
              }}>
              {' Choose Date'}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="Choose Birth Of Date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Text
            style={{
              color: 'black',
              fontFamily: 'Gilroy-SemiBold',
              fontSize: Height(12),
              marginTop: Height(10),
              marginLeft: Width(50),
            }}>
            Anniversary
          </Text>
          <TouchableOpacity
            style={{
              height: Height(50),
              width: Width(340),
              borderWidth: 1.5,
              borderColor: index === 2 ? textcolor : '#a9a9a9',
              alignSelf: 'center',
              borderRadius: Width(10),
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: Height(10),
            }}
            onPress={() => {
              setIndex(2), showDatePicker();
            }}>
            <FontAwesome5
              name="calendar"
              size={Height(20)}
              color="#666666"
              style={{marginLeft: Width(30)}}
            />
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Gilroy-SemiBold',
                fontSize: Height(16),
                marginLeft: Width(20),
              }}>
              {' Choose Anniversary Date'}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>

        <View style={styles.loginbtndiv}>
          <TouchableOpacity onPress={() => navigation.navigate('OnBoarding')}>
            <View style={styles.loginbtn}>
              <Text style={styles.logintextstyle}>Update</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Updateprofile;

const styles = StyleSheet.create({
  avatorcontainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  avator: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  avatorview: {
    position: 'relative',
    width: 80,
    height: 80,
  },
  setaddbtn: {
    position: 'absolute',
    marginLeft: 60,
    marginTop: -20,
  },
  modal: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: '50%',
    marginLeft: 20,
    padding: 10,
  },
  elevation: {
    shadowColor: '#52006A',
    elevation: 20,
  },
  formContainer: {
    height: windowHeight,
  },
  chooseview: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  canceltext: {
    textAlign: 'right',
    color: textcolor,
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
    fontSize: 22,
  },
  loginbtn: {
    width: Width(340),
    height: Height(40),
    backgroundColor: textcolor,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
