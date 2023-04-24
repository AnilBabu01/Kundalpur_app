import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Logo from '../../assets/logo1.png';
import UserAvatar from 'react-native-user-avatar';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ProfileHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.profile}>
      <Image source={Logo} style={{width: 50, height: 50}} />
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <UserAvatar
          size={50}
          name="Avishay Bar"
          src="https://dummyimage.com/100x100/000/fff"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  profile: {
    width: windowWidth,
    height: windowHeight / 10,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
});
