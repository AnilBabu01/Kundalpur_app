import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {backendUrl} from '../../Config/config';
import moment from 'moment';
import profileimg from '../../assets/profileimg.jpg';
const windowHeight = Dimensions.get('window').height;
const Profile = ({navigation}) => {
  const [user, setuser] = useState('');
  const route = useRoute();

  useEffect(() => {
    setuser(route.params?.user);
  }, []);

  return (
    <ScrollView>
      <View style={styles.connainer}>
        <View style={[styles.card, styles.elevation]}>
          <View style={styles.imgview}>
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
                <Image source={profileimg} style={styles.avator} />
              </>
            )}
            <View>
              <Text style={styles.heading}>
                *****{user?.mobileNo && user?.mobileNo.slice(4, 9)}
              </Text>
              <Text>{user?.mobileNo && user?.mobileNo}</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Updateprofile', {user})}>
            <View>
              <Ionicons name="arrow-forward-outline" size={40} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.card10}>
          <View style={styles.viewdel}>
            <Text>Full Name</Text>
            <Text style={styles.deltext}>
              {user?.name ? user?.name : '****************'}
            </Text>
          </View>
          <View style={styles.viewdel}>
            <Text>Email</Text>
            <Text style={styles.deltext}>
              {user?.email ? user?.email : '***************'}
            </Text>
          </View>
          <View style={styles.viewdel}>
            <Text>Address</Text>
            <Text style={styles.deltext}>
              {user?.Address ? user?.address : '****************'}
            </Text>
          </View>
          <View style={styles.viewdel}>
            <Text>Date of Birth</Text>
            <Text style={styles.deltext}>
              {user?.dob
                ? moment(user?.dob).format('DD/MM/YYYY')
                : '****************'}
            </Text>
          </View>
          <View style={styles.viewdel}>
            <Text>Anniversary date</Text>
            <Text style={styles.deltext}>
              {user?.anniversary_date
                ? moment(user?.anniversary_date).format('DD/MM/YYYY')
                : '******************'}
            </Text>
          </View>
          {/* <View style={styles.viewdel}>
            <Text>Signature</Text>
            <Image
              source={'https://dummyimage.com/100x100/000/fff'}
              style={{height: 20, width: 20}}
              alt="ss"
            />
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  heading: {
    marginRight: '25%',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  elevation: {
    shadowColor: '#52006A',
    elevation: 20,
  },

  card10: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    height: windowHeight / 4,
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  viewdel: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },
  deltext: {
    // marginLeft: 20,
    color: 'black',
  },
  connainer: {
    margin: 10,
  },
  imgview: {
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avator: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
