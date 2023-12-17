import { Outlet, ScrollRestoration } from 'react-router-dom';
import { NavBar, Footer } from '../../components';
import { useState } from 'react';

const Root = () => {
    const [ navData, ] = useState([
        {
            'name': 'bebé',
            'url': 'categorias/bebe'
        },
        {
            'name': 'mamá',
            'url': 'categorias/mama'
        },
        {
            'name': 'adultos',
            'url': 'categorias/adultos'
        },
        {
            'name': 'accesorios',
            'url': 'categorias/accesorios'
        },
        {
            'name': 'nosotros',
            'url': 'nosotros'
        }
    ])

    return (
        <div className='relative min-h-screen w-full'>
            <NavBar navData={navData} />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    )
}

export default Root;
