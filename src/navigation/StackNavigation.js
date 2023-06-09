import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import LoginScreen from '../screens/Auth/Login';
import SignUpScreen from '../screens/Auth/SignUp';
import VerifyotpScreen from '../screens/Auth/Verifyotp';
import ProfileScreen from '../screens/Profile/Profile';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import DrawerNavigation from '../navigation/DrawerNavigation';
import ForgotpasswordScreen from '../screens/Auth/Forgotpassword';
import VerificationForgotScreen from '../screens/Auth/VerificationForgot';
import ResetPasswordScreen from '../screens/Auth/ResetPassword';
import ChangePasswordScreen from '../screens/Auth/ChangePassword';
import UpdateprofileScreen from '../screens/Profile/Updateprofile';
import CompleteProfileScreen from '../screens/Profile/CompleteProfile';
import ViewReceiptScreen from '../screens/History/ViewReceipt';
import ViewDharamDetailsScreen from '../screens/RoomBooking/ViewDharamDetails';
import PaymentSuccessScreen from '../screens/Donation/PaymentSuccess';
import WebViewPage from '../screens/Donation/WebViewPage';
import BookingScreens from '../screens/RoomBooking/BookingScreens';
import {donationavtivebtn} from '../utils/Colors';
import {useDispatch} from 'react-redux';
import {loadUser} from '../Redux/action/AuthAction';
const Stack = createNativeStackNavigator();

function StackNavigation() {
  const dispatch = useDispatch();
  const [showsplash, setshowsplash] = useState(true);
  useEffect(() => {
    dispatch(loadUser());
    setTimeout(() => {
      setshowsplash(false);
    }, 2000);
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {showsplash && <Stack.Screen name="OnBoarding" component={Splash} />}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Verifyotp" component={VerifyotpScreen} />
      <Stack.Screen name="Forgot" component={ForgotpasswordScreen} />
      <Stack.Screen name="ForgotVerify" component={VerificationForgotScreen} />
      <Stack.Screen name="ForgotReset" component={ResetPasswordScreen} />
      <Stack.Screen
        name="Changepassword"
        component={ChangePasswordScreen}
        options={{
          headerShown: true,
          title: 'Edit Profile',
          headerStyle: {
            backgroundColor: donationavtivebtn,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Profiles"
        component={ProfileScreen}
        options={{
          headerShown: true,
          title: 'Profile',
          headerStyle: {
            backgroundColor: donationavtivebtn,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Updateprofile"
        component={UpdateprofileScreen}
        options={{
          headerShown: true,
          title: 'Edit Profile',
          headerStyle: {
            backgroundColor: donationavtivebtn,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="CompleteProfile"
        component={CompleteProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="View"
        component={ViewReceiptScreen}
        options={{
          headerShown: true,
          title: 'Details',
          headerStyle: {
            backgroundColor: donationavtivebtn,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="DharamDetails"
        component={ViewDharamDetailsScreen}
        options={{
          headerShown: true,
          title: 'Dharamshala Details',
          headerStyle: {
            backgroundColor: donationavtivebtn,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />

      <Stack.Screen
        name="WebView"
        component={WebViewPage}
        options={{title: 'Webview', headerShown: false}}
      />
      <Stack.Screen
        name="BookingScreens"
        component={BookingScreens}
        options={{
          headerShown: true,
          title: 'Booking Screens',
          headerStyle: {
            backgroundColor: donationavtivebtn,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
