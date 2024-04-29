import {
    Toaster,
    toast
} from 'sonner';
import {
    doc,
    updateDoc
} from 'firebase/firestore';
import { useContext } from 'react';
import { SiteContext } from '../../contexts/siteContext';
import { useState } from 'react';
import { db } from '../../firebase/config';
import { AuthContext } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import AdminMenuItem from './adminItems/AdminMenuItem';

const AdminMenu = ({ adminMenuData }) => {
    const { enableSite } = useContext(SiteContext)
    const [ errorAdmin, setErrorAdmin ] = useState('')
    const { signUserOut } = useContext(AuthContext)
    const  navigate = useNavigate()

    const disableMainSite = async () => {
        try {
            const docRef = doc(db, 'site', import.meta.env.VITE_FIREBASE_SITE_ID)
            await updateDoc(docRef, {
                enabled: false
              }
            )
            toast.success(
                'Sitio principal detenido',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        } catch (error) {
            setErrorAdmin(error.message)
            toast.error(
                errorAdmin,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        }
    }

    const enableMainSite = async () => {
        try {
            const docRef = doc(db, 'site', import.meta.env.VITE_FIREBASE_SITE_ID)
            await updateDoc(docRef, {
                enabled: true
              }
            )
            toast.success(
                'Sitio principal habilitado',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        } catch (error) {
            setErrorAdmin(error.message)
            toast.error(
                errorAdmin,
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
        }
    }

    const signOut = () => {
        signUserOut()
        localStorage.removeItem('authUser')
        navigate('/')    
    }

    return (
        <div className='w-fit mx-auto relative'>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 mt-2 md:mt-0'>
                {
                    adminMenuData.map((data, i) => {
                        return (
                            <AdminMenuItem
                                key={i}
                                itemData={data}
                            />
                    )})
                }
            </div>
            <div className='flex flex-col w-fit mx-auto gap-6 my-[1.1rem] md:my-7'>
                {
                    enableSite.enabled ?
                        <button
                            className='py-2 px-3 grid place-items-center bg-red-500 rounded-lg w-44'
                            onClick={() => disableMainSite()}
                        >
                            <span className='text-white font-bold text-sm tracking-wider drop-shadow text-center'>
                                Detener sitio
                            </span>
                        </button>
                    :
                        <button
                            className='py-2 px-3 grid place-items-center bg-green-600 rounded-lg w-44'
                            onClick={() => enableMainSite()}
                        >
                            <span className='text-white font-bold text-sm tracking-wider drop-shadow text-center'>
                                Habilitar sitio
                            </span>
                        </button>
                }
                <button
                    className='py-2 px-3 grid place-items-center bg-red-500 rounded-lg w-44'
                    onClick={() => signOut()}
                >
                    <span className='text-white font-bold text-sm tracking-wider drop-shadow text-center'>
                        Admin. logout
                    </span>
                </button>
            </div>
            <div className='absolute'>
                <Toaster
                    richColors
                    toastOptions={{
                        className: 'text-center',
                    }}
                />
            </div>
        </div>
    )
};

export default AdminMenu;
