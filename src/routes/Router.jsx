import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ItemDetailContainer, ItemListContainer, CartContainer } from '../containers/';
import { HomePage, ErrorPage } from '../pages/';
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
                element: <ItemListContainer />,
            },
            {
                path: '/detalle/:id',
                element: <ItemDetailContainer />,
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
