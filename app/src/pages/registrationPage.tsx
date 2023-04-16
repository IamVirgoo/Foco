import { Link } from "react-router-dom";

export default function RegistrationPage() {
    return <main>
        <section className={'registration'}>
            <h1 className="registration--title">SignUp</h1>
            <form className="registration--form" method="post">
                <input className={'registration--form--username'} type="input" placeholder="Username"/>
                <input className={'registration--form--email'} type="email" placeholder="Email"/>
                <input className={'registration--form--password'} type="password" placeholder="Password"/>
                <input className={'registration--form--password'} type="password" placeholder="Confirm password"/>
                <input className={'registration--form--submit'} type="submit" value="Confirm"/>
                <p className="login--form--sign-up">
                    have account? <Link to='/login'>sign in</Link>
                </p>
            </form>
        </section>
    </main>
}