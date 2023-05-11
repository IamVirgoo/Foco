import { AppState, useAppSelector } from "../../stores/appStore";
import { Link } from "react-router-dom";

export default function AppIndex() {

    const USERNAME = useAppSelector((state : AppState) => state.user.username)
    const AUTH = useAppSelector((state : AppState) => state.user.authenticate)

    if (AUTH) return <>
        <p>{USERNAME}</p>
        <p>{String(AUTH)}</p>
    </>
    else return <div className={'warning'}>
        <p className={'warning--text'}>You not authenticated, please <Link className={'warning--link'} to={'/login'}>sign in</Link></p>
    </div>
}