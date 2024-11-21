import {
    updateDoc,
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

    return (
        <div className='bg-white w-full drop-shadow-sm px-4 py-3 relative rounded-sm mb-5'>
            <h3>
                {
                    comment.sender === '' ?
                        'Anónimo:'
                    :
                        `${comment.sender}:`
                }
            </h3>
            <p>
                {comment.message}
            </p>
            <button
                type='button'
                className='w-fit px-4 py-1 bg-zinc-900 text-white rounded-lg shadow-sm mt-2
                transition-colors ease-in-out hover:bg-zinc-700 focus:bg-zinc-700'
                onClick={() => approveComment(comment.id)}
            >
                <span className='tracking-wider text-[.85rem] font-Raleway'>
                    Aprobar mensaje
                </span>
            </button>
        </div>
    )
};

export default AdminCmtCard;
