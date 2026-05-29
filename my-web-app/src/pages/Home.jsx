import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";


export default function Home() {

    const navigate = useNavigate();
    const logout = async () => {
      try {
        await signOut(auth);
        navigate("/");
      } catch (error) {
        alert(error.message);
      }
    };

    useEffect(() => {

        const user = localStorage.getItem("user");
        if(!user) {
            navigate("/");
        }
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <button onClick={logout}>Выйти</button>
        </div>
    )

}