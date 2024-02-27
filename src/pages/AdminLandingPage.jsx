import {
    useContext,
    useState
} from 'react';
import { AuthContext } from '../contexts/authContext';
import AdminErrorPage from '../pages/AdminErrorPage';
import AdminOrdersNotification from '../components/adminComponents/AdminOrdersNotifications';
import AdminMessagesNotification from '../components/adminComponents/AdminMessagesNotifications';
import AdminMenu from '../components/adminComponents/AdminMenu';
import AdminWholesalersNotifications from '../components/adminComponents/AdminWholesalersNotifications';

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
            'name': 'Mensajes mayoristas',
            'url': 'mensajesMayoristas'
        },
        {
            'name': 'Mensajes contacto',
            'url': 'mensajesContacto'
        },
    ])

    return (
        <>
        {
            authUser ?
                <main className='w-full grid place-items-start py-[7.5rem] min-h-[100svh]'>
                    <h1 className='font-bold text-center leading-8 px-4 font-Raleway text-2xl md:text-3xl
                    drop-shadow-sm mt-2 justify-self-center'>
                        Consola de Administrador
                    </h1>
                    <div className='flex flex-col gap-4 mx-auto mt-3 mb-0 md:my-2 min-h-[11rem]'>
                        <AdminOrdersNotification />
                        <AdminWholesalersNotifications />
                        <AdminMessagesNotification />
                    </div>
                    <AdminMenu adminMenuData={adminMenuData}/>
                </main>
            :
                <AdminErrorPage />
        }
        </>
    )
};

export default AdminLandingPage;
