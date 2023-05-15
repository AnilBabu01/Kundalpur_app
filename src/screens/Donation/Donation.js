import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  Modal,
  Dimensions,
  Linking,
  SafeAreaView,
} from 'react-native';
import {Height, Width} from '../../utils/responsive';
import {serverInstance} from '../../API/ServerInstance';
import {Dropdown} from 'react-native-element-dropdown';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import {
  primary,
  secondary,
  textcolor,
  donationavtivebtn,
  donationbtnunactiveborder,
} from '../../utils/Colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {loadUser} from '../../Redux/action/AuthAction';
import moment from 'moment';
import {AvenueParams} from './params';
const formData = new FormData();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data = [
  {label: 'श्री', value: '1'},
  {label: 'श्रीमति', value: '2'},
  {label: 'मे.', value: '3'},
  {label: 'कु.', value: '4'},
];
const donationAmounts = [
  {
    label: '₹1,111',
    value: '1111',
  },
  {
    label: '₹2,121',
    value: '2121',
  },
  {
    label: '₹5,151',
    value: '5151',
  },
  {
    label: '₹11,111',
    value: '11111',
  },
  {
    label: '₹21,211',
    value: '21211',
  },
  {
    label: '₹51,511',
    value: '51511',
  },
  {
    label: '₹51,500',
    value: '51500',
  },
  {
    label: 'other',
    value: '',
  },
];

