import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ShopContextProvider from './contexts/shopContext';
import AuthContextProvider from './contexts/authContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ShopContextProvider>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </ShopContextProvider>
    </React.StrictMode>
);
