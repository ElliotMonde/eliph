import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AlertProvider } from './provider/AlertProvider.tsx'
import { DarkModeProvider } from './provider/DarkProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DarkModeProvider>
            <AlertProvider>
                <App />
            </AlertProvider>
        </DarkModeProvider>
    </React.StrictMode>,
)
