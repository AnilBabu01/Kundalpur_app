/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useEffect} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   BackHandler,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 
 function StatusPage ({navigation,route}){
   const isDarkMode = useColorScheme() === 'dark';
   
   useEffect(() => {

    backPressHandler = () => {

      // Put your own code here, which you want to execute on back button press.
      navigation.navigate('Home');
      // Return true to enable back button over ride.
      return true;
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", this.backPressHandler);

    return () => backHandler.remove();
  }, []);
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView >
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         >
           <View>
             <Text>{route.params.objJson}</Text>
           </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   
 })
 
 export default StatusPage;