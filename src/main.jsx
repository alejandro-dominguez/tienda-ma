import React from 'react';
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
import CommentsProvider from './contexts/commentsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SiteContextProvider>
            <AuthContextProvider>
                <ShopContextProvider>
                    <BlogContextProvider>
                        <CommentsProvider>
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
                        </CommentsProvider>
                    </BlogContextProvider>
                </ShopContextProvider>
            </AuthContextProvider>
        </SiteContextProvider>
    </React.StrictMode>
);
