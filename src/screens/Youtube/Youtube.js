import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import Loader from '../../Conponents/Loader';
const Youtube = () => {
  const [visible, setvisible] = useState(false);
  const [message, setmessage] = useState('');
  return (
    <>
      <WebView
        source={{uri: 'https://www.youtube.com/c/ShreeBadeBaba'}}
        onLoadStart={() => {
          setvisible(true);
          setmessage('Youtube Loading....');
        }}
        onLoad={() => {
          setvisible(false);
          setmessage('');
        }}
      />
      <Loader visible={visible} message={message} />
    </>
  );
};

export default Youtube;
