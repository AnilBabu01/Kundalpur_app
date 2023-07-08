import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {backendUrl} from '../../Config/config';
const DharamRoom = ({data, image}) => {
  return (
    <View style={styles.connainer}>
      <View style={[styles.card, styles.elevation]}>
        <View style={styles.inearView}>
          <Image
            source={{
              uri: `${backendUrl}uploads/images/${image}`,
            }}
            style={styles.dharming}
          />
        </View>
        <View style={styles.inearView}>
          <Text style={styles.dettailstext}>{data?.facility_name}</Text>
          <Text style={styles.dettailstext}>{data?.category_name}</Text>
          <Text style={styles.dettailstext}>₹{data?.Rate} Per Night</Text>
          <Text style={styles.dettailstext}>Advance Rate ₹{data?.advance}</Text>
        </View>
      </View>
    </View>
  );
};

export default DharamRoom;

const styles = StyleSheet.create({
  dettailstext: {
    marginBottom: 5,
    marginTop: 5,
  },
  inearView: {
    width: windowWidth / 2,
  },
  dharming: {
    width: '85%',
    height: windowHeight / 6.2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // marginRight: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginRight: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  elevation: {
    shadowColor: '#52006A',
    elevation: 20,
  },
  //   connainer: {
  //     margin: 10,
  //   },
});
