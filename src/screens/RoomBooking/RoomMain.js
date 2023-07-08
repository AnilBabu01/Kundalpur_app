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
import React, {useState, useEffect} from 'react';
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
import {serverInstance} from '../../API/ServerInstance';
import axios from 'axios';
import {backendApiUrl} from '../../Config/config';
import Moment from 'moment-js';
import {backendUrl} from '../../Config/config';
import RoomCategory from './RoomCategory';
const windowHeight = Dimensions.get('window').height;
const roomCount = [
  {id: 1, type: '1'},
  {id: 2, type: '2'},
  {id: 3, type: '3'},
  {id: 4, type: '4'},
  {id: 5, type: '5'},
  {id: 6, type: '6'},
  {id: 7, type: '7'},
  {id: 8, type: '8'},
  {id: 9, type: '9'},
];
const AdultsAount = [
  {id: 1, type: '1'},
  {id: 2, type: '2'},
  {id: 3, type: '3'},
  {id: 4, type: '4'},
  {id: 5, type: '5'},
  {id: 6, type: '6'},
  {id: 7, type: '7'},
  {id: 8, type: '8'},
  {id: 9, type: '9'},
];

const Childrencont = [
  {id: 1, type: '1'},
  {id: 2, type: '2'},
  {id: 3, type: '3'},
  {id: 4, type: '4'},
  {id: 5, type: '5'},
  {id: 6, type: '6'},
  {id: 7, type: '7'},
  {id: 8, type: '8'},
  {id: 9, type: '9'},
];
const RoomMain = () => {
  const [index, setIndex] = useState(0);
  const [openModel, setopenModel] = useState(false);
  const [checkin, setcheckin] = useState('');
  const [checkout, setcheckout] = useState('');
  const [dharamshalaname, setdharamshalaname] = useState('');
  const [dharamId, setdharamId] = useState('');
  const [childs, setchilds] = useState('');
  const [Nroom, setNroom] = useState('');
  const [adult, setadult] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dharamshalalist, setdharamshalalist] = useState('');
  const [checkData, setcheckData] = useState('');
  var today = new Date(checkout);
  const checkoutcurrDate = Moment(today).format('YYYY-MM-DD');
  const checkoutcurrTime = moment(today, 'HH:mm').format('hh:mm');

  var today1 = new Date(checkin);
  const checkincurrDate = Moment(today1).format('YYYY-MM-DD');
  const checkincurrTime = moment(today1, 'HH:mm').format('hh:mm');

  let checkindate = {
    checkoutcurrDate: checkoutcurrDate,
    checkoutcurrTime: checkoutcurrTime,
    checkincurrDate: checkincurrDate,
    checkincurrTime: checkincurrTime,
  };
  const handlecheckavailability = async () => {
    const data = {
      hotelName: dharamId,
      checkinDate: checkincurrDate,
      checkinTime: checkincurrTime,
      checkoutDate: checkoutcurrDate,
      checkoutTime: checkoutcurrTime,
      numAdults: adult,
      numChildren: childs,
    };
    await axios
      .post(`${backendApiUrl}room/check-room`, data)
      .then(res => {
        if (res.status === 200) {
          // setfilterdata(res.data.data);

          setcheckData(res?.data?.data);
          // setshowresuilt(true);
          // setIsLoading(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  const getALLdharamshala = () => {
    serverInstance('room/dharmashala', 'get').then(res => {
      if (res.data) {
        setdharamshalalist(res.data);
      }
    });
  };
  useEffect(() => {
    getALLdharamshala();
  }, []);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
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
    hideDatePicker();
    setcheckout(date);
  };
  const renderItem1 = item => {
    return (
      <View style={styles.item} key={item?.name}>
        <Text style={styles.textItem}>{item?.name}</Text>
      </View>
    );
  };

  const renderItem2 = item => {
    return (
      <View style={styles.item} key={item?.type}>
        <Text style={styles.textItem}>{Number(item?.type)}</Text>
      </View>
    );
  };

  const renderItem3 = item => {
    return (
      <View style={styles.item} key={item.type}>
        <Text style={styles.textItem}>{Number(item?.type)}</Text>
      </View>
    );
  };

  const renderItem4 = item => {
    return (
      <View style={styles.item} key={item.type}>
        <Text style={styles.textItem}>{Number(item?.type)}</Text>
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
          <View style={styles.chooseRooms}>
            <View>
              <Text style={{textAlign: 'left', marginLeft: 16, marginTop: 5}}>
                Rooms
              </Text>
            </View>
            <View>
              {roomCount && (
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={roomCount}
                  maxHeight={300}
                  labelField="type"
                  valueField="type"
                  placeholder="Select"
                  value={roomCount}
                  onChange={item => {
                    setNroom(item?.id);
                  }}
                  renderItem={renderItem2}
                />
              )}
            </View>
          </View>

          <View style={styles.chooseRooms}>
            <View>
              <Text style={{textAlign: 'left', marginLeft: 16, marginTop: 5}}>
                Adults
              </Text>
            </View>
            <View>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={AdultsAount}
                maxHeight={300}
                labelField="type"
                valueField="type"
                placeholder="Select"
                value={AdultsAount}
                onChange={item => {
                  setadult(item.id);
                }}
                renderItem={renderItem3}
              />
            </View>
          </View>
          <View style={styles.chooseRooms}>
            <View>
              <Text style={{textAlign: 'left', marginLeft: 16, marginTop: 5}}>
                Children
              </Text>
            </View>
            <View>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={Childrencont}
                maxHeight={300}
                labelField="type"
                valueField="type"
                placeholder="Select"
                value={Childrencont}
                onChange={item => {
                  setchilds(item.id);
                }}
                renderItem={renderItem4}
              />
            </View>
            <View style={styles.loginbtndiv}>
              <TouchableOpacity onPress={() => setopenModel(false)}>
                <View style={styles.loginbtn}>
                  <Text style={styles.logintextstyle}>Apply</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
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

              {dharamshalalist && (
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={dharamshalalist}
                  maxHeight={300}
                  labelField="name"
                  valueField="name"
                  placeholder="Select"
                  value={dharamshalaname}
                  onChange={item => {
                    setdharamshalaname(item?.name);
                    setdharamId(item?.dharmasala_id);
                  }}
                  renderItem={renderItem1}
                />
              )}

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
              <Text style={styles.labelText}>
                {Nroom ? ` Rooms ${Nroom}` : 'Rooms 0'}
                {adult ? `Adults ${adult}` : ' Adults 0'}
                {childs ? `Children ${childs}` : ' Children 0'}
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
                <TouchableOpacity onPress={() => handlecheckavailability()}>
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
          {checkData ? (
            <>
              <View style={{padding: 10, paddingBottom: 50}}>
                <View style={styles.textdharam}>
                  <Text style={styles.dharmtextname}>
                    {checkData && checkData?.dharamshala_name}
                  </Text>
                  <Image
                    source={{
                      uri: `${backendUrl}uploads/images/${checkData?.dharamshala_img}`,
                    }}
                    style={styles.dharming}
                  />
                  <Text style={styles.desctext}>
                    {checkData && checkData?.dharamshala_desciption}
                  </Text>
                  <Text style={styles.labelText}>
                    <Ionicons
                      name="location"
                      color={donationavtivebtn}
                      size={20}
                    />
                    Kundalpur
                  </Text>
                </View>
                {checkData?.availableRooms?.map((item, index) => {
                  return (
                    <RoomCategory
                      key={index}
                      data={item}
                      checkindate={checkindate}
                    />
                  );
                })}
              </View>
            </>
          ) : (
            <>
              <View style={styles.dharamMainView}>
                {dharamshalalist &&
                  dharamshalalist.map((item, index) => {
                    return <Dharamcard data={item} key={index} />;
                  })}
              </View>
            </>
          )}
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
    borderRadius: 10,
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
    marginTop: '70%',
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
  chooseRooms: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  dharming: {
    width: '100%',
    height: windowHeight / 4,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  bookbtn: {
    width: Width(295),
    height: Height(45),
    backgroundColor: textcolor,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  desctext: {
    marginBottom: 10,
    marginTop: 10,
  },
  labelText: {
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 10,
  },
});
