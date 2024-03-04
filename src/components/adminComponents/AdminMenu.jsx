import { useContext } from 'react';
import { SiteContext } from '../../contexts/siteContext';
import { useState } from 'react';
import {
    Toaster,
    toast
} from 'sonner';
import {
    doc,
    updateDoc
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import AdminMenuItem from './adminItems/AdminMenuItem';


const AdminMenu = ({ adminMenuData }) => {
    const { enableSite } = useContext(SiteContext)
    const [ errorAdmin, setErrorAdmin ] = useState('')

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
            {
                enableSite.enabled ?
                    <button
                        className='mx-auto my-[1.1rem] md:my-7 py-2 px-3 grid place-items-center bg-red-500 rounded-lg
                        w-44 justify-self-center'
                        onClick={() => disableMainSite()}
                    >
                        <span className='text-white font-bold text-sm tracking-wider drop-shadow text-center'>
                            Detener sitio
                        </span>
                    </button>
                :
                    <button
                        className='mx-auto my-[1.1rem] md:my-7 py-2 px-3 grid place-items-center bg-green-600 rounded-lg
                        w-44 justify-self-center'
                        onClick={() => enableMainSite()}
                    >
                        <span className='text-white font-bold text-sm tracking-wider drop-shadow text-center'>
                            Habilitar sitio
                        </span>
                    </button>
            }
            <Toaster
                richColors
                toastOptions={{
                    className: 'text-center',
                }}
                className='absolute'
            />
        </div>
    )
};

export default AdminMenu;
