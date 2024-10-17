import {
    useContext,
    useEffect,
    useState
} from 'react';
import { BlogContext } from '../contexts/blogContext';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import ErrorPage from '../pages/ErrorPage';
import BlogArticle from '../components/blogComponents/BlogArticle';

const BlogArticleContainer = () => {
    const { id } = useParams()
    const { blogs, errorBlogs, loadingBlogs } = useContext(BlogContext)
    const [ blog, setBlog ] = useState({})

    useEffect(() => {
        if (localStorage.blogData) {
            setBlog(JSON.parse(localStorage.blogData))
        }
        else if (blogs.length && !loadingBlogs && !errorBlogs) {
            const getBlogId = blogs.find(blog => blog.id === id)
            setBlog(getBlogId)
        }
    }, [])

    return (
        <main className='w-full grid place-items-start min-h-[100svh]'>
            {
                (JSON.stringify(blog) !== '{}' && !loadingBlogs && !errorBlogs) ?
                    <BlogArticle blog={blog} />
                : !errorBlogs ?
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
                    <ErrorPage />
            }
        </main>
    )
};

export default BlogArticleContainer;
