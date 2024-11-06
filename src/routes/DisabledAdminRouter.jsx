import {
    Route,
    Routes
} from 'react-router-dom';
import Layout from './Layout';
import DisabledSite from '../components/DisabledSite';
import ErrorPage from '../pages/ErrorPage';
import AdminErrorPage from '../pages/AdminErrorPage';
import AdminPage from '../pages/AdminPage';
import AdminLandingPage from '../pages/AdminLandingPage';
import AdminPromotionsPage from '../pages/adminPages/AdminPromotionsPage';
import AdminCommentsPage from '../pages/adminPages/AdminCommentsPage';
import AdminProductsPage from '../pages/adminPages/AdminProductsPage';
import AdminBlogsPage from '../pages/adminPages/AdminBlogsPage';
import AdminPaymentsPage from '../pages/adminPages/AdminPaymentsPage';
import AdminOrdersPage from '../pages/adminPages/AdminOrdersPage';  
import AdminWholesalersPage from '../pages/adminPages/AdminWholesalersPage';  
import AdminMessagesPage from '../pages/adminPages/AdminMessagesPage';
import EditProductPage from '../pages/adminPages/adminDetailPages/EditProductPage';
import EditBlogPage from '../pages/adminPages/adminDetailPages/EditBlogPage';
import EditPaymentPage from '../pages/adminPages/adminDetailPages/EditPaymentPage';
import AdminOrdersDetailPage from '../pages/adminPages/adminDetailPages/AdminOrdersDetailPage';
import AdminWholesalersDetailPage from '../pages/adminPages/adminDetailPages/AdminWholesalersDetailPage';
import AdminMessagesDetailPage from '../pages/adminPages/adminDetailPages/AdminMessagesDetailPage';

const DisabledAdminRouter = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Layout />}
            >
                <Route
                    index
                    element={<DisabledSite />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/admin'
                    element={<AdminPage />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path='/admin/consola/'
                    element={<AdminLandingPage />}
                    errorElement={<AdminErrorPage />}
                >
                    <Route
                        path='comentarios'
                        element={<AdminCommentsPage />}
                    />
                    <Route
                        path='promociones'
                        element={<AdminPromotionsPage />}
                    />
                    <Route
                        path='productos/'
                        element={<AdminProductsPage />}
                    >
                        <Route
                            path='editar/:id'
                            element={<EditProductPage />}
                        />
                    </Route>
                    <Route
                        path='blogs/'
                        element={<AdminBlogsPage />}
                    >
                        <Route
                            path='editar/:id'
                            element={<EditBlogPage />}
                        />
                    </Route>
                    <Route
                        path='formasDePago/'
                        element={<AdminPaymentsPage />}
                    >
                        <Route
                            path='editar/:id'
                            element={<EditPaymentPage />}
                        />
                    </Route>
                    <Route
                        path='ordenes/'
                        element={<AdminOrdersPage />}
                    >
                        <Route
                            path=':id'
                            element={<AdminOrdersDetailPage />}
                        />
                    </Route>
                    <Route
                        path='mensajesMayoristas/'
                        element={<AdminWholesalersPage />}
                    >
                        <Route
                            path=':id'
                            element={<AdminWholesalersDetailPage />}
                        />
                    </Route>
                    <Route
                        path='mensajesContacto/'
                        element={<AdminMessagesPage />}
                    >
                        <Route
                            path=':id'
                            element={<AdminMessagesDetailPage />}
                        />
                    </Route>
                </Route>
            </Route>
        </Routes>
    )
};

export default DisabledAdminRouter;
