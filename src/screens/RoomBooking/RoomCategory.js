import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {textcolor} from '../../utils/Colors';
import {backendUrl} from '../../Config/config';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RoomCategory = ({data, checkindate}) => {
  const navigation = useNavigation();
  //   console.log('room detais', data?.roomDetails?.name);
  //   console.log('room detais', data?.already_booked);
  return (
    <View style={styles.connainer}>
      <View style={[styles.card, styles.elevation]}>
        <View style={styles.inearView}>
          <Image
            source={{
              uri: `${backendUrl}uploads/images/${data?.roomDetails?.roomImage1}`,
            }}
            style={styles.dharming}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('BookingScreens', {data, checkindate})
            }>
            <View style={styles.bookbtn}>
              <Text style={{color: 'white'}}>Book Now</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.inearView}>
          <Text style={styles.dettailstext}>
            {data?.roomDetails?.facility_name}
          </Text>
          <Text style={styles.dettailstext}>
            {data?.roomDetails?.category_name}
          </Text>
          <Text style={styles.dettailstext}>
            ₹{data?.roomDetails?.Rate} Per Night
          </Text>
          <Text style={styles.dettailstext}>
            Advance Rate ₹{data?.roomDetails?.advance}
          </Text>
          <Text style={styles.dettailstext}>
            CheckOut Time {data?.roomDetails?.coTime} Hours
          </Text>
          <Text style={styles.dettailstext}>
            Available Rooms {data?.available_rooms}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RoomCategory;

const styles = StyleSheet.create({
  dettailstext: {
    marginBottom: 5,
    marginTop: 5,
  },
  inearView: {
    width: windowWidth / 2,
  },
  dharming: {
    width: '85%',
    height: windowHeight / 6.2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // marginRight: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginRight: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  elevation: {
    shadowColor: '#52006A',
    elevation: 20,
  },
  bookbtn: {
    width: '85%',
    height: 30,
    backgroundColor: textcolor,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
});
