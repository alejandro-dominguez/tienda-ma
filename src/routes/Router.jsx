import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutUsPage from '../pages/AboutUsPage';
import ErrorPage from '../pages/ErrorPage';
import AdminPage from '../pages/AdminPage';
import AdminLandingPage from '../pages/AdminLandingPage';
import ItemCategoriesContainer from '../containers/ItemCategoriesContainer';
import CartContainer from '../containers/CartContainer';
import BlogsContainer from '../containers/BlogsContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer';
import BlogArticleContainer from '../containers/BlogArticleContainer';
import Root from './root/Root';
import SizesGuide from '../pages/SizesGuide';
import PaymentsPage from '../pages/PaymentsPage';
import AdminPromotionsPage from '../pages/adminPages/AdminPromotionsPage';
import AdminProductsPage from '../pages/adminPages/AdminProductsPage';
import AdminBlogsPage from '../pages/adminPages/AdminBlogsPage';
import AdminPaymentsPage from '../pages/adminPages/AdminPaymentsPage';
import AdminOrdersPage from '../pages/adminPages/AdminOrdersPage';
import EditBlogPage from '../pages/adminPages/adminEditPages/EditBlogPage';
import EditProductPage from '../pages/adminPages/adminEditPages/EditProductPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/categorias/:categoryId',
                element: <ItemCategoriesContainer />,
            },
            {
                path: '/categorias/:categoryId/:subcategoryId',
                element: <ItemListContainer />,
            },
            {
                path: '/categorias/:categoryId/:subcategoryId/detalle/:id',
                element: <ItemDetailContainer />,
            },
            {
                path: '/nosotros',
                element: <AboutUsPage />,
            },
            {
                path: '/blogs',
                element: <BlogsContainer />,
            },
            {
                path: '/blogs/:id',
                element: <BlogArticleContainer />,
            },
            {
                path: '/formasDePago',
                element: <PaymentsPage />,
            },
            {
                path: '/talles',
                element: <SizesGuide />,
            },
            {
                path: '/carrito',
                element: <CartContainer />,
            },
            {
                path: '/admin',
                element: <AdminPage />,
            },
            {
                path: '/admin/consola',
                element: <AdminLandingPage />,
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
                path: '/admin/consola/blogs',
                element: <AdminBlogsPage />,
            },
            {
                path: '/admin/consola/blogs/editar/:id',
                element: <EditBlogPage />,
            },
            {
                path: '/admin/consola/productos/editar/:id',
                element: <EditProductPage />,
            },
            {
                path: '/admin/consola/formasDePago',
                element: <AdminPaymentsPage />,
            },
            {
                path: '/admin/consola/ordenes',
                element: <AdminOrdersPage />,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />
};

export default Router;