function Donation({navigation}) {
  const dispatch = useDispatch();
  const [openModel, setopenModel] = useState(false);
  const [someone, setsomeone] = useState('');
  const [mode, setmode] = useState('online');
  const [title, settitle] = useState('');
  const [fullname, setfullname] = useState('');
  const [address, setaddress] = useState('');
  const [remark, setremark] = useState('');
  const [head, sethead] = useState('');
  const [amount, setamount] = useState('');
  const [chequeimg, setchequeimg] = useState('');
  const [chequeno, setchequeno] = useState('');
  const [chequedate, setchequedate] = useState('');
  const [isdata, setisData] = useState('');
  const [fullnameError, setfullnameError] = useState('');
  const [addressError, setaddressError] = useState('');
  const [headError, setheadError] = useState('');
  const [amountError, setamountError] = useState('');
  const [titleError, settitleError] = useState('');
  const [bankname, setbankname] = useState('');
  var today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  const currTime = `${h}:${m}:${s}`;
  const payclicked = () => {
    var formdata = new FormData();
    formdata.append('amount', amount);

    const requestOptions = {
      method: 'POST',
      body: formdata,
    };
    fetch(AvenueParams.merchant_server_enc_url, requestOptions)
      .then(response => response.json())
      .then(data => {
        // console.log("data is " + data.plain)
        if (data.status_message == 'SUCCESS') {
          // navigation.navigate('WebView', {
          //   response: data,
          // });
        }
      })
      .catch(function (error) {
        console.log('Settings Axios error : ', error);
      });
  };
  const handlesubmit = async () => {
    if (mode === 'online' && amount) {
      serverInstance('user/add-donation', 'POST', {
        NAME: someone === 'yes1' && user.name ? user.name : fullname,
        MODE_OF_DONATION: 1,
        AMOUNT: amount,
        DATE_OF_DAAN: new Date(),
        PAYMENT_ID: '',
        TYPE: head,
        REMARK: remark,
        ADDRESS: address,
        MobileNo: user?.mobileNo,
        TIME_OF_DAAN: currTime,
      })
        .then(async res => {
          if (res.status === true) {
            payclicked();
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }

    if (mode === 'cheque' && amount) {
      formData.append(
        'NAME',
        someone === 'yes1' && user.name ? user.name : fullname,
      );
      formData.append('MODE_OF_DONATION', mode === 'online' ? 1 : 2);
      formData.append('AMOUNT', amount);
      formData.append('DATE_OF_CHEQUE', chequedate.toString());
      formData.append('NAME_OF_BANK', bankname);
      formData.append('DATE_OF_DAAN', new Date());
      formData.append('TYPE', head);
      formData.append('REMARK', remark);
      formData.append('ADDRESS', address);
      formData.append('CHEQUE_NO', chequeno);
      formData.append('MobileNo', user?.mobileNo);
      formData.append('TIME_OF_DAAN', currTime);
      serverInstance('user/add-donation', 'POST', formData)
        .then(async res => {
          console.log(formData);
        })
        .catch(error => {
          console.log(error);
        });
    }
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
        setchequeimg(Response.assets[0].uri);
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

        if (file != null) {
          formData.append('chequeImg', file);
        }
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
        setchequeimg(Response.assets[0].uri);
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
        if (file != null) {
          formData.append('chequeImg', file);
        }
      }
    });
  };
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

  const Validation = () => {
    if (title.length == 0) {
      settitleError('Title is required');
    } else {
      settitleError('');
    }

    if (address.length == 0) {
      setaddressError('Address is required');
    } else {
      setaddressError('');
    }

    if (title.length == 0) {
      setfullnameError('Fullname is required');
    } else {
      setfullnameError('');
    }

    if (title.length == 0) {
      setamountError('Amount is required');
    } else {
      setamountError('');
    }

    if (title.length == 0) {
      setheadError('Head is required');
    } else {
      setheadError('');
    }
  };

  const getall_donatiions = () => {
    try {
      serverInstance(`admin/donation-type?type=1`, 'get').then(res => {
        if (res.status === true) {
          setisData(res.data);
        }
      });
    } catch (error) {}
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadUser());
    }, 100);
    getall_donatiions();
  }, []);

  const {user} = useSelector(state => state.userReducer);

  const renderItem = item => {
    return (
      <View style={styles.item} key={item.id}>
        <Text style={styles.textItem}>{item.type_hi}</Text>
      </View>
    );
  };

  const renderItem1 = item => {
    return (
      <View style={styles.item} key={item.value}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  return (
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
      <ProfileHeader />
      <ScrollView>
        <StatusBar backgroundColor={donationavtivebtn} />
        <View style={styles.mainView}>
          <View style={styles.mainColorView}>
            <View style={styles.header}>
              <View style={styles.imgVew}>
                <Image
                  source={require('../../assets/sideimg.jpeg')}
                  style={{width: 40, height: 40}}
                />
                <Text
                  style={{
                    marginLeft: '20%',
                    fontWeight: '600',
                    // fontStyle: 'italic',
                    color: donationavtivebtn,
                    fontSize: 20,
                  }}>
                  Online Donation
                </Text>
              </View>
              <View>
                <Image
                  source={require('../../assets/donation-right.png')}
                  style={{width: 40, height: 40}}
                />
              </View>
            </View>

            <View>
              <Text>Donation for</Text>
              <View style={styles.selbtnview}>
                <TouchableOpacity
                  style={
                    someone === 'yes1'
                      ? styles.donationButton
                      : styles.donationButtonUnactive
                  }
                  onPress={() => setsomeone('yes1')}>
                  <View>
                    <Text
                      style={
                        someone === 'yes1'
                          ? styles.avtiveText
                          : styles.unActiveText
                      }>
                      Self
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={
                    someone === 'yes'
                      ? styles.donationButton
                      : styles.donationButtonUnactive
                  }
                  onPress={() => setsomeone('yes')}>
                  <View>
                    <Text
                      style={
                        someone === 'yes'
                          ? styles.avtiveText
                          : styles.unActiveText
                      }>
                      Someone
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View>
                <Text>Donation Mode</Text>
                <View style={styles.selbtnview}>
                  <TouchableOpacity
                    style={
                      mode === 'online'
                        ? styles.donationButton
                        : styles.donationButtonUnactive
                    }
                    onPress={() => setmode('online')}>
                    <View>
                      <Text
                        style={
                          mode === 'online'
                            ? styles.avtiveText
                            : styles.unActiveText
                        }>
                        Online
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={
                      mode === 'cheque'
                        ? styles.donationButton
                        : styles.donationButtonUnactive
                    }
                    onPress={() => setmode('cheque')}>
                    <View>
                      <Text
                        style={
                          mode === 'cheque'
                            ? styles.avtiveText
                            : styles.unActiveText
                        }>
                        Cheque
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <Text>
                  Titile<Text style={{color: '#FF115E'}}> *</Text>
                </Text>
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="label"
                  placeholder="Select"
                  value={title}
                  onChange={item => {
                    settitle(item.label);
                  }}
                  renderItem={renderItem1}
                />
                {titleError.length > 0 && (
                  <Text
                    style={{
                      color: 'red',
                      marginLeft: Width(60),
                      fontSize: Height(11),
                      fontFamily: 'Gilroy-SemiBold',
                    }}>
                    {titleError}
                  </Text>
                )}
              </View>
              <View>
                <Text>
                  Full Name<Text style={{color: '#FF115E'}}> *</Text>
                </Text>
                <TextInput
                  style={styles.customInputContainer}
                  onChangeText={text => setfullname(text)}
                  placeholder="Enter the full name"
                  onBlur={() => Validation()}
                  value={
                    someone === 'yes1' && user?.name ? user?.name : fullname
                  }
                />
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
              </View>

              <View>
                <Text>
                  Donation Type<Text style={{color: '#FF115E'}}> *</Text>
                </Text>
                {isdata && (
                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={isdata}
                    maxHeight={300}
                    labelField="type_hi"
                    valueField="type_hi"
                    placeholder="Select"
                    value={head}
                    onChange={item => {
                      sethead(item.type_hi);
                    }}
                    renderItem={renderItem}
                  />
                )}
                {headError.length > 0 && (
                  <Text
                    style={{
                      color: 'red',
                      marginLeft: Width(60),
                      fontSize: Height(11),
                      fontFamily: 'Gilroy-SemiBold',
                    }}>
                    {headError}
                  </Text>
                )}
              </View>

              <View>
                <Text>
                  Address<Text style={{color: '#FF115E'}}> *</Text>
                </Text>
                <TextInput
                  style={styles.customInputContainer}
                  onChangeText={text => setaddress(text)}
                  placeholder="Enter the address"
                  onBlur={() => Validation()}
                />
                {addressError.length > 0 && (
                  <Text
                    style={{
                      color: 'red',
                      marginLeft: Width(60),
                      fontSize: Height(11),
                      fontFamily: 'Gilroy-SemiBold',
                    }}>
                    {addressError}
                  </Text>
                )}
              </View>
              <View>
                <Text>Remark</Text>
                <TextInput
                  style={styles.customInputContainer}
                  onChangeText={text => setremark(text)}
                  placeholder="Enter the remark"
                />
              </View>
              <View>
                <Text>
                  Donation Amount<Text style={{color: '#FF115E'}}> *</Text>
                </Text>
                <TextInput
                  value={amount}
                  style={styles.customInputContainer}
                  onChangeText={text => setamount(text)}
                  placeholder="enter the amount"
                  onBlur={() => Validation()}
                />
                {amountError.length > 0 && (
                  <Text
                    style={{
                      color: 'red',
                      marginLeft: Width(60),
                      fontSize: Height(11),
                      fontFamily: 'Gilroy-SemiBold',
                    }}>
                    {amountError}
                  </Text>
                )}
              </View>
              <View style={styles.selbtnview}>
                {donationAmounts.map(item => (
                  <TouchableOpacity
                    onPress={() => setamount(item.value)}
                    key={item.value}
                    style={
                      amount === item.value
                        ? styles.rupeesButton
                        : styles.rupeesButtonUnactive
                    }>
                    <View>
                      <Text
                        style={
                          amount === item.value
                            ? styles.AmoutBtnActive
                            : styles.UnAmountBtn
                        }>
                        {item.label}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
              {mode === 'cheque' && (
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Gilroy-SemiBold',
                      fontSize: Height(12),
                      marginTop: Height(10),
                    }}>
                    Cheque No<Text style={{color: '#FF115E'}}> *</Text>
                  </Text>
                  <View style={styles.chequeInputView}>
                    <TextInput
                      placeholder="Enter The Cheque No"
                      placeholderTextColor="rgba(0, 0, 0, 0.6)"
                      style={{
                        width: Width(280),
                        fontFamily: 'Gilroy-SemiBold',
                        paddingHorizontal: Width(30),
                        fontSize: Height(16),
                      }}
                      value={chequeno}
                      onChangeText={Text => setchequeno(Text)}
                    />
                  </View>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Gilroy-SemiBold',
                      fontSize: Height(12),
                      marginTop: Height(10),
                    }}>
                    Bank Name<Text style={{color: '#FF115E'}}> *</Text>
                  </Text>
                  <View style={styles.chequeInputView}>
                    <TextInput
                      placeholder="Enter The Bank Name"
                      placeholderTextColor="rgba(0, 0, 0, 0.6)"
                      style={{
                        width: Width(280),
                        fontFamily: 'Gilroy-SemiBold',
                        paddingHorizontal: Width(30),
                        fontSize: Height(16),
                      }}
                      value={bankname}
                      onChangeText={text => setbankname(text)}
                    />
                  </View>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Gilroy-SemiBold',
                      fontSize: Height(12),
                      marginTop: Height(10),
                      // marginLeft: Width(50),
                    }}>
                    Date<Text style={{color: '#FF115E'}}> *</Text>
                  </Text>
                  <TouchableOpacity
                    style={styles.chequeInputView}
                    onPress={() => {
                      showDatePicker();
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
                      {chequedate
                        ? moment(chequedate).format('DD/MM/YYYY')
                        : 'Choose Date'}
                    </Text>
                  </TouchableOpacity>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Gilroy-SemiBold',
                      fontSize: Height(12),
                      marginTop: Height(10),
                      // marginLeft: Width(50),
                    }}>
                    Upload Cheque<Text style={{color: '#FF115E'}}> *</Text>
                  </Text>
                  <TouchableOpacity
                    style={styles.chequeInputView}
                    onPress={() => {
                      setopenModel(true);
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
                      {'Upload Cheque Image'}
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.imaview}>
                    {chequeimg && (
                      <Image
                        source={{uri: chequeimg}}
                        style={{width: '98%', height: windowHeight / 6}}
                      />
                    )}
                  </View>
                </View>
              )}
              <View style={styles.donationViewbtn}>
                <TouchableOpacity
                  onPress={() => handlesubmit()}
                  style={styles.donationButton}>
                  <View style={{marginLeft: 5, marginRight: 5}}>
                    <Text
                      style={{color: '#fff', fontWeight: 'bold', fontSize: 17}}>
                      {mode === 'online' ? 'Donation Now' : 'Submit'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Donation;

const styles = StyleSheet.create({
  mainColorView: {
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    padding: 8,
    elevation: 20,
  },
  mainView: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    paddingRight: 8,
    height: 45,
  },
  imgVew: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    paddingRight: 8,
  },

  dropdown: {
    marginTop: 10,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    borderWidth: 1.5,
    borderColor: donationbtnunactiveborder,
    paddingHorizontal: Width(30),
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  donationButton: {
    backgroundColor: donationavtivebtn,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    width: '45%',
    height: 40,
  },
  donationButtonUnactive: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    width: '45%',
    height: 40,
    opacity: 0.7,
    borderWidth: 1.5,
    borderColor: donationbtnunactiveborder,
  },
  avtiveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  unActiveText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
  },
  selbtnview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  customInputContainer: {
    marginVertical: 10,
    borderWidth: 1.5,
    borderColor: donationbtnunactiveborder,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontFamily: 'Gilroy-SemiBold',
    paddingHorizontal: Width(30),
    fontSize: Height(16),
    height: 45,
  },
  rupeesButton: {
    backgroundColor: donationavtivebtn,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    width: '23%',
    fontSize: 10,
  },
  rupeesButtonUnactive: {
    borderColor: donationbtnunactiveborder,
    borderWidth: 1.5,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    width: '23%',
    opacity: 0.7,
    fontSize: 10,
  },
  donationViewbtn: {
    marginBottom: '20%',
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
  chooseview: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    marginBottom: 20,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  canceltext: {
    textAlign: 'right',
    color: textcolor,
  },
  imaview: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
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
  AmoutBtnActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  UnAmountBtn: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
