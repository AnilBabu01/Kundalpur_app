import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo1 from '../assets/logo1.png';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Splash = ({navigation}) => {
  const gettoken = async () => {
    let token = await AsyncStorage.getItem('token');
    if (token) {
      navigation.navigate('Drawer');
    }
  };
  useEffect(() => {
    gettoken();
  }, []);

  return (
    <View style={style.maincontainer}>
      <StatusBar hidden={true} />
      <View></View>
      <View style={style.logocontainer}>
        <Image
          source={logo1}
          style={{
            width: 200,
            height: 200,
            borderRadius: 11,
          }}
        />
        <Text style={style.textsplsh}>Shree bade baba</Text>
      </View>
      <View style={style.bottomcontainer}>
        <Text style={style.bottomtext}>
          श्री दिगम्बर जैन ❤️ सिद्धक्षेत्र कुण्डलगिरि कुण्डलपुर दमोह (म.प्र.)
        </Text>
      </View>
    </View>
  );
};

export default Splash;

const style = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textsplsh: {
    fontSize: 25,
    color: '#fa9c23',
    marginTop: 10,
  },

  logocontainer: {
    alignItems: 'center',
  },
  bottomcontainer: {},
  bottomtext: {},
});
