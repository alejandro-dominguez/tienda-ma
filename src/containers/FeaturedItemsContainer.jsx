import {
    useState,
    useEffect,
    useContext
} from 'react';
import { BlogContext } from '../contexts/blogContext';
import { ProductsContext } from '../contexts/productsContext';
import { RotatingLines } from 'react-loader-spinner';
import FeaturedItemCard from '../components/FeaturedItemCard';
import FeaturedBlogCard from '../components/blogComponents/FeaturedBlogCard';
import ErrorPage from '../pages/ErrorPage';

const FeaturedItemsContainer = () => {
    const { prods, error, loading } = useContext(ProductsContext)
    const { blogs, errorBlogs, loadingBlogs } = useContext(BlogContext)
    const [ featuredBlogs, setFeaturedBlogs ] = useState([])
    const [ featuredProds, setFeaturedProds ] = useState([])

    useEffect(() => {
        if (blogs.length && !loadingBlogs && !errorBlogs) {
            const getFeaturedBlogs = blogs.filter(blog => blog.featured === true)
            setFeaturedBlogs(getFeaturedBlogs)
        }
    }, [blogs, errorBlogs, loadingBlogs])

    useEffect(() => {
        if (prods.length) {
            const filteredProducts = prods.filter(product => product.featured === true)
            setFeaturedProds(filteredProducts)
        }
    },  [prods, error, loading])

    return (
        <section className='w-full grid place-items-center md:px-10 py-2'>
            {
                (featuredProds.length && featuredBlogs.length && !loading && !error && !loadingBlogs && !errorBlogs) ?
                    <div className='w-full px-4 py-8 justify-between items-start grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-10'>
                        {
                            featuredBlogs.map(blog => {
                                return (
                                    <FeaturedBlogCard
                                        blogData={blog}
                                        key={blog.id}
                                    />
                                )
                            })
                        }
                        <div className='flex flex-col gap-8 mt-7 md:mt-0'>
                            {
                                featuredProds.map((productData, i) => {
                                    return (
                                        <FeaturedItemCard
                                            key={i}
                                            product={productData}
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
