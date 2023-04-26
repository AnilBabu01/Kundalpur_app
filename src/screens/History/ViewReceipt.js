import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  primary,
  secondary,
  textcolor,
  donationavtivebtn,
  donationbtnunactiveborder,
} from '../../utils/Colors';
import moment from 'moment';
import {useRoute} from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;
const ViewReceipt = () => {
  const route = useRoute();
  const [item, setitem] = useState('');

  useEffect(() => {
    setitem(route.params?.item);
  }, [item]);

  console.log('data from view', item);
  return (
    <ScrollView>
      <View style={styles.connainer}>
        <View style={styles.card10}>
          {/* <View style={styles.viewdel}>
              <Text>Mobile No</Text>
              <Text>{item?.mobileNo}</Text>
            </View> */}
          <View style={styles.viewdel}>
            <Text>Full Name</Text>
            <Text>{item?.NAME}</Text>
          </View>
          <View style={styles.viewdel}>
            <Text>Donation Type</Text>
            <Text>{item?.MODE_OF_DONATION}</Text>
          </View>
          <View style={styles.viewdel}>
            <Text>Amount</Text>
            <Text>{item?.AMOUNT}</Text>
          </View>
          <View style={styles.viewdel}>
            <Text>Transaction Id</Text>
            <Text>{item?.PAYMENT_ID ? item?.PAYMENT_ID : '--'}</Text>
          </View>

          <View style={styles.viewdel}>
            <Text>Donation Date</Text>
            <Text> {moment(item?.DATE_OF_DAAN).format('DD/MM/YYYY')}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewReceipt;

const styles = StyleSheet.create({
  card10: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  viewdel: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },
});
