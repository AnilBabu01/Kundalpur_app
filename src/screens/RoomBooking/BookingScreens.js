import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {textcolor} from '../../utils/Colors';
import {Height, Width} from '../../utils/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
const BookingScreens = () => {
  const route = useRoute();
  const [isdata, setisdata] = useState('');
  const [checkindata, setcheckindata] = useState('');
  const [index, setIndex] = useState(0);
  console.log('ss', checkindata);
  useEffect(() => {
    if (route?.params) {
      setisdata(route?.params?.data);
      setcheckindata(route?.params?.checkindate);
    }
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.dharamnameText}>
          <View>
            <Text style={{color: textcolor, fontWeight: 500, fontSize: 16}}>
              Dharamshala
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 16}}>{isdata?.roomDetails?.name}</Text>
          </View>
        </View>
        <Text style={styles.AccommodationText}>Accommodation Details</Text>

        <Text
          style={{
            color: 'black',
            fontFamily: 'Gilroy-SemiBold',
            fontSize: Height(16),
            marginTop: Height(5),
            marginLeft: Width(25),
          }}>
          Mobile number
          <Text style={{color: textcolor}}> *</Text>
        </Text>
        <TextInput
          placeholder="Enter Mobile number"
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
          style={{
            alignSelf: 'center',
            width: '95%',
            height: Height(50),
            fontFamily: 'Gilroy-SemiBold',
            borderWidth: 1.5,
            borderRadius: Width(10),
            paddingHorizontal: Width(30),
            fontSize: Height(16),
            marginTop: Height(10),
            borderColor: index === 1 ? textcolor : '#a9a9a9',
          }}
          // value={email}
          // onBlur={() => Validation()}
          // onChangeText={text => setEmail(text)}
          // keyboardType="email-address"
          // onFocus={() => setIndex(1)}
        />
        {/* {emailError.length > 0 && (
                <Text
                  style={{
                    color: 'red',
                    marginLeft: Width(60),
                    fontSize: Height(11),
                    fontFamily: 'Gilroy-SemiBold',
                  }}>
                  {emailError}
                </Text>
              )} */}
        <Text
          style={{
            color: 'black',
            fontFamily: 'Gilroy-SemiBold',
            fontSize: Height(16),
            marginTop: Height(5),
            marginLeft: Width(25),
          }}>
          Full Name
          <Text style={{color: textcolor}}> *</Text>
        </Text>
        <TextInput
          placeholder="Enter Full Name"
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
          style={{
            alignSelf: 'center',
            width: '95%',
            height: Height(50),
            fontFamily: 'Gilroy-SemiBold',
            borderWidth: 1.5,
            borderRadius: Width(10),
            paddingHorizontal: Width(30),
            fontSize: Height(16),
            marginTop: Height(10),
            borderColor: index === 1 ? textcolor : '#a9a9a9',
          }}
          // value={email}
          // onBlur={() => Validation()}
          // onChangeText={text => setEmail(text)}
          // keyboardType="email-address"
          // onFocus={() => setIndex(1)}
        />
        {/* {emailError.length > 0 && (
                <Text
                  style={{
                    color: 'red',
                    marginLeft: Width(60),
                    fontSize: Height(11),
                    fontFamily: 'Gilroy-SemiBold',
                  }}>
                  {emailError}
                </Text>
              )} */}
        <Text
          style={{
            color: 'black',
            fontFamily: 'Gilroy-SemiBold',
            fontSize: Height(16),
            marginTop: Height(5),
            marginLeft: Width(25),
          }}>
          Email
          <Text style={{color: textcolor}}> *</Text>
        </Text>
        <TextInput
          placeholder="Enter Email
          "
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
          style={{
            alignSelf: 'center',
            width: '95%',
            height: Height(50),
            fontFamily: 'Gilroy-SemiBold',
            borderWidth: 1.5,
            borderRadius: Width(10),
            paddingHorizontal: Width(30),
            fontSize: Height(16),
            marginTop: Height(10),
            borderColor: index === 1 ? textcolor : '#a9a9a9',
          }}
          // value={email}
          // onBlur={() => Validation()}
          // onChangeText={text => setEmail(text)}
          // keyboardType="email-address"
          // onFocus={() => setIndex(1)}
        />
        {/* {emailError.length > 0 && (
                <Text
                  style={{
                    color: 'red',
                    marginLeft: Width(60),
                    fontSize: Height(11),
                    fontFamily: 'Gilroy-SemiBold',
                  }}>
                  {emailError}
                </Text>
              )} */}
        <Text
          style={{
            color: 'black',
            fontFamily: 'Gilroy-SemiBold',
            fontSize: Height(16),
            marginTop: Height(5),
            marginLeft: Width(25),
          }}>
          Address
          <Text style={{color: textcolor}}> *</Text>
        </Text>
        <TextInput
          placeholder="Enter Address
          "
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
          style={{
            alignSelf: 'center',
            width: '95%',
            height: Height(50),
            fontFamily: 'Gilroy-SemiBold',
            borderWidth: 1.5,
            borderRadius: Width(10),
            paddingHorizontal: Width(30),
            fontSize: Height(16),
            marginTop: Height(10),
            borderColor: index === 1 ? textcolor : '#a9a9a9',
          }}
          // value={email}
          // onBlur={() => Validation()}
          // onChangeText={text => setEmail(text)}
          // keyboardType="email-address"
          // onFocus={() => setIndex(1)}
        />
        {/* {emailError.length > 0 && (
                <Text
                  style={{
                    color: 'red',
                    marginLeft: Width(60),
                    fontSize: Height(11),
                    fontFamily: 'Gilroy-SemiBold',
                  }}>
                  {emailError}
                </Text>
              )} */}
        <Text
          style={{
            color: 'black',
            fontFamily: 'Gilroy-SemiBold',
            fontSize: Height(16),
            marginTop: Height(5),
            marginLeft: Width(25),
          }}>
          City
          <Text style={{color: textcolor}}> *</Text>
        </Text>
        <TextInput
          placeholder="Enter City"
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
          style={{
            alignSelf: 'center',
            width: '95%',
            height: Height(50),
            fontFamily: 'Gilroy-SemiBold',
            borderWidth: 1.5,
            borderRadius: Width(10),
            paddingHorizontal: Width(30),
            fontSize: Height(16),
            marginTop: Height(10),
            borderColor: index === 1 ? textcolor : '#a9a9a9',
          }}
          // value={email}
          // onBlur={() => Validation()}
          // onChangeText={text => setEmail(text)}
          // keyboardType="email-address"
          // onFocus={() => setIndex(1)}
        />
        {/* {emailError.length > 0 && (
                <Text
                  style={{
                    color: 'red',
                    marginLeft: Width(60),
                    fontSize: Height(11),
                    fontFamily: 'Gilroy-SemiBold',
                  }}>
                  {emailError}
                </Text>
              )} */}
        <Text
          style={{
            color: 'black',
            fontFamily: 'Gilroy-SemiBold',
            fontSize: Height(16),
            marginTop: Height(5),
            marginLeft: Width(25),
          }}>
          State
          <Text style={{color: textcolor}}> *</Text>
        </Text>
        <TextInput
          placeholder="Enter State
          "
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
          style={{
            alignSelf: 'center',
            width: '95%',
            height: Height(50),
            fontFamily: 'Gilroy-SemiBold',
            borderWidth: 1.5,
            borderRadius: Width(10),
            paddingHorizontal: Width(30),
            fontSize: Height(16),
            marginTop: Height(10),
            borderColor: index === 1 ? textcolor : '#a9a9a9',
          }}
          // value={email}
          // onBlur={() => Validation()}
          // onChangeText={text => setEmail(text)}
          // keyboardType="email-address"
          // onFocus={() => setIndex(1)}
        />
        {/* {emailError.length > 0 && (
                <Text
                  style={{
                    color: 'red',
                    marginLeft: Width(60),
                    fontSize: Height(11),
                    fontFamily: 'Gilroy-SemiBold',
                  }}>
                  {emailError}
                </Text>
              )} */}
        <Text
          style={{
            color: 'black',
            fontFamily: 'Gilroy-SemiBold',
            fontSize: Height(16),
            marginTop: Height(5),
            marginLeft: Width(25),
          }}>
          ID Proof
          <Text style={{color: textcolor}}> *</Text>
        </Text>
        <TextInput
          placeholder="Enter Mobile number"
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
          style={{
            alignSelf: 'center',
            width: '95%',
            height: Height(50),
            fontFamily: 'Gilroy-SemiBold',
            borderWidth: 1.5,
            borderRadius: Width(10),
            paddingHorizontal: Width(30),
            fontSize: Height(16),
            marginTop: Height(10),
            borderColor: index === 1 ? textcolor : '#a9a9a9',
          }}
          // value={email}
          // onBlur={() => Validation()}
          // onChangeText={text => setEmail(text)}
          // keyboardType="email-address"
          // onFocus={() => setIndex(1)}
        />
        {/* {emailError.length > 0 && (
                <Text
                  style={{
                    color: 'red',
                    marginLeft: Width(60),
                    fontSize: Height(11),
                    fontFamily: 'Gilroy-SemiBold',
                  }}>
                  {emailError}
                </Text>
              )} */}
        <Text
          style={{
            color: 'black',
            fontFamily: 'Gilroy-SemiBold',
            fontSize: Height(16),
            marginTop: Height(5),
            marginLeft: Width(25),
          }}>
          ID Proof Number
          <Text style={{color: textcolor}}> *</Text>
        </Text>
        <TextInput
          placeholder="Enter ID Proof Number
          "
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
          style={{
            alignSelf: 'center',
            width: '95%',
            height: Height(50),
            fontFamily: 'Gilroy-SemiBold',
            borderWidth: 1.5,
            borderRadius: Width(10),
            paddingHorizontal: Width(30),
            fontSize: Height(16),
            marginTop: Height(10),
            borderColor: index === 1 ? textcolor : '#a9a9a9',
          }}
          // value={email}
          // onBlur={() => Validation()}
          // onChangeText={text => setEmail(text)}
          // keyboardType="email-address"
          // onFocus={() => setIndex(1)}
        />
        {/* {emailError.length > 0 && (
                <Text
                  style={{
                    color: 'red',
                    marginLeft: Width(60),
                    fontSize: Height(11),
                    fontFamily: 'Gilroy-SemiBold',
                  }}>
                  {emailError}
                </Text>
              )} */}
        <View style={styles.GuestView}>
          <Text>Guest & Rooms</Text>
          <View>
            <View style={styles.valueView}>
              <Text>Male</Text>
              <View style={styles.valueViewbtn}>
                <TouchableOpacity>
                  <View style={styles.btnadd}>
                    <Text style={{textAlign: 'center'}}>
                      <Ionicons
                        name="add-outline"
                        color="white"
                        size={Height(20)}
                      />
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text style={{marginLeft: 10, marginRight: 10}}>0</Text>
                <TouchableOpacity>
                  <View style={styles.btnadd}>
                    <Text style={{textAlign: 'center'}}>
                      <Ionicons
                        name="remove-outline"
                        color="white"
                        size={Height(20)}
                      />
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.valueView}>
              <Text>Female</Text>
              <View style={styles.valueViewbtn}>
                <TouchableOpacity>
                  <View style={styles.btnadd}>
                    <Text style={{textAlign: 'center'}}>
                      <Ionicons
                        name="add-outline"
                        color="white"
                        size={Height(20)}
                      />
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text style={{marginLeft: 10, marginRight: 10}}>0</Text>
                <TouchableOpacity>
                  <View style={styles.btnadd}>
                    <Text style={{textAlign: 'center'}}>
                      <Ionicons
                        name="remove-outline"
                        color="white"
                        size={Height(20)}
                      />
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.valueView}>
              <Text>Children</Text>
              <View style={styles.valueViewbtn}>
                <TouchableOpacity>
                  <View style={styles.btnadd}>
                    <Text style={{textAlign: 'center'}}>
                      <Ionicons
                        name="add-outline"
                        color="white"
                        size={Height(20)}
                      />
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text style={{marginLeft: 10, marginRight: 10}}>0</Text>
                <TouchableOpacity>
                  <View style={styles.btnadd}>
                    <Text style={{textAlign: 'center'}}>
                      <Ionicons
                        name="remove-outline"
                        color="white"
                        size={Height(20)}
                      />
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.valueView}>
              <Text>Rooms</Text>
              <View style={styles.valueViewbtn}>
                <TouchableOpacity>
                  <View style={styles.btnadd}>
                    <Text style={{textAlign: 'center'}}>
                      <Ionicons
                        name="add-outline"
                        color="white"
                        size={Height(20)}
                      />
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text style={{marginLeft: 10, marginRight: 10}}>0</Text>
                <TouchableOpacity>
                  <View style={styles.btnadd}>
                    <Text style={{textAlign: 'center'}}>
                      <Ionicons
                        name="remove-outline"
                        color="white"
                        size={Height(20)}
                      />
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity>
              <View style={styles.gobtn}>
                <Text style={{color: textcolor}}>Go to Back</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.goToCheckbtn}>
                <Text style={{color: 'white'}}>Proceed To Check</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingScreens;

const styles = StyleSheet.create({
  dharamnameText: {
    backgroundColor: 'rgba(253, 201, 156, 0.5)',
    margin: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
  },
  AccommodationText: {
    marginLeft: 13,
    fontWeight: 500,
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  GuestView: {
    padding: 13,
  },
  valueView: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
    alignItems: 'center',
  },
  valueViewbtn: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
    Width: '50%',
  },
  btnadd: {
    backgroundColor: textcolor,
    width: 80,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  gobtn: {
    borderRadius: 10,
    borderColor: textcolor,
    borderWidth: 1,
    marginBottom: 15,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  goToCheckbtn: {
    borderRadius: 10,
    borderColor: textcolor,
    borderWidth: 1,
    marginBottom: 15,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: textcolor,
  },
});
