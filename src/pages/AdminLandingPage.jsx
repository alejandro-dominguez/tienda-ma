import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import AdminErrorPage from '../pages/AdminErrorPage';
import AdminConsole from '../components/AdminConsole';

const AdminLandingPage = () => {
    const { authUser, signOut } = useContext(AuthContext)

    return (
        <AdminConsole/>
    )
};

export default AdminLandingPage;
