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
import AboutClientPage from '../../pages/AboutClientPage';
import WholesalersPage from '../../pages/WholesalersPage';
import TermsAndConditionsPage from '../../pages/TermsAndConditionsPage';
import CartContainer from '../../containers/CartContainer';
import SizesGuide from '../../pages/SizesGuide';
import PaymentsPage from '../../pages/PaymentsPage'; 
import RefundsPage from '../../pages/RefundsPage'; 
import FeaturedBlogArticleContainer from '../../containers/FeaturedBlogArticleContainer';
import BlogArticleContainer from '../../containers/BlogArticleContainer';
import BlogsContainer from '../../containers/BlogsContainer';
import AboutUsPage from '../../pages/AboutUsPage';
import ProductLineItemListContainer from '../../containers/ProductLineItemListContainer';
import SubcategoriesItemListContainer from '../../containers/SubcategoriesItemListContainer';
import BrandItemListContainer from '../../containers/BrandItemListContainer';
import ItemDetailContainer from '../../containers/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer';
import ItemCategoriesContainer from '../../containers/ItemCategoriesContainer';

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
                path: '/categorias/:categoryId',
                element: <ItemCategoriesContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/categorias/:categoryId/:subcategoryId',
                element: <ItemListContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/categorias/:categoryId/:subcategoryId/detalle/:id',
                element: <ItemDetailContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/categorias/marcas/:brandId',
                element: <BrandItemListContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/categorias/subcategorias/:subcategoryId',
                element: <SubcategoriesItemListContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/categorias/lineasDeProducto/:productLineId',
                element: <ProductLineItemListContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/nosotros',
                element: <AboutUsPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/blogs',
                element: <BlogsContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/blogs/:id',
                element: <BlogArticleContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/blogs/destacado/:id',
                element: <FeaturedBlogArticleContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/formasDePago',
                element: <PaymentsPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/talles',
                element: <SizesGuide />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/carrito',
                element: <CartContainer />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/terminos&condiciones',
                element: <TermsAndConditionsPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/devoluciones',





                element: <RefundsPage />,
                errorElement: <ErrorPage />,





                
            },
            {
                path: '/mayoristas',
                element: <WholesalersPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/sobreUstedes',
                element: <AboutClientPage />,
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
