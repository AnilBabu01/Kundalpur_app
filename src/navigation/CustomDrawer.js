import React, {useState, useEffect} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {donationavtivebtn} from '../utils/Colors';
import {serverInstance} from '../API/ServerInstance';
import {backendUrl} from '../Config/config';
function CustomDrawer(props) {
  const {navigation} = props;
  const [user, setuser] = useState('');
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      navigation.navigate('Login');
      navigation.closeDrawer();
    } catch (error) {
      console.log(error);
    }
  };
  const getProfile = () => {
    try {
      serverInstance(`user/profile-list`, 'get').then(res => {
        if (res?.profile) {
          setuser(res?.profile);
        }
      });
    } catch (error) {}
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <DrawerContentScrollView
      style={{backgroundColor: donationavtivebtn, color: 'black'}}
      {...props}>
      <View
        style={{
          backgroundColor: donationavtivebtn,
          alignItems: 'center',
        }}>
        <Text
          onPress={() => navigation.closeDrawer()}
          style={{
            alignSelf: 'flex-end',
            marginRight: 16,
          }}>
          <Ionicons name="close-outline" size={40} />
        </Text>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 24,
          }}>
          <Image
            source={{
              uri: `${backendUrl}uploads/images/${user?.profile_image}`,
            }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
            }}
          />
          <Text style={{color: 'white'}}>{user?.name}</Text>
        </View>
      </View>

      <DrawerItem
        label="Profile"
        icon={() => <Ionicons name="person-circle-outline" size={20} />}
        onPress={() => navigation.navigate('Profiles', {user})}
        labelStyle={{color: 'black'}}
      />
      <DrawerItem
        label="Histroy"
        icon={() => <Ionicons name="timer-outline" size={20} />}
        onPress={() => navigation.navigate('Home')}
        labelStyle={{color: 'black'}}
      />

      <DrawerItem
        label="Help Center"
        icon={() => <Ionicons name="help-circle-outline" size={20} />}
        onPress={() => navigation.navigate('login')}
        labelStyle={{color: 'black'}}
      />
      <DrawerItem
        label="Change password"
        icon={() => <Ionicons name="lock-open-outline" size={20} />}
        onPress={() => navigation.navigate('Changepassword')}
        labelStyle={{color: 'black'}}
      />
      <DrawerItem
        label="Privacy Policy"
        icon={() => <Ionicons name="lock-closed-outline" size={20} />}
        onPress={() => navigation.navigate('login')}
        labelStyle={{color: 'black'}}
      />
      <DrawerItem
        label="Logout"
        icon={() => <Ionicons name="lock-closed-outline" size={20} />}
        onPress={() => logout()}
        labelStyle={{color: 'black'}}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
