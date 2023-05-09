import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {Height, Width} from '../../utils/responsive';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import imgformover from '../../assets/imgformover.jpeg';
import {
  textcolor,
  donationavtivebtn,
  donationbtnunactiveborder,
} from '../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dropdown} from 'react-native-element-dropdown';
import moment from 'moment';
import Dharamcard from './Dharamcard';
const windowHeight = Dimensions.get('window').height;
const data = [
  {label: 'श्री', value: '1'},
  {label: 'श्रीमति', value: '2'},
  {label: 'मे.', value: '3'},
  {label: 'कु.', value: '4'},
];
const RoomMain = () => {
  const [index, setIndex] = useState(0);
  const [openModel, setopenModel] = useState(false);
  const [checkin, setcheckin] = useState('');
  const [checkout, setcheckout] = useState('');
  const [dharamshalaname, setdharamshalaname] = useState('');
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
    setcheckin(date);
  };

  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);

  const showDatePicker1 = () => {
    setDatePickerVisibility1(true);
  };

  const hideDatePicker1 = () => {
    setDatePickerVisibility1(false);
  };

  const handleConfirm1 = date => {
    console.log('A date has been picked: ', date);
    hideDatePicker();
    setcheckout(date);
  };
  const renderItem1 = item => {
    return (
      <View style={styles.item} key={item.value}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ProfileHeader />
      <Modal animationType={'fade'} transparent={true} visible={openModel}>
        <View style={[styles.modal, styles.elevation]}>
          <Text style={styles.canceltext} onPress={() => setopenModel(false)}>
            <Ionicons name="close-outline" size={40} />
          </Text>
          <View style={styles.chooseview}></View>
        </View>
      </Modal>
      <ScrollView>
        <View>
          <View style={styles.connainer}>
            <View>
              <Image source={imgformover} style={styles.imgstyle} />
            </View>
            <View style={styles.texttopView}>
              <Text style={styles.hotaltext}>Fresh, quiet and</Text>
              <Text style={styles.hotaltext}>
                peaceful Kundalpur Dharamshala
              </Text>
            </View>
            <View style={styles.formView}>
              <Text style={styles.checktext}>Check Availability</Text>

              <Text style={styles.labelText}>
                <Ionicons name="location" color={donationavtivebtn} size={20} />
                Kundalpur
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
                value={dharamshalaname}
                onChange={item => {
                  setdharamshalaname(item.label);
                }}
                renderItem={renderItem1}
              />

              <Text style={styles.labelText}>
                <Ionicons
                  name="calendar-outline"
                  color={donationavtivebtn}
                  size={20}
                />
                Check In
              </Text>

              <TouchableOpacity
                style={{
                  height: Height(50),
                  width: '90%',
                  borderWidth: 1.5,
                  borderColor:
                    index === 6 ? donationbtnunactiveborder : '#a9a9a9',
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
                  {checkin
                    ? moment(checkin).format('DD/MM/YYYY')
                    : 'Choose Check In Date'}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <Text style={styles.labelText}>
                <Ionicons
                  name="calendar-outline"
                  color={donationavtivebtn}
                  size={20}
                />
                Check Out
              </Text>
              <TouchableOpacity
                style={{
                  height: Height(50),
                  width: '90%',
                  borderWidth: 1.5,
                  borderColor:
                    index === 6 ? donationbtnunactiveborder : '#a9a9a9',
                  alignSelf: 'center',
                  borderRadius: Width(10),
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: Height(10),
                }}
                onPress={() => {
                  setIndex(6), showDatePicker1();
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
                  {checkout
                    ? moment(checkout).format('DD/MM/YYYY')
                    : 'Choose Check Out Date'}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible1}
                mode="date"
                onConfirm={handleConfirm1}
                onCancel={hideDatePicker1}
              />
              <Text style={styles.labelText}>
                <Ionicons
                  name="person"
                  color={donationavtivebtn}
                  size={20}
                  style={{marginRight: 20}}
                />
                <Text>Room for</Text>
              </Text>
              <TouchableOpacity
                style={{
                  height: Height(50),
                  width: '90%',
                  borderWidth: 1.5,
                  borderColor:
                    index === 6 ? donationbtnunactiveborder : '#a9a9a9',
                  alignSelf: 'center',
                  borderRadius: Width(10),
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: Height(10),
                }}
                onPress={() => {
                  setIndex(6), setopenModel(true);
                }}>
                <Ionicons
                  name="caret-down-outline"
                  color="#666666"
                  style={{marginLeft: Width(30)}}
                  size={20}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Gilroy-SemiBold',
                    fontSize: Height(16),
                    marginLeft: Width(20),
                  }}>
                  Select
                </Text>
              </TouchableOpacity>
              <View style={styles.loginbtndiv}>
                <TouchableOpacity>
                  <View style={styles.loginbtn}>
                    <Text style={styles.logintextstyle}>
                      Check Availability
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.textdharamText}>Kundalpur Dharamshala</Text>
          </View>
          <View style={styles.dharamMainView}>
            <Dharamcard />
            <Dharamcard />
            <Dharamcard />
            <Dharamcard />
            <Dharamcard />
            <Dharamcard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RoomMain;

const styles = StyleSheet.create({
  connainer: {
    margin: 10,
    position: 'relative',
  },
  imgstyle: {
    width: '100%',
    height: windowHeight / 5,
  },
  formView: {
    position: 'relative',
    top: '-18%',
    backgroundColor: '#FFFFFF',
    width: '90%',
    left: '5%',
    borderRadius: 10,
    marginBottom: '-20%',
  },
  texttopView: {
    position: 'relative',
    top: '-22%',
    width: '90%',
    left: '5%',
  },
  hotaltext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
  },
  checktext: {
    color: donationavtivebtn,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
  },
  labelText: {
    marginLeft: '5%',
    marginBottom: 5,
    marginTop: 5,
  },

  dropdown: {
    alignSelf: 'center',
    marginTop: 10,
    height: 45,
    width: '90%',
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
  loginbtn: {
    width: Width(295),
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
    margin: Height(15),
  },
  logintextstyle: {
    color: 'white',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: 42,
  },
  dharamMainView: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  textdharamText: {
    textAlign: 'center',
    fontSize: 22,
    color: donationavtivebtn,
    fontWeight: 500,
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
    color: donationavtivebtn,
  },
});
