import {
    useContext,
} from 'react';
import { RouterProvider } from 'react-router-dom';
import { SiteContext } from '../contexts/siteContext';
import clientRouter from './routers/clientRouter';
import disabledSiteRouter from './routers/disabledSiteRouter';

const Router = () => {
    const { enableSite } = useContext(SiteContext)

    return ( 
        <RouterProvider
            router={
                !enableSite.enabled ?
                    disabledSiteRouter
                :
                    clientRouter
            }
        />
    )
};

export default Router;
