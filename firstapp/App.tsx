import React, {useRef, useState} from 'react'
import {SafeAreaView, StatusBar, Text} from 'react-native';
import WebView from 'react-native-webview';
import { WebViewMessageEvent } from 'react-native-webview';
import { View } from 'react-native';

export default function App() { //главная функция для прорисовки экрана
  const webViewRef = useRef<WebView>(null); //создали пустую ссылку для дальнейшей работы с ней
  const [msg, setMsg] = useState("");

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
      source={{uri: 'http://192.168.0.41:5173/'}}
      onMessage={handleMessage}
      style={{ flex: 1}}
      />
      </View>
      

    </SafeAreaView>
  );
}
