import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  primary,
  secondary,
  textcolor,
  donationavtivebtn,
  donationbtnunactiveborder,
} from '../../utils/Colors';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;
const HistoryCard = ({item}) => {
  const navigation = useNavigation();

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
            <Text>Receipt no</Text>
            <Text>{item?.RECEIPT_NO}</Text>
          </View>
          <View style={styles.viewdel}>
            <Text>Head</Text>
            <Text>{item?.TYPE}</Text>
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
          <View style={styles.viewdelbtn}>
            <TouchableOpacity style={styles.donationButton}>
              <View>
                <Text style={styles.avtiveText}>Download</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.donationButton}
              onPress={() => navigation.navigate('View', {item})}>
              <View>
                <Text style={styles.avtiveText}>View</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HistoryCard;

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
  viewdelbtn: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  donationButton: {
    backgroundColor: donationavtivebtn,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
    borderRadius: 10,
    width: '45%',
    height: 40,
  },
  avtiveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
