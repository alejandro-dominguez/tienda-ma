import { useState } from 'react';
import AdminMenu from './adminComponents/AdminMenu';

const AdminConsole = () => {
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
    ])

    return (
        <main className='w-full grid place-items-start py-28 min-h-[100svh]'>
            <h1 className='font-bold text-center leading-8 font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm mt-2 justify-self-center'>
                Consola de Administrador
            </h1>
            <AdminMenu adminMenuData={adminMenuData}/>
        </main>
    )
}

export default AdminConsole;
