import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Logo from '../../assets/logo1.png';
import {useNavigation} from '@react-navigation/native';
import {serverInstance} from '../../API/ServerInstance';
import {backendUrl} from '../../Config/config';
import profileimg from '../../assets/profileimg.jpg';
import {useSelector, useDispatch} from 'react-redux';
import {loadUser} from '../../Redux/action/AuthAction';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ProfileHeader = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {user} = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <View style={styles.profile}>
      <Image source={Logo} style={{width: 40, height: 40}} />
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
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
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  profile: {
    width: windowWidth,
    height: windowHeight / 17,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  avator: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
