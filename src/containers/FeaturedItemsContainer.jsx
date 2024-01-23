import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import ItemCard from '../components/ItemCard';
import FeaturedBlog from '../components/blogComponents/FeaturedBlog';
import ErrorPage from '../pages/ErrorPage';
import useGetFirebaseData from '../customHooks/useGetFirebaseData';
import useGetBlogs from '../customHooks/useGetBlogs';

const FeaturedItemsContainer = () => {
    const { categoryId, subcategoryId } = useParams()
    const [ data, error, loading ] = useGetFirebaseData(categoryId, subcategoryId)
    const [ blogs, errorBlogs, loadingBlogs ] = useGetBlogs()

    return (
        <section className='w-full grid place-items-center md:px-10 py-2'>
            {
                (data.length && blogs.length && !loading && !error && !loadingBlogs && !errorBlogs) ?
                    <div className='w-full px-4 py-8 justify-between items-start grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-10'>
                        {
                            blogs.filter(blog => {
                                return blog.featured === true
                            })
                            .map(blog => {
                                return (
                                    <FeaturedBlog
                                        blogData={blog}
                                        key={blog.id}
                                    />
                                )
                            })
                        }
                        <div className='flex flex-col gap-8 mt-7 md:mt-0'>
                            {
                                data.map((productData, i) => {
                                    return (
                                        <ItemCard
                                            key={i}
                                            product={productData}
                                            itemList={false}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                : (!error && !errorBlogs) ?
                    <div className='w-full grid place-items-center px-4 py-8 min-h-[39.2rem]'>
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
        </section>
    )
};

export default FeaturedItemsContainer;
