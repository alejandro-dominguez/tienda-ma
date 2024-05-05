import {
    Navigate,
    Outlet
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

const ProtectedRoute = () => {
    const { authUser } = useContext(AuthContext)

    console.log(authUser);

    return (
        <>
        {
            localStorage.getItem('authUser') || authUser ?
                <Outlet />
            :
                <Navigate to='/' replace />
        }
        </>
    )
};

export default ProtectedRoute;
