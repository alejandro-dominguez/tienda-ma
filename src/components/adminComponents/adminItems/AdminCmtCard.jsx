import {
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore';
import { db } from '../../../firebase/config';

const AdminCmtCard = ({
    setActiveToast,
    setErrorToast,
    comment
}) => {
    const approveComment = async (id) => {
        try {
            const docRef = doc(db, 'comments', id)
            await updateDoc(docRef,
                {
                    approved: true
                }
            )
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }

    const deleteComment = async (id) => {
        try {
            const docRef = doc(db, 'comments', id)
            await deleteDoc(docRef)
            if (localStorage.commentsData) {
                localStorage.removeItem('commentsData')
            }
            setActiveToast(true)
        } catch (error) {
            setActiveToast(true)
            setErrorToast(error.message)
        }
    }

    return (
        <div className='flex flex-col gap-2 items-start bg-white w-full drop-shadow-sm p-5 rounded-sm'>
            <h3>
                {
                    comment.sender === '' ?
                        'Anónimo:'
                    :
                        `${comment.sender}:`
                }
            </h3>
            <p className='-mt-2 mb-2'>
                {comment.message}
            </p>
            <div className='flex flex-col gap-2'>
                <button
                    type='button'
                    className='w-fit px-4 py-2 bg-zinc-900 text-white rounded-lg shadow-sm mt-2 text-sm
                    transition-colors ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'
                    onClick={() => approveComment(comment.id)}
                >
                    <span className='tracking-wider text-[.85rem] font-Raleway'>
                        Aprobar mensaje
                    </span>
                </button>
                <button
                    type='button'
                    className='w-fit px-4 py-2 bg-zinc-900 text-white rounded-lg shadow-sm mt-2 text-sm
                    transition-colors ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'
                    onClick={() => deleteComment(comment.id)}
                >
                    <span className='tracking-wider text-[.85rem] font-Raleway'>
                        Eliminar mensaje
                    </span>
                </button>
            </div>
        </div>
    )
};

export default AdminCmtCard;
