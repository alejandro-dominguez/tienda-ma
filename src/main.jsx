import ReactDOM from 'react-dom/client';
import './App.css';
import Router from './routes/Router';
import ShopContextProvider from './contexts/shopContext';
import AuthContextProvider from './contexts/authContext';
import SiteContextProvider from './contexts/siteContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <SiteContextProvider>
        <ShopContextProvider>
            <AuthContextProvider>
                <Router />
            </AuthContextProvider>
        </ShopContextProvider>
    </SiteContextProvider>
);
