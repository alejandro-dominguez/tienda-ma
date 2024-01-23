import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

const AdminProductsPage = () => {
    const { authUser } = useContext(AuthContext)
    
    return (
        <div>AdminProductsPage</div>
    )
};

export default AdminProductsPage;
