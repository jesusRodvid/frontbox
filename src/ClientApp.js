import React from 'react'
import { Provider } from 'react-redux';

import { AppRouter } from './routers/AppRouter'

export const ClientApp = () => {
    return (
        <Provider>
            <AppRouter />
        </Provider>
    )
}
