import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import {
    HomePage,
    AboutUsPage,
    ErrorPage,
} from '../pages/';
import {
    ItemDetailContainer,
    ItemCategoriesContainer,
    CartContainer
} from '../containers/';
import ItemListContainer from '../containers/itemList/ItemListContainer';
import BlogsContainer from '../containers/blogsContainer/BlogsContainer';
import Root from './root/Root';

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
