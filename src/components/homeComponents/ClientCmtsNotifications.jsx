import {
    useEffect,
    useState,
    useContext
} from 'react';
import { CommentsContext } from '../../contexts/commentsContext';
import { RotatingLines } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const ClientCmtsNotifications = () => {
    const { comments, errorComments, loadingComments } = useContext(CommentsContext)
    const [ pendingComments, setPendingComments ] = useState(0)

    useEffect(() => {
        (comments.length && !errorComments && !loadingComments) ?
            setPendingComments(comments.reduce((acc, cmt) => acc += !cmt.approved, 0))
        :
            null
    }, [])
        
    return (
        <>
            {
                (comments.length && !errorComments && !loadingComments) ?
                    <>
                    {
                        pendingComments ?
                            <Link
                                to={'/admin/consola/comentarios'}
                                className='absolute -top-[4.15rem] text-center mt-2 md:mt-0'
                            >
                                <div className='shadow-sm w-40 py-1 sm:py-1 bg-white border-2 border-white
                                rounded-lg transition-colors ease-in-out hover:border-white/90 hover:bg-white/90
                                focus:border-white/90 focus:bg-white/90 leading-4'>
                                    <span className='drop-shadow-sm text-zinc-900 tracking-widest md:tracking-wider
                                    text-[.785rem] md:text-sm'>
                                        {pendingComments} comentario/s pendientes
                                    </span>
                                </div>
                            </Link>
                        :
                            <div className='absolute -top-[4.15rem] text-center mt-2 md:mt-0'>
                                <div className='shadow-sm w-40 py-1 sm:py-1 bg-white border-2 border-white
                                rounded-lg transition-colors ease-in-out hover:border-white/90 hover:bg-white/90
                                focus:border-white/90 focus:bg-white/90 leading-4'>
                                    <span className='drop-shadow-sm text-zinc-900 tracking-widest md:tracking-wider
                                    text-[.785rem] md:text-sm'>
                                        Sin comentarios pendientes
                                    </span>
                                </div>
                            </div>
                    }
                    </>
                : !errorComments ?
                    <div className='absolute -top-12 ml-[3.85rem]'>
                        <div className='p-2 bg-teal-600/20 rounded-lg w-fit mx-auto'>
                            <RotatingLines
                                strokeColor='white'
                                strokeWidth='5'
                                animationDuration='0.75'
                                width='20'
                                visible={true}
                            />
                        </div>
                    </div>
                :
                    <div className='absolute -top-[4.15rem] text-center mt-2 md:mt-0'>
                        <div className='shadow-sm w-40 py-1 sm:py-1 bg-white border-2 border-white
                        rounded-lg transition-colors ease-in-out hover:border-white/90 hover:bg-white/90
                        focus:border-white/90 focus:bg-white/90 leading-4'>
                            <span className='drop-shadow-sm text-zinc-900 tracking-widest md:tracking-wider
                            text-[.785rem] md:text-sm'>
                                {errorComments}
                            </span>
                        </div>
                    </div>  
            }
        </>
    )
};

export default ClientCmtsNotifications;
        