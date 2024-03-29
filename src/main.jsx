import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import ShopContextProvider from './contexts/shopContext';
import AuthContextProvider from './contexts/authContext';
import SiteContextProvider from './contexts/siteContext';
import BlogContextProvider from './contexts/blogContext';
import ContactMessageProvider from './contexts/contactMessageContext';
import WholesalerMessageProvider from './contexts/wholesalerMessageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <SiteContextProvider>
        <AuthContextProvider>
            <ShopContextProvider>
                <BlogContextProvider>
                    <ContactMessageProvider>
                        <WholesalerMessageProvider>
                            <App />
                        </WholesalerMessageProvider>
                    </ContactMessageProvider>
                </BlogContextProvider>
            </ShopContextProvider>
        </AuthContextProvider>
    </SiteContextProvider>
);
