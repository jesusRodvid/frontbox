import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import "./App.css";
import { AppRouter } from './routers/AppRouter'

export const ClientApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
