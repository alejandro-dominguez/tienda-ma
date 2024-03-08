import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import HomePage from '../../pages/HomePage';
import AboutUsPage from '../../pages/AboutUsPage';
import ErrorPage from '../../pages/ErrorPage';
import AdminErrorPage from '../../pages/AdminErrorPage';
import AdminPage from '../../pages/AdminPage';
import TermsAndConditionsPage from '../../pages/TermsAndConditionsPage';
import RefoundsPage from '../../pages/RefundsPage';
import AdminLandingPage from '../../pages/AdminLandingPage';
import ItemCategoriesContainer from '../../containers/ItemCategoriesContainer';
import CartContainer from '../../containers/CartContainer';
import BlogsContainer from '../../containers/BlogsContainer';
import ItemDetailContainer from '../../containers/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer';
import BrandItemListContainer from '../../containers/BrandItemListContainer';
import SubcategoriesItemListContainer from '../../containers/SubcategoriesItemListContainer';
import ProductLineItemListContainer from '../../containers/ProductLineItemListContainer';
import BlogArticleContainer from '../../containers/BlogArticleContainer';
import SizesGuide from '../../pages/SizesGuide';
import PaymentsPage from '../../pages/PaymentsPage';
import WholesalersPage from '../../pages/WholesalersPage';
import AdminPromotionsPage from '../../pages/adminPages/AdminPromotionsPage';
import AdminProductsPage from '../../pages/adminPages/AdminProductsPage';
import AdminBlogsPage from '../../pages/adminPages/AdminBlogsPage';
import AdminPaymentsPage from '../../pages/adminPages/AdminPaymentsPage';
import AdminOrdersPage from '../../pages/adminPages/AdminOrdersPage';  
import AdminWholesalersPage from '../../pages/adminPages/AdminWholesalersPage';  
import AdminMessagesPage from '../../pages/adminPages/AdminMessagesPage';
import EditBlogPage from '../../pages/adminPages/adminDetailPages/EditBlogPage';
import EditProductPage from '../../pages/adminPages/adminDetailPages/EditProductPage';
import AdminOrdersDetailPage from '../../pages/adminPages/adminDetailPages/AdminOrdersDetailPage';
import AdminWholesalersDetailPage from '../../pages/adminPages/adminDetailPages/AdminWholesalersDetailPage';
import AdminMessagesDetailPage from '../../pages/adminPages/adminDetailPages/AdminMessagesDetailPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
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
                path: '/admin',
                element: <AdminPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/terminos&condiciones',
                element: <TermsAndConditionsPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/devoluciones',
                element: <RefoundsPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/mayoristas',
                element: <WholesalersPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/admin/consola',
                element: <AdminLandingPage />,
                errorElement: <AdminErrorPage />,
            },
            {
                path: '/admin/consola/promociones',
                element: <AdminPromotionsPage />,
                errorElement: <AdminErrorPage />,
            },
            {
                path: '/admin/consola/productos',
                element: <AdminProductsPage />,
                errorElement: <AdminErrorPage />,
            },
            {
                path: '/admin/consola/blogs',
                element: <AdminBlogsPage />,
                errorElement: <AdminErrorPage />,
            },
            {
                path: '/admin/consola/blogs/editar/:id',
                element: <EditBlogPage />,
                errorElement: <AdminErrorPage />,
            },
            {
                path: '/admin/consola/productos/editar/:id',
                element: <EditProductPage />,
                errorElement: <AdminErrorPage />,
            },
            {
                path: '/admin/consola/formasDePago',
                element: <AdminPaymentsPage />,
                errorElement: <AdminErrorPage />,
            },
            {
                path: '/admin/consola/ordenes',
                element: <AdminOrdersPage />,
                errorElement: <AdminErrorPage />,
            },
            {
                path: '/admin/consola/ordenes/:id',
                element: <AdminOrdersDetailPage />,
                errorElement: <AdminErrorPage />,
            },
            {
                path: '/admin/consola/mensajesMayoristas',
                element: <AdminWholesalersPage />,
                errorElement: <AdminErrorPage />,
            },
            {
                path: '/admin/consola/mensajesMayoristas/:id',
                element: <AdminWholesalersDetailPage />,
                errorElement: <AdminErrorPage />,
            },
            {
                path: '/admin/consola/mensajesContacto',
                element: <AdminMessagesPage />,
                errorElement: <AdminErrorPage />,
            },
            {
                path: '/admin/consola/mensajesContacto/:id',
                element: <AdminMessagesDetailPage />,
                errorElement: <AdminErrorPage />,
            },
        ],
    },
]);

export default router;
