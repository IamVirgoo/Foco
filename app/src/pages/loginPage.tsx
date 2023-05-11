import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from "../components/checkbox";

export default function LoginPage() {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState<any>('')

    return <main>
        <section className={'login'}>
            <h1 className={'login--title'}>Sign In</h1>
            <form className={'login--form'}>
                <input className={'login--form--username'} type="input" placeholder={'Username'} onChange={(e) => {
                    setUsername(e.target.value)
                }}/>
                <input className={'login--form--password'} type="password" placeholder={'Password'} onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
                <div className="login--form--check">
                    <Link to="/recovery" className="login--form--check--forgot">Forgot password?</Link>
                </div>
                <input type="button" value="Confirm" className="login--form--submit" onClick={async (e) => {
                    const result = await fetch("http://localhost:80/auth/authenticate", {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "login": username,
                            "password": password,
                        }),
                        method: "POST",
                        redirect: "follow"
                    });
                    if (result.ok) {
                        document.location.href = "http://localhost:80/app";
                        setErrorMessage(result.status)
                    }
                    else {
                        setErrorMessage(result.status)
                    }
                }}/>
                <p className="login--form--sign-up">
                    no register? <Link to='/registration'>sign up</Link>
                </p>
            </form>
            <p>{errorMessage}</p>
        </section>
    </main>
}