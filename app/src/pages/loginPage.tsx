import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from "../components/checkbox";

export default function LoginPage() {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return <main>
        <section className={'login'}>
            <h1 className={'login--title'}>Sign In</h1>
            <form className={'login--form'} onSubmit={() => {navigate('/app')}} method={'post'}>
                <input className={'login--form--username'} type="input" placeholder={'Username'} onChange={(e) => {
                    setUsername(e.target.value)
                }}/>
                <input className={'login--form--password'} type="password" placeholder={'Password'} onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
                <div className="login--form--check">
                    <Link to="/recovery" className="login--form--check--forgot">Forgot password?</Link>
                </div>
                <input type="submit" value="Confirm" className="login--form--submit"/>
                <p className="login--form--sign-up">
                    no register? <Link to='/registration'>sign up</Link>
                </p>
            </form>
        </section>
    </main>
}