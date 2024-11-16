import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import DisabledSite from '../../components/DisabledSite';
import ErrorPage from '../../pages/ErrorPage';
import AdminErrorPage from '../../pages/AdminErrorPage';
import AdminPage from '../../pages/AdminPage';
import AdminLandingPage from '../../pages/AdminLandingPage';
import AdminPromotionsPage from '../../pages/adminPages/AdminPromotionsPage';
import AdminCommentsPage from '../../pages/adminPages/AdminCommentsPage';
import AdminProductsPage from '../../pages/adminPages/AdminProductsPage';
import AdminBlogsPage from '../../pages/adminPages/AdminBlogsPage';
import AdminPaymentsPage from '../../pages/adminPages/AdminPaymentsPage';
import AdminOrdersPage from '../../pages/adminPages/AdminOrdersPage';  
import AdminWholesalersPage from '../../pages/adminPages/AdminWholesalersPage';  
import AdminMessagesPage from '../../pages/adminPages/AdminMessagesPage';
import EditProductPage from '../../pages/adminPages/adminDetailPages/EditProductPage';
import EditBlogPage from '../../pages/adminPages/adminDetailPages/EditBlogPage';
import EditPaymentPage from '../../pages/adminPages/adminDetailPages/EditPaymentPage';
import AdminOrdersDetailPage from '../../pages/adminPages/adminDetailPages/AdminOrdersDetailPage';
import AdminWholesalersDetailPage from '../../pages/adminPages/adminDetailPages/AdminWholesalersDetailPage';
import AdminMessagesDetailPage from '../../pages/adminPages/adminDetailPages/AdminMessagesDetailPage';
import ProtectedRoute from '../ProtectedRoute';

const disabledAdminRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <DisabledSite />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/admin',
                element: <AdminPage />,
                errorElement: <ErrorPage />,
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: '/admin/consola',
                        element: <AdminLandingPage />,
                    },
                    {
                        path: '/admin/consola/comentarios',
                        element: <AdminCommentsPage />,
                    },
                    {
                        path: '/admin/consola/promociones',
                        element: <AdminPromotionsPage />,
                    },
                    {
                        path: '/admin/consola/productos',
                        element: <AdminProductsPage />,
                    },
                    {
                        path: '/admin/consola/productos/editar/:id',
                        element: <EditProductPage />,
                    },
                    {
                        path: '/admin/consola/blogs',
                        element: <AdminBlogsPage />,
                    },
                    {
                        path: '/admin/consola/blogs/editar/:id',
                        element: <EditBlogPage />,
                    },
                    {
                        path: '/admin/consola/formasDePago',
                        element: <AdminPaymentsPage />,
                    },
                    {
                        path: '/admin/consola/formasDePago/editar/:id',
                        element: <EditPaymentPage />,
                    },
                    {
                        path: '/admin/consola/ordenes',
                        element: <AdminOrdersPage />,
                    },
                    {
                        path: '/admin/consola/ordenes/:id',
                        element: <AdminOrdersDetailPage />,
                    },
                    {
                        path: '/admin/consola/mensajesMayoristas',
                        element: <AdminWholesalersPage />,
                    },
                    {
                        path: '/admin/consola/mensajesMayoristas/:id',
                        element: <AdminWholesalersDetailPage />,
                    },
                    {
                        path: '/admin/consola/mensajesContacto',
                        element: <AdminMessagesPage />,
                    },
                    {
                        path: '/admin/consola/mensajesContacto/:id',
                        element: <AdminMessagesDetailPage />,
                    },
                ],
                errorElement: <AdminErrorPage />,
            },
        ],
    },
]);

export default disabledAdminRouter;
