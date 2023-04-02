import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from "react-router-dom";
import { Router } from "./router";

import './global.sass'
import './styles/index.sass'

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

root.render(<App />);