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
import {
  primary,
  secondary,
  textcolor,
  donationavtivebtn,
  donationbtnunactiveborder,
} from '../../utils/Colors';
import React, {useState, useEffect} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import profileimgss from '../../assets/profileimg.jpg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useRoute} from '@react-navigation/native';
import {serverInstance} from '../../API/ServerInstance';
import {backendUrl, backendApiUrl} from '../../Config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import moment from 'moment';
import Loader from '../../Conponents/Loader';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const formData = new FormData();
const Updateprofile = ({navigation}) => {
  const route = useRoute();
  const [visible, setvisible] = useState(false);
  const [message, setmessage] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [profileimg, setprofileimg] = useState('');
  const [fullnamde, setfullnamde] = useState('');
  const [email, setemail] = useState('');
  const [address, setaddress] = useState('');
  const [mobile, setmobile] = useState('');
  const [dateofbirth, setdateofbirth] = useState('');
  const [anniversary, setanniversary] = useState('');
  const [signatureimg, setsignatureimg] = useState('');
  const [signatureimgUri, setsignatureimgUri] = useState('');
  const [openModel, setopenModel] = useState(false);
  const [openModel1, setopenModel1] = useState(false);
  const [index, setIndex] = useState(0);
  const [user, setuser] = useState('');

  const HandleComplete = async () => {
    try {
      setvisible(true);
      setmessage('Profile Updating.....');
      let token = await AsyncStorage.getItem('token');
      console.log('ss');
      formData.append('name', fullnamde);
      formData.append('mobile', mobile);
      formData.append('email', email);
      formData.append('dob', Date(dateofbirth));
      formData.append('anniversary_date', Date(anniversary));
      formData.append('address', address);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };
      let res = await axios.post(
        `${backendApiUrl}user/update-profile`,
        formData,
        config,
      );
      if (res.data.status) {
        setvisible(false);
        setmessage('');
        navigation.navigate('Drawer');
      }
    } catch (error) {}
  };

  useEffect(() => {
    setuser(route.params?.user);
    setfullnamde(user?.name);
    setemail(user?.email);
    setaddress(user?.address);
    setmobile(user?.mobileNo);
    setdateofbirth(user?.dob);
    setanniversary(user?.anniversary_date);
  }, [user]);

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
    setanniversary(date);
  };

  const [isDatePickerVisibledob, setDatePickerVisibilitydob] = useState(false);

  const showDatePickerdob = () => {
    setDatePickerVisibilitydob(true);
  };

  const hideDatePickerdob = () => {
    setDatePickerVisibilitydob(false);
  };

  const handleConfirmdob = date => {
    console.log('A date has been picked: ', date);
    hideDatePickerdob();
    setdateofbirth(date);
  };

  const handleChoosePhoto = () => {
    setopenModel(false);
    const options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.5,
      // includeBase64: true,
    };

    launchImageLibrary(options, Response => {
      if (Response.didCancel) {
        console.log('User cancelled image picker');
      } else if (Response.error) {
        console.log('ImagePicker Error: ', Response.error);
      } else {
        setImageUri(Response.assets[0].uri);

        const source =
          Platform.OS === 'android'
            ? Response.assets[0].uri
            : Response.assets[0].uri.replace('file://', '');
        const name = Response.assets[0].fileName;
        const type = Response.assets[0].type;
        const file = {
          uri: source,
          name: name,
          type: type,
        };

        formData.append('profile_image', file);
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
        const source =
          Platform.OS === 'android'
            ? Response.assets[0].uri
            : Response.assets[0].uri.replace('file://', '');
        const name = Response.assets[0].fileName;
        const type = Response.assets[0].type;
        const file = {
          uri: source,
          name: name,
          type: type,
        };

        formData.append('profile_image', file);
      }
    });
  };

  const handleChoosePhotoSignature = () => {
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
        openModel1(false);
        setsignatureimgUri(Response.assets[0].uri);
        const source =
          Platform.OS === 'android'
            ? Response.assets[0].uri
            : Response.assets[0].uri.replace('file://', '');
        const name = Response.assets[0].fileName;
        const type = Response.assets[0].type;
        const file = {
          uri: source,
          name: name,
          type: type,
        };
        formData.append('sign', file);
      }
    });
  };

  const handleTakePhotoSignature = () => {
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
        setsignatureimgUri(Response.assets[0].uri);
        openModel1(false);
        const source =
          Platform.OS === 'android'
            ? Response.assets[0].uri
            : Response.assets[0].uri.replace('file://', '');
        const name = Response.assets[0].fileName;
        const type = Response.assets[0].type;
        const file = {
          uri: source,
          name: name,
          type: type,
        };

        formData.append('sign', file);
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
        <Modal animationType={'fade'} transparent={true} visible={openModel1}>
          <View style={[styles.modal, styles.elevation]}>
            <Text
              style={styles.canceltext}
              onPress={() => setopenModel1(false)}>
              <Ionicons name="close-outline" size={40} />
            </Text>
            <View style={styles.chooseview}>
              <TouchableOpacity onPress={() => handleTakePhotoSignature()}>
                <View>
                  <Ionicons name="camera" size={50} />
                  <Text>Camera</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChoosePhotoSignature()}>
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
                {user?.profile_image ? (
                  <>
                    <Image
                      source={{
                        uri: `${backendUrl}uploads/images/${user?.profile_image}`,
                      }}
                      style={styles.avator}
                    />
                  </>
                ) : (
                  <>
                    <Image source={profileimgss} style={styles.avator} />
                  </>
                )}
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
              borderColor: index === 1 ? donationbtnunactiveborder : '#a9a9a9',
              marginTop: Height(10),
            }}
            onStartShouldSetResponder={() => setIndex(1)}>
            <TextInput
              placeholder="Enter Full Name"
              placeholderTextColor="rgba(0, 0, 0, 0.6)"
              style={{
                width: Width(280),
                fontFamily: 'Gilroy-SemiBold',
                paddingHorizontal: Width(30),
                fontSize: Height(16),
              }}
              // onBlur={() => Validation()}
              value={fullnamde}
              onChangeText={text => setfullnamde(text)}
              onPressIn={() => setIndex(1)}
              onFocus={() => setIndex(1)}
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
              borderColor: index === 2 ? donationbtnunactiveborder : '#a9a9a9',
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
              // onBlur={() => Validation()}
              value={email}
              onChangeText={text => setemail(text)}
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
              borderColor: index === 3 ? donationbtnunactiveborder : '#a9a9a9',
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
              value={address}
              onChangeText={text => setaddress(text)}
              onPressIn={() => setIndex(3)}
              onFocus={() => setIndex(3)}
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
              borderColor: index === 4 ? donationbtnunactiveborder : '#a9a9a9',
              marginTop: Height(10),
            }}
            onStartShouldSetResponder={() => setIndex(4)}>
            <TextInput
              placeholder="Enter Mobile Number"
              placeholderTextColor="rgba(0, 0, 0, 0.6)"
              style={{
                width: Width(280),
                fontFamily: 'Gilroy-SemiBold',
                paddingHorizontal: Width(30),
                fontSize: Height(16),
              }}
              // onBlur={() => Validation()}
              value={mobile}
              onChangeText={text => setmobile(text)}
              onPressIn={() => setIndex(4)}
              onFocus={() => setIndex(4)}
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
              borderColor: index === 5 ? donationbtnunactiveborder : '#a9a9a9',
              alignSelf: 'center',
              borderRadius: Width(10),
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: Height(10),
            }}
            onPress={() => {
              setIndex(5), showDatePickerdob();
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
              {dateofbirth
                ? moment(dateofbirth).format('DD/MM/YYYY')
                : 'Choose Birth Of Date'}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisibledob}
            mode="Choose Birth Of Date"
            onConfirm={handleConfirmdob}
            onCancel={hideDatePickerdob}
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
              borderColor: index === 6 ? donationbtnunactiveborder : '#a9a9a9',
              alignSelf: 'center',
              borderRadius: Width(10),
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: Height(10),
            }}
            onPress={() => {
              setIndex(6), showDatePicker();
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
              {anniversary
                ? moment(anniversary).format('DD/MM/YYYY')
                : 'Choose Anniversary Date'}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
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
          Signature
        </Text>
        <TouchableOpacity
          style={styles.chequeInputView}
          onPress={() => {
            setopenModel1(true);
          }}>
          <FontAwesome5
            name="image"
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
            {'Select Signature'}
          </Text>
        </TouchableOpacity>
        <View style={styles.imaview}>
          {signatureimgUri ? (
            <Image
              source={{uri: signatureimgUri}}
              style={{width: '80%', height: windowHeight / 10}}
            />
          ) : (
            <>
              {user?.signature && (
                <Image
                  source={{
                    uri: `${backendUrl}uploads/images/${user?.signature}`,
                  }}
                  style={{width: '80%', height: windowHeight / 10}}
                />
              )}
            </>
          )}
        </View>
        <View style={styles.loginbtndiv}>
          <TouchableOpacity onPress={() => HandleComplete()}>
            <View style={styles.loginbtn}>
              <Text style={styles.logintextstyle}>Update</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Loader visible={visible} message={message} />
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
    backgroundColor: donationavtivebtn,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chequeInputView: {
    height: Height(50),
    width: Width(340),
    borderWidth: 1.5,
    borderColor: donationbtnunactiveborder,
    alignSelf: 'center',
    borderRadius: Width(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Height(10),
  },
  imaview: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
