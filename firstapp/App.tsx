import React, {useEffect, useRef, useState} from 'react'
import {SafeAreaView, StatusBar, Text} from 'react-native';
import WebView from 'react-native-webview';
import { WebViewMessageEvent } from 'react-native-webview';
import { View } from 'react-native';
import { Alert } from 'react-native';

import messaging from '@react-native-firebase/messaging';

export default function App() { //главная функция для прорисовки экрана
  const webViewRef = useRef<WebView>(null); //создали пустую ссылку для дальнейшей работы с ней
  const [msg, setMsg] = useState("");
  

  useEffect(() => {

    const setupFCM = async () => {
      const authStatus = await messaging().requestPermission();
      console.log('Статус авторизации:', authStatus);

      const fcmToken = await messaging().getToken();
      console.log('FCM token:', fcmToken);

      messaging().onMessage(async remoteMessage => {
        Alert.alert(
          remoteMessage.notification?.title || 'Новое уведомление' ,
          remoteMessage.notification?.body || ''
        );
      });
    };

    setupFCM();
  }, []);


  const handleMessage = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log("получено: ", data);
    setMsg(data.message);
  };

  //ретерн как контейнер для ui компонентов
  return (
    //занимаем все пространство экрана
    <SafeAreaView style = {{flex: 1}}>
      <StatusBar hidden/>
      <View style={{flex: 1}} >

      <WebView
      //связали с ссылкой
      ref={webViewRef} 
      source={{uri: 'https://network-pi-neon.vercel.app/'}}
      onMessage={handleMessage}
      style={{ flex: 1}}
      />
      </View>
      

    </SafeAreaView>
  );
}
