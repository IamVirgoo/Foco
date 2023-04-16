import { Link } from "react-router-dom";
import Checkbox from "../components/checkbox";

export default function LoginPage() {
    return <main>
        <section className={'login'}>
            <h1 className={'login--title'}>Sign In</h1>
            <form className={'login--form'}>
                <input className={'login--form--username'} type="input" placeholder={'Username'}/>
                <input className={'login--form--password'} type="password" placeholder={'Password'}/>
                <div className="login--form--check">
                    <Link to="/recovery" className="login--form--check--forgot">Forgot password?</Link>
                    <Checkbox/>
                </div>
                <input type="submit" value="Confirm" className="login--form--submit"/>
                <p className="login--form--sign-up">
                    no register? <Link to='/registration'>sign up</Link>
                </p>
            </form>
        </section>
    </main>
}