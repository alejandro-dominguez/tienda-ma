import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import DisabledSite from '../../components/DisabledSite';
import ErrorPage from '../../pages/ErrorPage';
import AdminPage from '../../pages/AdminPage';

const disabledClientRouter = createBrowserRouter([
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
            ],
        },
]);

export default disabledClientRouter;
