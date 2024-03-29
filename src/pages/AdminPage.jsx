import {
    useState,
    useContext
} from 'react';
import {
    Toaster,
    toast
} from 'sonner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

const AdminPage = () => {
    const [ user, setUser ] = useState({
        adminEmail: '',
        adminPassword: ''
    })
    const [ errorAuth, setErrorAuth ] = useState('')
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const registerInputs = ({ target: {name, value} }) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signIn(user.adminEmail, user.adminPassword)
            setUser({
                adminEmail: '',
                adminPassword: ''
            })
            localStorage.setItem('authUser', true)
            setErrorAuth('')
            navigate('/admin/consola')
        } catch (error) {
            setErrorAuth(errorAuth.message)
            toast.error(
                'cuenta o contraseña incorrectas',
                {
                    duration: 3000,
                    position: 'bottom-center',
                }
            )
            setTimeout(() => {
                setErrorAuth('')
            }, 3000)
        }
    }

    return (
        <main className='w-full flex flex-col gap-4 px-4 md:px-10 mt-28 min-h-[100svh]'>
            <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm mx-auto mt-2'>
                Administrador
            </h1>
            <form
                className='p-8 shadow-sm drop-shadow-sm bg-white flex flex-col mx-auto'
                autoComplete='off'
                onSubmit={handleSubmit}
            >
                <input autoComplete='false' name='hidden' type='text' className='hidden'/>
                        <label htmlFor='adminEmail' className='text-zinc-700'>
                            Email
                        </label>
                        <input
                            type='email' name='adminEmail' id='adminEmail' required placeholder='Email admin'
                            className='contact-input'
                            onChange={registerInputs}
                        />
                        <label htmlFor='adminPassword' className='text-zinc-700 mt-2'>
                            Contraseña
                        </label>
                        <input
                            type='password' name='adminPassword' id='adminPassword' required placeholder='**********'
                            className='contact-input' autoComplete='adminPassword'
                            onChange={registerInputs}
                        />
                <button
                    type='submit'
                    className='grid place-items-center py-2 w-full mt-5 bg-zinc-900 rounded-md transition-colors
                    ease-out hover:bg-zinc-950 focus:bg-zinc-950 shadow-sm'
                >
                    <span className='text-white tracking-wider font-bold text-[1.05rem]'>
                        Ingreso Admin
                    </span>
                </button>
            </form>
            <Toaster
                richColors
                toastOptions={{
                    className: 'text-center',
                }}
            />
        </main>
    )
};

export default AdminPage;
