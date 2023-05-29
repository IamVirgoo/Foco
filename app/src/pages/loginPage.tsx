import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {AppState, useAppDispatch, useAppSelector} from "../stores/appStore";
import { set_auth, set_user } from "../slices/user";
import {appendDevice, devicesReducer} from "../slices/devices";

export default function LoginPage() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const DEVICES = useAppSelector((state : AppState) => state.devices)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState<any>('')

    return <main>
        <section className={'login'}>
            <h1 className={'login--title'}>Sign In</h1>
            <form className={'login--form'}>
                <input className={'login--form--username'} type="input" placeholder={'Username'} onChange={(e) => {
                    setUsername(e.target.value);
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
                        const token : string = String(localStorage.getItem("access_token"))

                        let response = result.json()
                        console.log(response)
                        localStorage.setItem("access_token", await response.then(value => value.access_token))
                        console.log(localStorage.getItem("access_token"))

                        localStorage.setItem("authenticated", "true")
                        localStorage.setItem("username", username)

                        navigate('/app')

                        dispatch(set_user(username))
                        dispatch(set_auth(true))

                        setErrorMessage("")

                        /*const get = async () => {
                            const result = await fetch("localhost:80/data/0/get&PageNumber=0&PageSize=1", {
                                headers : {
                                    "Content-Type": "application/json"
                                },
                                method : 'GET',
                                redirect : "follow"
                            })
                            let response = result.json()
                            await response.then(
                                value => {
                                    value.map((element : any) => { console.log(element) })
                                }
                            )
                        }*/
                        /*await get_dev()*/
                        //get()
                    }
                    else {
                        localStorage.setItem("authenticated", "false")
                        localStorage.setItem("username", "")
                        localStorage.setItem("access_token", "")
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