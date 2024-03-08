import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import useGetBlogArticle from '../customHooks/useGetBlogArticle';
import ErrorPage from '../pages/ErrorPage';
import BlogArticle from '../components/blogComponents/BlogArticle';

const BlogArticleContainer = () => {
    const { id } = useParams()
    const [ blog, error, loading ] = useGetBlogArticle(id)

    return (
        <main className='w-full grid place-items-start min-h-[100svh]'>
            {
                (JSON.stringify(blog) !== '{}' && !loading && !error) ?
                        <BlogArticle blog={blog} />
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
                : <ErrorPage />
            }
        </main>
    )
};

export default BlogArticleContainer;
