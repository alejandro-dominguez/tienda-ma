import { RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import router from './routers/router';
import adminRouter from './routers/adminRouter';

const Router = () => {
    const { enableSite } = useContext(SiteContext)

    return ( 
        <RouterProvider
            router={
                enableSite.enabled ?
                    router
                :
                    adminRouter 
            }
        />
    )
};

export default Router;
