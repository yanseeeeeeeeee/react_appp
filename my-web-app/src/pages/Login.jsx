import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; //преход между страницами

export default function Login() {
    const [email, setEmail] = useState(""); //переменная для хранения состояния
    const[password, setPassword] = useState("");
    const navigate = useNavigate(); //переменная для перехода между страницами

    //показываем на экране
    return (
        <div className="container" >

            <div className="card">
                <h2>Вход</h2>

                <input placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)} />

                <input placeholder="Пароль"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />

                <button 
                onClick={() => navigate("/home")}>
                    Войти
                </button>

                <p className="link"
                onClick={() => navigate("/register")} >
                    Нет аккаунта? Регистрация
                </p>
            </div>

        </div>
    )

}