import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { SiteContext } from '../contexts/siteContext';
import { AuthContext } from '../contexts/authContext'; 
import enabledAdminRouter from './routers/enabledAdminRouter';
import enabledClientRouter from './routers/enabledClientRouter';
import disabledAdminRouter from './routers/disabledAdminRouter';
import disabledClientRouter from './routers/disabledClientRouter';

const Router = () => {
    const { enableSite } = useContext(SiteContext)
    const { authUser } = useContext(AuthContext)
    const isAdmin = localStorage.getItem('authUser') || authUser

    return (
        <RouterProvider
            router={
                enableSite.enabled ?
                    isAdmin ?
                        enabledAdminRouter
                    :
                        enabledClientRouter
                : isAdmin ?
                    disabledAdminRouter
                :
                    disabledClientRouter
            }
        />
    )
};

export default Router;
