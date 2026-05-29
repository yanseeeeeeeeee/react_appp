import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useEffect } from 'react';

import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from './firebase';

export default function App() {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {

    //проверка пользователя в приложении для его дальнейшей работы
    const tutu = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
    });

    return () => tutu();

  }, []);

  if (loading) return null;

  return (
    <Routes>
      <Route path="/" element={!user ? <Login/> : <Home/>}/>
      <Route path="/register" element={!user ? <Register/> : <Home/>}/>
      <Route path="/home" element={user ? <Home/> : <Login/>}/>
    </Routes>
  )
}
