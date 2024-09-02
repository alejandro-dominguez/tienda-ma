import {
    useContext,
    useState,
    useEffect
} from 'react';
import {
    Toaster,
    toast
} from 'sonner';
import { CommentsContext } from '../../contexts/commentsContext';
import { RotatingLines } from 'react-loader-spinner';
import AdminCommentsContainer from '../../components/adminComponents/AdminCommentsContainer';
import AdminErrorPage from '../../pages/AdminErrorPage';

const AdminCommentsPage = () => {
    const { comments, errorComments, loadingComments } = useContext(CommentsContext)
    const [ activeToast, setActiveToast ] = useState(false)
    const [ errorToast, setErrorToast ] = useState('')
    const [ pendingCommentsData, setPendingCommentsData ] = useState([])
    const [ pendingComments, setPendingComments ] = useState(0)

    useEffect(() => {
        if (comments.length && !errorComments && !loadingComments) {
            const commentsData = comments.filter(cmt => !cmt.approved)
            setPendingCommentsData(commentsData)
            setPendingComments(comments.reduce((acc, cmt) => acc += !cmt.approved, 0))
        }
    }, [comments])

    if (activeToast && errorToast === '') {
        toast.success(
            'Mensaje editado',
            {
                duration: 2000,
                position: 'bottom-center',
            }
        )
        setTimeout(() => {
            setActiveToast(false)
        }, 2500)
    }

    if (activeToast && errorToast !== '') {
        toast.error(
            errorToast,
            {
                duration: 4000,
                position: 'bottom-center',
            }
        )
        setTimeout(() => {
            setActiveToast(false)
            setErrorToast('')
        }, 4500)
    }

    return (
        <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
            <h1 className='font-bold font-Raleway text-lg md:text-xl mt-5 drop-shadow-sm mx-auto'>
                Comentarios
            </h1>
            {
                (comments.length && !loadingComments && !errorComments && pendingComments > 0 && pendingCommentsData.length) ?
                    <div className='mx-auto flex flex-col'>
                        <AdminCommentsContainer
                            pendingCommentsData={pendingCommentsData}
                            setActiveToast={setActiveToast}
                            setErrorToast={setErrorToast}
                        />
                        <Toaster
                            visibleToasts={1}
                            richColors
                            toastOptions={{
                                className: 'text-center',
                            }}
                        />
                    </div>
                : (comments.length && !loadingComments && !errorComments && pendingComments === 0 && pendingCommentsData.length) ?
                    <div className='mx-auto flex flex-col'>
                        <p>
                            No tienes comentarios pendientes por aprobar
                        </p>
                    </div>
                : !errorComments ?
                    <div className='w-full grid place-items-center mt-2 py-4 min-h-[24rem]'>
                        <div className='p-5 bg-teal-600/20 rounded-lg'>
                            <RotatingLines
                                strokeColor='white'
                                strokeWidth='5'
                                animationDuration='0.75'
                                width='70'
                                visible={true}
                            />
                        </div>
                    </div>
                :
                    <AdminErrorPage />
            }
        </main>
    )
};

export default AdminCommentsPage;
