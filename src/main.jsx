import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Router from './routes/Router';
import ShopContextProvider from './contexts/shopContext';
import AuthContextProvider from './contexts/authContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ShopContextProvider>
            <AuthContextProvider>
                <Router />
            </AuthContextProvider>
        </ShopContextProvider>
    </React.StrictMode>
);
