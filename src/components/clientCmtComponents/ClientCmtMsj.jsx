import {
    useEffect,
    useState
} from 'react';
import {
    deleteDoc,
    doc,
} from 'firebase/firestore';
import { db } from '../../firebase/config';

const ClientCmtMsj = ({
    comment,
    setActiveToast,
    setErrorToast,
    setAdminToast
}) => {
    const [ isAdmin, setIsAdmin ] = useState(false)
    const {
        approved,
        sender,
        message,
        id
    } = comment
    
    useEffect(() => {
        const admin = JSON.parse(localStorage.getItem('authUser'))
        admin === true ? setIsAdmin(true) : setIsAdmin(false)
    }, [])

    const deleteComment = async (id) => {
        try {
            const docRef = doc(db, 'comments', id)
            await deleteDoc(docRef)
            if (localStorage.commentsData) {
                localStorage.removeItem('commentsData')
            }
            setActiveToast(true)
            setAdminToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }

    return (
        <>
        {
            approved ?
                <div className='bg-white w-full drop-shadow-sm px-4 py-3 relative rounded-sm'>
                    <h3>
                        {
                            sender === '' ?
                                'Anónimo:'
                            :
                                `${sender}:`
                        }
                    </h3>
                    <p>
                        {message}
                    </p>
                    {
                        isAdmin ?
                            <button
                                type='button'
                                className='px-4 py-1 bg-zinc-900 text-white rounded-lg shadow-sm mt-2
                                transition-colors ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'
                                onClick={() => deleteComment(id)}
                            >
                                <span className='tracking-wider text-[.85rem] font-Raleway'>
                                    Borrar mensaje
                                </span>
                            </button>
                        :
                            null
                    }
                </div>
            :
                null
        }
        </>
    )
};

export default ClientCmtMsj;
