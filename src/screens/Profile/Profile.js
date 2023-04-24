import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import UserAvatar from 'react-native-user-avatar';
const windowHeight = Dimensions.get('window').height;
const Profile = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.connainer}>
        <View style={[styles.card, styles.elevation]}>
          <View style={styles.imgview}>
            <UserAvatar
              size={60}
              name="Avishay Bar"
              src="https://dummyimage.com/100x100/000/fff"
            />
            <View>
              <Text style={styles.heading}>******6956</Text>
              <Text>7505786956</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Updateprofile')}>
            <View>
              <Ionicons name="arrow-forward-outline" size={40} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.card10}>
          <View style={styles.viewdel}>
            <Text>Full Name</Text>
            <Text style={styles.deltext}>Anil babu</Text>
          </View>
          <View style={styles.viewdel}>
            <Text>Email</Text>
            <Text style={styles.deltext}>Anilb9850@gmail.com</Text>
          </View>
          <View style={styles.viewdel}>
            <Text>Address</Text>
            <Text style={styles.deltext}>Pilibhit bisalput up</Text>
          </View>
          <View style={styles.viewdel}>
            <Text>Date of Birth</Text>
            <Text style={styles.deltext}>17/01/1998</Text>
          </View>
          <View style={styles.viewdel}>
            <Text>Anniversary date</Text>
            <Text style={styles.deltext}>17/01/1998</Text>
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
});
