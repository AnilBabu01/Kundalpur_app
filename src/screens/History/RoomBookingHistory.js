import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import HistoryCard from './HistoryCard';
import {serverInstance} from '../../API/ServerInstance';
import Loader from '../../Conponents/Loader';

const RoomBookingHistory = () => {
  const [isData, setisData] = useState('');
  const [visible, setvisible] = useState(false);
  const [message, setmessage] = useState('');
  const gettable = () => {
    // setvisible(true);
    // setmessage('Data Loading....');
    serverInstance('user/donation-list', 'get').then(res => {
      if (res.donation) {
        // setvisible(false);
        setisData(res.donation);
      }
    });
  };

  useEffect(() => {
    gettable();
  }, []);

  return (
    <ScrollView>
      <View style={styles.connainer}>
        {isData &&
          isData.map(item => {
            return <HistoryCard item={item} key={item.id} />;
          })}
      </View>
      <Loader visible={visible} message={message} />
    </ScrollView>
  );
};

export default RoomBookingHistory;

const styles = StyleSheet.create({
  connainer: {
    margin: 10,
  },
});
