import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../../../contexts/authContext';
import useGetBlogArticle from '../../../customHooks/useGetBlogArticle';
import EditBlogForm from '../../../components/adminComponents/EditBlogForm';

const EditBlogPage = () => {
    const { id } = useParams()
    const [ blog, error, loading ] = useGetBlogArticle(id)
    const { authUser } = useContext(AuthContext)
    
    return (
        <main className='w-full flex flex-col gap-4 mt-28 mb-20 min-h-[100svh] px-4 md:px-10'>
            {
                (JSON.stringify(blog) !== '{}' && !loading && !error) ?
                    <EditBlogForm blog={blog} />
                : !error ?
                    <div className='w-full grid place-items-center mt-36 py-4 min-h-[24rem]'>
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
                    null
            }
        </main>
    )
}

export default EditBlogPage;
