import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import dharm from '../../assets/dharm.jpeg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  primary,
  secondary,
  textcolor,
  donationavtivebtn,
  donationbtnunactiveborder,
} from '../../utils/Colors';
import {Height, Width} from '../../utils/responsive';
import {useNavigation} from '@react-navigation/native';
import {backendUrl} from '../../Config/config';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Dharamcard = ({data}) => {
  const navigation = useNavigation();
  console.log('from dharam', data);
  let dharamId = data?.dharmasala_id;
  return (
    <View>
      <View style={styles.maincard}>
        <Image
          source={{
            uri: `${backendUrl}uploads/images/${data?.image1}`,
          }}
          style={styles.dharming}
        />
        <Text style={styles.labelText}>
          <Ionicons name="location" color={donationavtivebtn} size={20} />
          Kundalpur
        </Text>
        <Text style={styles.labelText}>{data?.name}</Text>
        <View style={styles.loginbtndiv}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DharamDetails', {dharamId})}>
            <View style={styles.loginbtn}>
              <Text style={styles.logintextstyle}>Details</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Dharamcard;

const styles = StyleSheet.create({
  maincard: {
    marginBottom: 13,
    width: windowWidth / 2.3,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  dharming: {
    width: windowWidth / 2.3,
    height: windowHeight / 7,
    borderRadius: 10,
  },
  labelText: {
    marginLeft: '5%',
    marginBottom: 5,
    marginTop: 5,
  },
  loginbtndiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: Height(15),
  },
  logintextstyle: {
    color: 'white',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 30,
  },
  loginbtn: {
    width: windowWidth / 3,
    backgroundColor: textcolor,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
