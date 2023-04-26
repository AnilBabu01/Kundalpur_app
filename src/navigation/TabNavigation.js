import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Image} from 'react-native';
import home from '../assets/home.png';
import homeactive from '../assets/homeactive1.png';
import Youtube from '../assets/Youtube.png';
import Youtubeactive from '../assets/Youtubeactive.png';
import RoomBooking from '../assets/RoomBooking.png';
import RoomBookingactive from '../assets/RoomBookingactive.png';
import Profile from '../assets/Profile-1.png';
import Profileactive from '../assets/Profileactive.png';
import Donation from '../assets/Donation.png';
import Donationactive from '../assets/Donationactive.png';
import history from '../assets/history.png';
import historyactive from '../assets/histortActive.png';
import HomeScreen from '../screens/Home';
import DonationScreen from '../screens/Donation/Donation';
import YoutubeScreen from '../screens/Youtube/Youtube';
import HistroryScreen from '../screens/History/Histrory';
import RoomMainScreen from '../screens/RoomBooking/RoomMain';
import {useTheme} from 'react-native-paper';
import {
  primary,
  secondary,
  textcolor,
  donationavtivebtn,
  donationbtnunactiveborder,
} from '../utils/Colors';
const Tab = createMaterialBottomTabNavigator();

function TabNavigation() {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transperent';
  return (
    <Tab.Navigator
      activeColor={donationavtivebtn}
      inactiveColor="#747474"
      barStyle={{backgroundColor: '#F4F4F4'}}
      shifting={false}>
      {/* <Tab.Screen
        options={{
          tabBarIcon: ({focused, tintColor, size}) => {
            return (
              <View>
                {focused ? (
                  <Image
                    style={{
                      width: 28,
                      height: 30,
                    }}
                    source={homeactive}
                  />
                ) : (
                  <Image
                    style={{
                      width: 28,
                      height: 30,
                    }}
                    source={home}
                  />
                )}
              </View>
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      /> */}

      <Tab.Screen
        options={{
          tabBarIcon: ({focused, tintColor, size}) => {
            return (
              <View>
                {focused ? (
                  <Image
                    style={{
                      width: 28,
                      height: 28,
                    }}
                    source={Donationactive}
                  />
                ) : (
                  <Image
                    style={{
                      width: 28,
                      height: 28,
                    }}
                    source={Donation}
                  />
                )}
              </View>
            );
          },
          headerShown: true,
        }}
        name="Donation"
        component={DonationScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, tintColor, size}) => {
            return (
              <View>
                {focused ? (
                  <Image
                    style={{
                      width: 28,
                      height: 33,
                    }}
                    source={RoomBookingactive}
                  />
                ) : (
                  <Image
                    style={{
                      width: 28,
                      height: 32,
                    }}
                    source={RoomBooking}
                  />
                )}
              </View>
            );
          },
        }}
        name="Room"
        component={RoomMainScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, tintColor, size}) => {
            return (
              <View>
                {focused ? (
                  <Image
                    style={{
                      width: 42,
                      height: 30,
                    }}
                    source={Youtubeactive}
                  />
                ) : (
                  <Image
                    style={{
                      width: 42,
                      height: 30,
                    }}
                    source={Youtube}
                  />
                )}
              </View>
            );
          },
        }}
        name="Youtube"
        component={YoutubeScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused, tintColor, size}) => {
            return (
              <View>
                {focused ? (
                  <Image
                    style={{
                      width: 28,
                      height: 28,
                    }}
                    source={historyactive}
                  />
                ) : (
                  <Image
                    style={{
                      width: 28,
                      height: 28,
                    }}
                    source={history}
                  />
                )}
              </View>
            );
          },
        }}
        name="History"
        component={HistroryScreen}
      />
      {/* <Tab.Screen
        options={{
          tabBarIcon: ({focused, tintColor, size}) => {
            return (
              <View>
                {focused ? (
                  <Image
                    style={{
                      width: 28,
                      height: 28,
                    }}
                    source={Profileactive}
                  />
                ) : (
                  <Image
                    style={{
                      width: 28,
                      height: 28,
                    }}
                    source={Profile}
                  />
                )}
              </View>
            );
          },
        }}
        name="Profile"
        component={HomeScreen}
      /> */}
    </Tab.Navigator>
  );
}

export default TabNavigation;
