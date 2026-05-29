import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try{
             const userCreate = await createUserWithEmailAndPassword(auth, email,password);
             navigate("/home");
         } catch (error) {
            alert(error.message);
         }
    };

    return(
        <div className="container">
            <div className="card">
                <h2>Регистрация</h2>
                <input
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}/>

                <input 
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}/>

                <button onClick={handleRegister}>
                    Создать аккаунт
                </button>

                <p
                className="link"
                onClick={() => navigate("/")}>
                    Уже есть аккаунт? Войти
                </p>

            </div>
        </div>
    );
}