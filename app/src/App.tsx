import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from "react-router-dom";
import { Router } from "./router";

import { Provider } from 'react-redux';
import { appStore } from './stores/appStore';

import './global.sass'
import './styles/index.sass'
import './styles/header.sass'
import './styles/checkbox.sass'
import './styles/dataCard.sass'
import './styles/deviceCard.sass'
import './styles/sidebar.sass'
import './styles/error.sass'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
const App = () => {
    return <>
        <React.StrictMode>
            <Provider store={appStore}>
                <RouterProvider router={Router} />
            </Provider>
        </React.StrictMode>
    </>
};

root.render(<App/>);