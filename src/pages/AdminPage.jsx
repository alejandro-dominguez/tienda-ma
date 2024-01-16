import {
    useState,
    useContext
} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

const AdminPage = () => {
    const [ user, setUser ] = useState({
        adminEmail: '',
        adminPassword: ''
    })
    const [ error, setError ] = useState(null)
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const registerInputs = ({target: {name, value}}) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        try {
            await signIn(user.adminEmail, user.adminPassword)
            navigate('/admin/inicio')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <main className='w-full flex flex-col gap-4 px-4 md:px-10 mt-28 min-h-[100svh]'>
            <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm mx-auto mt-2'>
                Administrador
            </h1>
            {   error ?
                    <p>
                        {error}
                    </p>
                :
                    null
            }
            <form
                className='py-8 px-2 sm:px-10 shadow-sm bg-white/70 flex flex-col mx-auto'
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
                            className='contact-input'
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
        </main>
    )
};

export default AdminPage;
