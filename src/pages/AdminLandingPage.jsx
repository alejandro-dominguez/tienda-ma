import {
    useContext,
    useState
} from 'react';
import { AuthContext } from '../contexts/authContext';
import AdminErrorPage from '../pages/AdminErrorPage';
import AdminMenu from '../components/adminComponents/AdminMenu';

const AdminLandingPage = () => {
    const { authUser } = useContext(AuthContext)
    const [ adminMenuData, ] = useState([
        {
            'name': 'Promociones',
            'url': 'promociones'
        },
        {
            'name': 'Productos',
            'url': 'productos'
        },
        {
            'name': 'Blogs',
            'url': 'blogs'
        },
        {
            'name': 'Formas de pago',
            'url': 'formasDePago'
        },
        {
            'name': 'Órdenes de compra',
            'url': 'ordenes'
        },
        {
            'name': 'Mensajes de contacto',
            'url': 'mensajesContacto'
        },
    ])

    return (
        <>
        {
            authUser ?
                <main className='w-full grid place-items-start py-28 min-h-[100svh]'>
                    <h1 className='font-bold text-center leading-8 px-4 font-Raleway text-2xl md:text-3xl
                    drop-shadow-sm mt-2 justify-self-center'>
                        Consola de Administrador
                    </h1>
                    <AdminMenu adminMenuData={adminMenuData}/>
                </main>
            :
                <AdminErrorPage />
        }
        </>
    )
};

export default AdminLandingPage;
