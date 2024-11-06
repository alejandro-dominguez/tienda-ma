import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { useContext } from 'react';
import { SiteContext } from './contexts/siteContext';
import { AuthContext } from './contexts/authContext'; 
import Layout from './routes/Layout';
import EnabledAdminRouter from './routes/EnabledAdminRouter';
import EnabledClientRouter from './routes/EnabledClientRouter';
import DisabledAdminRouter from './routes/DisabledAdminRouter';
import DisabledClientRouter from './routes/DisabledClientRouter';

const App = () => {
    const { enableSite } = useContext(SiteContext)
    const { authUser } = useContext(AuthContext)
    const isAdmin = localStorage.getItem('authUser') || authUser

    return (
        <BrowserRouter>
            {
                enableSite.enabled ?
                    isAdmin ?
                        <EnabledAdminRouter />
                    :
                        <EnabledClientRouter />
                : isAdmin ?
                    <DisabledAdminRouter />
                :
                    <DisabledClientRouter />
            }
        </BrowserRouter>
    )
};

export default App;
