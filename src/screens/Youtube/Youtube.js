import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
// import ProgressBar from 'react-native-progress/Bar';
const Youtube = () => {
  const [progress, setprogress] = useState(0);
  const [isLoad, setisLoad] = useState(false);
  return <WebView source={{uri: 'https://www.youtube.com/c/ShreeBadeBaba'}} />;
};

export default Youtube;
