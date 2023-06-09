import { createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import AppOutlet from "./layout/AppOutlet";
import AppIndex from "./pages/application/appIndex";
import Devices from "./pages/application/devices";
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage";
import ErrorPage from "./pages/errorPage";

export const Router = createBrowserRouter([
    {
        path : '/',
        index : true,
        element : <IndexPage/>,
        errorElement : <ErrorPage/>
    },
    {
        path : '/login',
        element : <LoginPage/>,
        errorElement : <ErrorPage/>
    },
    {
        path : '/registration',
        element : <RegistrationPage/>,
        errorElement : <ErrorPage/>
    },
    {
        path : '/app',
        element : <AppOutlet/>,
        children : [
            {
                index : true,
                element : <AppIndex/>
            },
            {
                path : 'devices',
                element : <Devices/>
            }
        ]
    },
    {
        path : '/error',
        element : <ErrorPage/>
    }
])