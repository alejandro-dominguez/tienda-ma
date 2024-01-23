import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

const AdminOrdersPage = () => {
    const { authUser } = useContext(AuthContext)
    
    return (
        <div>AdminOrdersPage</div>
    )
};

export default AdminOrdersPage;
