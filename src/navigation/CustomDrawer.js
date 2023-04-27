import React, {useState, useEffect} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {donationavtivebtn} from '../utils/Colors';
import {useSelector, useDispatch} from 'react-redux';
import {loadUser} from '../Redux/action/AuthAction';
import {backendUrl} from '../Config/config';
import Loader from '../Conponents/Loader';
import profileimg from '../assets/profileimg.jpg';
function CustomDrawer(props) {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [visible, setvisible] = useState(false);
  const [message, setmessage] = useState('');
  const logout = async () => {
    try {
      setvisible(true);
      setmessage('Logout...');
      await AsyncStorage.removeItem('token');
      navigation.navigate('Login');
      navigation.closeDrawer();
      setvisible(false);
      dispatch(loadUser());
    } catch (error) {
      console.log(error);
      setvisible(false);
    }
  };

  const {user} = useSelector(state => state.userReducer);
  useEffect(() => {
    setTimeout(() => {
      dispatch(loadUser());
    }, 100);
  }, []);

  console.log('user fromj cur ', user);
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
          {user?.profile_image ? (
            <>
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
            </>
          ) : (
            <>
              <Image
                source={profileimg}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                }}
              />
            </>
          )}

          <Text style={{color: 'white'}}>{user?.name}</Text>
        </View>
      </View>

      <DrawerItem
        label="Profile"
        icon={() => <Ionicons name="person-circle-outline" size={20} />}
        onPress={() => {
          navigation.closeDrawer();
          navigation.navigate('Profiles', {user});
        }}
        labelStyle={{color: 'black'}}
      />
      <DrawerItem
        label="Histroy"
        icon={() => <Ionicons name="timer-outline" size={20} />}
        onPress={() => {
          navigation.navigate('Home');
          navigation.closeDrawer();
        }}
        labelStyle={{color: 'black'}}
      />

      <DrawerItem
        label="Help Center"
        icon={() => <Ionicons name="help-circle-outline" size={20} />}
        onPress={() => {
          navigation.navigate('login');
          navigation.closeDrawer();
        }}
        labelStyle={{color: 'black'}}
      />
      <DrawerItem
        label="Change password"
        icon={() => <Ionicons name="lock-open-outline" size={20} />}
        onPress={() => {
          navigation.navigate('Changepassword');
          navigation.closeDrawer();
        }}
        labelStyle={{color: 'black'}}
      />
      <DrawerItem
        label="Privacy Policy"
        icon={() => <Ionicons name="lock-closed-outline" size={20} />}
        onPress={() => {
          navigation.closeDrawer();
          navigation.navigate('login');
        }}
        labelStyle={{color: 'black'}}
      />
      <DrawerItem
        label="Logout"
        icon={() => <Ionicons name="lock-closed-outline" size={20} />}
        onPress={() => logout()}
        labelStyle={{color: 'black'}}
      />
      <Loader visible={visible} message={message} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
