import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import HistoryCard from './HistoryCard';
import {serverInstance} from '../../API/ServerInstance';
import Loader from '../../Conponents/Loader';
import {Height, Width} from '../../utils/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OnlineHistory = () => {
  const [isData, setisData] = useState('');
  const [visible, setvisible] = useState(false);
  const [message, setmessage] = useState('');
  const gettable = () => {
    setvisible(true);
    setmessage('Data Loading....');
    serverInstance('user/donation-list', 'get').then(res => {
      if (res.donation) {
        setvisible(false);
        let filterData = res.donation.filter(
          item => item.MODE_OF_DONATION === 'ONLINE',
        );
        setisData(filterData);
      }
    });
  };

  useEffect(() => {
    gettable();
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          width: Width(350),
          height: Height(50),
          backgroundColor: '#E9EAEC',
          alignSelf: 'center',
          borderRadius: Width(20),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: Height(20),
        }}>
        <TextInput
          placeholder="Search here"
          style={{
            paddingLeft: Width(30),
            fontFamily: 'Gilroy-SemiBold',
            color: 'black',
            fontSize: Height(16),
            width: Width(260),
          }}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <Ionicons
          name="md-search-outline"
          size={Height(22)}
          style={{marginRight: Width(20)}}
          color="rgba(0, 0, 0, 0.5)"
        />
      </View>
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

export default OnlineHistory;

const styles = StyleSheet.create({
  connainer: {
    margin: 10,
  },
});
