import {createRoot} from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from 'shared/redux/store.js'
import ReactRouterProvider from './Routes/ReactRouterProvider'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ReactRouterProvider />
            <ToastContainer/>
        </PersistGate>
    </Provider>
)
