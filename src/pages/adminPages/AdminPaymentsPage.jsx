import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

const AdminPaymentsPage = () => {
    const { authUser } = useContext(AuthContext)
    
    return (
        <div>AdminPaymentsPage</div>
    )
};

export default AdminPaymentsPage;
