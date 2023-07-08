import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  primary,
  secondary,
  textcolor,
  donationavtivebtn,
  donationbtnunactiveborder,
} from '../../utils/Colors';
import {useRoute} from '@react-navigation/native';
import {serverInstance} from '../../API/ServerInstance';
import {backendUrl} from '../../Config/config';
import DharamRoom from './DharamRoom';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ViewDharamDetails = () => {
  const route = useRoute();
  const [dharamDetials, setdharamDetials] = useState('');
  console.log(route.params?.dharamId);
  const getdharamshala = () => {
    serverInstance(
      `room/dharmashala?id=${Number(route.params?.dharamId)}`,
      'get',
    ).then(res => {
      console.log('dharsmshala detisls', res.data);
      setdharamDetials(res.data);
    });
  };

  useEffect(() => {
    getdharamshala();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.textdharam}>
            <Text style={styles.dharmtextname}>
              {dharamDetials && dharamDetials?.name}
            </Text>
            <Image
              source={{
                uri: `${backendUrl}uploads/images/${
                  dharamDetials.dharmasala && dharamDetials.dharmasala?.image1
                }`,
              }}
              style={styles.dharming}
            />
            <Text style={styles.desctext}>{dharamDetials?.desc}</Text>
            <Text style={styles.labelText}>
              <Ionicons name="location" color={donationavtivebtn} size={20} />
              Kundalpur
            </Text>
            <DharamRoom
              data={dharamDetials && dharamDetials?.availableRooms[0]}
              image={dharamDetials && dharamDetials?.availableRooms[0]?.image1}
            />
            <DharamRoom
              data={dharamDetials && dharamDetials?.availableRooms[0]}
              image={dharamDetials && dharamDetials?.availableRooms[0]?.image1}
            />
            <DharamRoom
              data={dharamDetials && dharamDetials?.availableRooms[0]}
              image={dharamDetials && dharamDetials?.availableRooms[0]?.image1}
            />
            <DharamRoom
              data={dharamDetials && dharamDetials?.availableRooms[0]}
              image={dharamDetials && dharamDetials?.availableRooms[0]?.image1}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewDharamDetails;

const styles = StyleSheet.create({
  textdharam: {
    width: windowWidth,
    padding: 10,
  },
  dharmtextname: {
    marginBottom: 10,
    fontWeight: 500,
    fontSize: 20,
  },
  desctext: {
    marginTop: 5,
    color: '#525252',
    fontSize: 16,
  },
  dharming: {
    width: '100%',
    height: windowHeight / 4,
    borderRadius: 10,
    marginRight: 10,
  },
  labelText: {
    marginBottom: 10,
    marginTop: 10,
  },
});
