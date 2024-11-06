import {
    Route,
    Routes
} from 'react-router-dom';
import Layout from './Layout';
import DisabledSite from '../components/DisabledSite';
import ErrorPage from '../pages/ErrorPage';
import AdminPage from '../pages/AdminPage';

const DisabledClientRouter = () => {
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
            </Route>
        </Routes>
    )
};

export default DisabledClientRouter;
