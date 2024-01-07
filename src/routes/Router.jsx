import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import HomePage from '../pages/HomePage'
import AboutUsPage from '../pages/AboutUsPage'
import ErrorPage from '../pages/ErrorPage'
import ItemCategoriesContainer from '../containers/ItemCategoriesContainer';
import CartContainer from '../containers/CartContainer';
import BlogsContainer from '../containers/BlogsContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer';
import BlogArticleContainer from '../containers/BlogArticleContainer.jsx';
import Root from './root/Root';
import SizesGuide from '../pages/SizesGuide.jsx';
import PaymentsPage from '../pages/PaymentsPage.jsx';

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
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />
};

export default Router;
