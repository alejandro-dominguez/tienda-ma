import { useNavigate } from 'react-router-dom';
import CustomImg from './customImg/CustomImg';
import shortenText from '../utilities/shortenText';

const BlogCard = ({ blog }) => {
    const navigate = useNavigate()
    const {
        id,
        title,
        drop,
        img1
    } = blog

    const storeAndNavigate = () => {
        localStorage.setItem('blogData', JSON.stringify(blog))
        navigate((`/blogs/${id}`))
    }

    return (
        <div
            className='p-6 bg-white drop-shadow-sm shadow-sm flex flex-col cursor-pointer'
            onClick={() => storeAndNavigate()}
        >
            <div className='w-full drop-shadow-sm'>
                <CustomImg
                    src={img1}
                    alt='imagen de portada del blog'
                    contain={false}
                    center={false}
                    aspectVideo={true}
                />
            </div>
            <h3 className='font-black font-Raleway tracking-wide text-lg mt-2'>
                {title}
            </h3>
            <p className='leading-[1.4rem] text-[.9rem] pt-2 pb-4'>
                {shortenText(drop, 80)}
            </p>
            <button
                type='button'
                className='mt-auto w-fit px-[.8rem] py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                onClick={() => storeAndNavigate()}
            >
                <span className='tracking-wider text-[.8rem] font-Raleway'>
                    Leer artículo
                </span>
            </button>
        </div>
    )
};

export default BlogCard;
