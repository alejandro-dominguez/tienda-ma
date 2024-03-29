import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import ShopContextProvider from './contexts/shopContext';
import AuthContextProvider from './contexts/authContext';
import SiteContextProvider from './contexts/siteContext';
import BlogContextProvider from './contexts/blogContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <SiteContextProvider>
        <AuthContextProvider>
            <ShopContextProvider>
                <BlogContextProvider>
                    <App />
                </BlogContextProvider>
            </ShopContextProvider>
        </AuthContextProvider>
    </SiteContextProvider>
);
