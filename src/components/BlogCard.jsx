import { useNavigate } from 'react-router-dom';
import shortenText from '../utilities/shortenText';

const BlogCard = ({ blog }) => {
    const navigate = useNavigate()
    
    return (
        <div className='p-6 bg-white drop-shadow-sm shadow-sm'>
            <div className='w-full drop-shadow-sm'>
                <img
                    src={blog.img1}
                    alt='imagen de portada del blog'
                    className='block w-full object-cover aspect-video object-center drop-shadow-sm'
                />
            </div>
            <h3 className='font-black font-Raleway tracking-wide text-lg mt-2'>
                {blog.title}
            </h3>
            <p className='leading-[1.4rem] text-[.9rem]'>
                {shortenText(blog.drop, 100)}
            </p>
            <button
                type='button'
                className='mt-[.6rem] px-[.8rem] py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer'
                onClick={() => navigate((`/blogs/${blog.id}`))}
            >
                <span className='tracking-wider text-[.8rem] font-Raleway'>
                    Leer artículo
                </span>
            </button>
        </div>
    )
};

export default BlogCard;
