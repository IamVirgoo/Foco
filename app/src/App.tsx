import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from "react-router-dom";
import { Router } from "./router";

import './global.sass'
import './styles/index.sass'
import './styles/header.sass'
import './styles/checkbox.sass'
import './styles/dataCard.sass'
import './styles/deviceCard.sass'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
const App = () => {
    return <>
        <React.StrictMode>
            <RouterProvider router={Router}/>
        </React.StrictMode>
    </>
};

root.render(<App/>);