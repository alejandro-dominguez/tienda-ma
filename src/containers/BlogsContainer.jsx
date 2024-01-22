import { RotatingLines } from 'react-loader-spinner';
import ErrorPage from '../pages/ErrorPage';
import BlogCard from '../components/BlogCard';
import useGetBlogs from '../customHooks/useGetBlogs';

const BlogsContainer = () => {
    const [ blogs, errorBlogs, loadingBlogs ] = useGetBlogs()

    return (
        <main className='w-full min-h-[100svh]'>
            <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-3 pt-10 mt-20 w-fit mx-auto'>
                Blogs
            </h1>
            {
                (blogs.length && !loadingBlogs && !errorBlogs) ?
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20 p-4 gap-6'>
                        {
                            blogs.map(blog => {
                                return (
                                    <BlogCard
                                        blog={blog}
                                        key={blog.id}
                                    />
                            )})
                        }
                    </div>
                : !errorBlogs ?
                    <div className='w-full grid place-items-center mt-2 py-4 shadow-sm min-h-[24rem]'>
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

export default BlogsContainer;
