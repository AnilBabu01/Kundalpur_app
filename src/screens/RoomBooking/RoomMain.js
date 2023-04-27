import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Height, Width} from '../../utils/responsive';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import imgformover from '../../assets/imgformover.jpeg';
import {
  primary,
  secondary,
  textcolor,
  donationavtivebtn,
  donationbtnunactiveborder,
} from '../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dropdown} from 'react-native-element-dropdown';
import moment from 'moment';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const data = [
  {label: 'श्री', value: '1'},
  {label: 'श्रीमति', value: '2'},
  {label: 'मे.', value: '3'},
  {label: 'कु.', value: '4'},
];
const RoomMain = () => {
  const [index, setIndex] = useState(0);
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
      <ScrollView>
        <View>
          <ProfileHeader />
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
            </View>
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
    top: '-24%',
    backgroundColor: '#FFFFFF',
    width: '90%',
    left: '5%',
    borderRadius: 10,
  },
  texttopView: {
    position: 'relative',
    top: '-32%',
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
});
