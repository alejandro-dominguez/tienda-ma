import {
    Navigate,
    Outlet
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

const ProtectedRoute = () => {
    const { authUser } = useContext(AuthContext)

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
