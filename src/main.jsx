import ReactDOM from 'react-dom/client';
import './App.css';
import Router from './routes/Router';
import ShopContextProvider from './contexts/shopContext';
import AuthContextProvider from './contexts/authContext';
import SiteContextProvider from './contexts/siteContext';
import BlogContextProvider from './contexts/blogContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <SiteContextProvider>
        <AuthContextProvider>
            <ShopContextProvider>
                <BlogContextProvider>
                    <Router />
                </BlogContextProvider>
            </ShopContextProvider>
        </AuthContextProvider>
    </SiteContextProvider>
);
