import { RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import { AuthContext } from '../contexts/authContext';
import adminRouter from './routers/adminRouter';
import clientRouter from './routers/clientRouter';
import disabledSiteRouter from './routers/disabledSiteRouter';

const Router = () => {
    const { enableSite } = useContext(SiteContext)
    const { authUser } = useContext(AuthContext)

    return ( 
        <RouterProvider
            router={
                !enableSite.enabled ?
                    disabledSiteRouter
                : authUser ?
                    adminRouter
                :
                    clientRouter
            }
        />
    )
};

export default Router;
