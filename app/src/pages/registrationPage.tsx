import { Link } from "react-router-dom";
import { useState } from "react";
import { Register } from "../middlewares/dataMiddleware";

export default function RegistrationPage() {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [email, setEmail] = useState<string>();

    /**
     * @name confirmPasswordValidation
     * @description this function compares the specific values of confirmPassword with password value
     * @return boolean
     * */
    function confirmPasswordValidation(confirmPassword : any) {
        return confirmPassword === password
    }

    /**
     * @name emailValidation
     * @description function for email validation
     * @return boolean
     * */
    function emailValidation(email : any) {
        return /\S+@\S+\.\S+/.test(email);
    }

    return <main>
        <section className={'registration'}>
            <h1 className="registration--title">SignUp</h1>
            <form className="registration--form" method="post" onSubmit={() => {
                Register({
                    login: username,
                    password: password,
                    email: email
                })
            }}>
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
                <input className={'registration--form--submit'} type="submit" value="Confirm"/>
                <p className="login--form--sign-up">
                    have account? <Link to='/login'>sign in</Link>
                </p>
            </form>
        </section>
    </main>
}