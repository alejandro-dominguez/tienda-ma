import { useNavigate } from 'react-router-dom';

const BlogArticle = ({ blog }) => {
    const navigate = useNavigate()

    return (
        <div className='w-full px-4 md:px-20 lg:px-32 grid place-items-center pt-32 pb-14'>
            <div className='md:flex flex-row-reverse'>
                <div className='md:ml-8'>
                    <h1 className='font-Raleway font-black text-zinc-700/95 text-xl tracking-wider'>
                        {blog.title}
                    </h1>
                    <h2 className='font-Raleway text-[1.05rem] tracking-wide mt-2'>
                        {blog.subtitle}
                    </h2>
                </div>
                <div className='w-full sm:w-1/2 md:w-[45%] sm:mx-auto drop-shadow-sm mt-6 md:mt-0'>
                    <img
                        src={blog.img1}
                        alt='imagen de portada de blog'
                        className='block w-full object-cover aspect-square object-center drop-shadow-sm'
                    />
                </div>
            </div>
            <h3 className='text-lg font-Raleway font-bold mt-5 leading-6 tracking-wide md:w-[80%] lg:w-[70%] md:justify-self-start'>
                {blog.drop}
            </h3>
            <p className='mt-3 text-[1.025rem] tracking-wide'>
                {blog.text1}
            </p>
            <div className='w-full sm:w-1/2 md:w-[45%] drop-shadow-sm mt-7'>
                <img
                    src={blog.img2}
                    alt='imagen de mitad de blog'
                    className='block w-full object-cover aspect-square object-center drop-shadow-sm'
                    />
            </div>
            <p className='mt-6 text-[1.025rem] tracking-wide'>
                {blog.text2}
            </p>
            <button
                type='button'
                className='w-fit mr-auto mt-10 px-[.8rem] py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer'
                onClick={() => navigate('/blogs')}
            >
                <span className='tracking-wider text-[.8rem] font-Raleway'>
                    Volver a blogs
                </span>
            </button>
        </div>
    )
};

export default BlogArticle;
