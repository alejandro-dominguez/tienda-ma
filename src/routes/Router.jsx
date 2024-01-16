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
                path: '/detalle/:id',
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
                path: '/admin/inicio',
                element: <AdminLandingPage />,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />
};

export default Router;
