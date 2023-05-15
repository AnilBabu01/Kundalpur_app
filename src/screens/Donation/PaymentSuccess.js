import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {serverInstance} from '../../API/ServerInstance';
import {Height, Width} from '../../utils/responsive';
import {textcolor} from '../../utils/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function PaymentSuccess({navigation, route}) {
  const [transactionId, settransactionId] = useState(true);
  const [donationDeatils, setDonationDetails] = useState(null);

  useEffect(() => {
    if (route.params?.objJson) {
      settransactionId(true);
      serverInstance(`admin/donation-list`, 'get')
        .then(res => {
          if (res.status) {
            setDonationDetails(res.data[0]);

            console.log(res.data[0]);
          }
        })
        .catch(error => {});
    }
    if (route.params?.objJson === '') {
      settransactionId(false);
    }
  }, []);

  return (
    <View style={styles.mainsuccess}>
      <View style={styles.profile}>
        {transactionId ? (
          <View>
            <Ionicons
              name="checkmark-circle"
              size={40}
              style={{color: '#11b411'}}
            />
          </View>
        ) : (
          <View>
            <Ionicons name="help-circle" size={40} style={{color: 'red'}} />
          </View>
        )}

        {transactionId ? (
          <View>
            <Text style={{color: '#11b411'}}>Payment Success</Text>
          </View>
        ) : (
          <View>
            <Text style={{color: 'red'}}>Payment Failed</Text>
          </View>
        )}

        {transactionId ? (
          <View>
            <Text style={styles.donatonText}>
              Donated ₹{donationDeatils?.AMOUNT}
            </Text>
            <Text>
              Thank you for your donation. Your transaction has been completed
              with Order Number: {donationDeatils?.RECEIPT_NO}
            </Text>
            <View style={styles.btnView}>
              <TouchableOpacity>
                <View style={styles.btngo}>
                  <Text style={{color: 'white'}}>Download Receipt</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('History')}>
                <View style={styles.btngo}>
                  <Text style={{color: 'white'}}> Donation History</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <Text>
              Your payment is failed.Don't worry if its deducted from you bank
              account then it will refund soon. You can donate again by
              <Text
                onPress={() => navigation.navigate('Drawer')}
                style={{color: 'blue'}}>
                {' '}
                clicking here{' '}
              </Text>
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    width: windowWidth / 1.1,
    height: windowHeight / 4,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainsuccess: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight / 3.5,
  },
  donatonText: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 18,
  },
  btnView: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  btngo: {
    height: Height(30),
    backgroundColor: textcolor,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    textcolor: 'red',
  },
});
