import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const naigate = useNavigate();

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

                <button onClick={() => naigate("/home")}>
                    Создать аккаунт
                </button>

                <p
                className="link"
                onClick={"/"}>
                    Уже есть аккаунт? Войти
                </p>

            </div>
        </div>
    );
}