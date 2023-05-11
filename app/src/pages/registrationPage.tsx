import { Link } from "react-router-dom";
import { useState } from "react";
import { Register } from "../middlewares/authMiddleware";

export default function RegistrationPage() {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [errorText, setErrorText] = useState<any>();

    function confirmPasswordValidation(confirmPassword : any) {
        return confirmPassword === password
    }

    function emailValidation(email : any) {
        return /\S+@\S+\.\S+/.test(email);
    }

    return <main>
        <section className={'registration'}>
            <h1 className="registration--title">SignUp</h1>
            <form className="registration--form">
                <input className={'registration--form--username'} type="input" placeholder="Username" onChange={(e) => {
                    setUsername(e.target.value)
                }}/>
                <input className={'registration--form--email'} type="email" placeholder="Email" onChange={(e) => {
                    if (!emailValidation(e.target.value)) {
                        e.target.style.boxShadow = "0 0 20px rgb(225, 0, 0)"
                    }
                    else {
                        setEmail(e.target.value)
                        e.target.style.boxShadow = "0 0 20px rgb(0, 225, 0)"
                    }
                }}/>
                <input className={'registration--form--password'} type="password" placeholder="Password" onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
                <input className={'registration--form--password'} type="password" placeholder="Confirm password" onChange={(e) => {
                    if (!confirmPasswordValidation(e.target.value)) {
                        e.target.style.boxShadow = "0 0 20px rgb(225, 0, 0)"
                    }
                    else {
                        setConfirmPassword(e.target.value)
                        e.target.style.boxShadow = "0 0 20px rgb(0, 225, 0)"
                    }
                }}/>
                <input className={'registration--form--submit'} type="button" value="Confirm"
                       onClick={async (e) => {
                           const result = await fetch("http://localhost:80/auth/register", {
                               headers: {
                                   "Content-Type": "application/json"
                               },
                               body: JSON.stringify({
                                   "login": username,
                                   "password": password,
                                   "email": email
                               }),
                               method: "POST",
                               redirect: "follow"
                           });
                           if (result.ok) {
                               setErrorText("")
                               document.location.href = "http://localhost:80/";
                           } else {
                               setErrorText(result.status)
                           }
                       }}/>
                <p className="login--form--sign-up">
                    have account? <Link to='/login'>sign in</Link>
                </p>
            </form>
            <p>{errorText}</p>
        </section>
    </main>
}