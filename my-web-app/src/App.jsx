import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const sendApp = () => {
    window.ReactNativeWebView.postMessage(
      //создания объекта json которые мы отправляем, (строка)
      JSON.stringify({
        type:"test",
        message:"привет с сайта"
      }) 
    )
  }

  return (
    <div>
      <h1>Web app</h1>
      <button onClick={sendApp}>
        Отпрвляем
      </button>
    </div>
  );
}
export default App;
