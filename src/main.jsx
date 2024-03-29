import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import ShopContextProvider from './contexts/shopContext';
import AuthContextProvider from './contexts/authContext';
import SiteContextProvider from './contexts/siteContext';
import BlogContextProvider from './contexts/blogContext';
import ContactMessageProvider from './contexts/contactMessageContext';
import WholesalerMessageProvider from './contexts/wholesalerMessageContext';
import OrderProvider from './contexts/orderContext';
import PromoProvider from './contexts/promoContext';
import PaymentProvider from './contexts/paymentContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <SiteContextProvider>
        <AuthContextProvider>
            <ShopContextProvider>
                <BlogContextProvider>
                    <ContactMessageProvider>
                        <WholesalerMessageProvider>
                            <OrderProvider>
                                <PromoProvider>
                                    <PaymentProvider>
                                        <App />
                                    </PaymentProvider>
                                </PromoProvider>
                            </OrderProvider>
                        </WholesalerMessageProvider>
                    </ContactMessageProvider>
                </BlogContextProvider>
            </ShopContextProvider>
        </AuthContextProvider>
    </SiteContextProvider>
);
