import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        onPress={() => {
          navigation.openDrawer();
        }}>
        Hello
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
