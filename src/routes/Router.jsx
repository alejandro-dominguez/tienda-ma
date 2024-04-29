import {
    useContext,
    useEffect,
    useState
} from 'react';
import { RouterProvider } from 'react-router-dom';
import { SiteContext } from '../contexts/siteContext';
import { AuthContext } from '../contexts/authContext';
import adminRouter from './routers/adminRouter';
import clientRouter from './routers/clientRouter';
import disabledSiteRouter from './routers/disabledSiteRouter';

const Router = () => {
    const { enableSite } = useContext(SiteContext)
    const { authUser } = useContext(AuthContext)
    const [ authorizedUser, setAuthorizedUser ] = useState(null)

    useEffect(() => {
        if (localStorage.authUser) {
            setAuthorizedUser(JSON.parse(localStorage.authUser))
        } else if (authUser !== null) {
            setAuthorizedUser(authUser)
        }
    }, [])

    return ( 
        <RouterProvider
            router={
                !enableSite.enabled ?
                    disabledSiteRouter
                : authorizedUser !== null && authUser ?
                    adminRouter
                :
                    clientRouter
            }
        />
    )
};

export default Router;
