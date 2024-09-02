import {
    useContext, 
    useState,
    useEffect
} from 'react';
import { CommentsContext } from '../contexts/commentsContext';
import { RotatingLines } from 'react-loader-spinner';
import ErrorPage from '../pages/ErrorPage';
import ClientCmtMsj from '../components/clientCmtComponents/ClientCmtMsj';

const ClientCmtContainer = ({
    setActiveToast,
    setErrorToast,
    setAdminToast
}) => {
    const { comments, errorComments, loadingComments } = useContext(CommentsContext)
    const [ clientComments, setClientComments ] = useState({})

    useEffect(() => {
        if (localStorage.commentsData) {setClientComments(JSON.parse(localStorage.commentsData))}
    }, [])

    return (
        <main className='p-5 shadow-sm drop-shadow-sm'>
            {
                JSON.stringify(clientComments) !== '{}' ?
                    <div className='grid place-items-start gap-4'>
                        {
                            clientComments.map(comment => {
                                return <ClientCmtMsj
                                            comment={comment}
                                            setActiveToast={setActiveToast}
                                            setErrorToast={setErrorToast}
                                            setAdminToast={setAdminToast}
                                            key={comment.id}
                                        />
                            })
                        }
                    </div>
                : (comments.length && !errorComments && !loadingComments) ?
                    <div className='grid place-items-start gap-4'>
                        {
                            comments.map(comment => {
                                return <ClientCmtMsj
                                            comment={comment}
                                            setActiveToast={setActiveToast}
                                            setErrorToast={setErrorToast}
                                            setAdminToast={setAdminToast}
                                            key={comment.id}
                                        />
                            })
                        }
                    </div>
                : !errorComments ?
                    <div className='w-full grid place-items-center mt-24 py-4'>
                        <div className='p-5 bg-teal-600/[12.5%] rounded-lg'>
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
                    <ErrorPage />
            }
        </main>
    )
};

export default ClientCmtContainer;
