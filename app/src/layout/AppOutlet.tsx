import { Outlet } from "react-router-dom";
import { AppState, useAppSelector } from "../stores/appStore";

import Sidebar from "../components/sidebar";

export default function AppOutlet() {
    const AUTH = useAppSelector((state : AppState) => state.user.authenticate)

    return <>
        { AUTH
            ? <Sidebar/>
            : <Sidebar/>
        }
        <Outlet/>
    </>
}