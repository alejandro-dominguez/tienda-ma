import { useNavigate } from 'react-router-dom';
import CustomImg from '../customImg/CustomImg';

const FeaturedBlogCard = ({ blogData }) => {
    const navigate = useNavigate()

    const storeAndNavigate = () => {
        localStorage.setItem('featuredBlogData', JSON.stringify(blogData))
        navigate((`/blogs/destacado/${blogData.id}`))
    }

    return (
        <div
            className='bg-white px-6 py-5 shadow-sm drop-shadow-sm cursor-pointer'
            onClick={() => storeAndNavigate()}
        >
            <div className='w-full drop-shadow-sm'>
                <CustomImg
                    src={blogData.img1}
                    alt='imagen de portada del blog'
                    contain={false}
                    center={false}
                    aspectVideo={true}
                />
            </div>
            <h3 className='font-black font-Raleway tracking-wide text-2xl mt-4'>
                {blogData.title}
            </h3>
            <p className='leading-[1.4rem] mt-1 text-[.9rem] md:text-base'>
                {blogData.drop}
            </p>
            <button
                type='button'
                className='mt-3 px-4 py-[.3rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                onClick={() => storeAndNavigate()}
            >
                <span className='tracking-wider text-[.83rem] font-Raleway'>
                    Leer artículo
                </span>
            </button>
        </div>
    )
};

export default FeaturedBlogCard;
