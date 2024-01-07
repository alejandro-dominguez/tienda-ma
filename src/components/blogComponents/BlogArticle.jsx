import { useNavigate } from 'react-router-dom';

const BlogArticle = ({ blog }) => {
    const navigate = useNavigate()

    return (
        <div className='w-full px-4 md:px-20 lg:px-32 grid place-items-center pt-28 pb-14'>
            <h1 className='font-Raleway font-black text-zinc-700/95 text-xl tracking-wider'>
                {blog.title}
            </h1>
            <h2 className='font-Raleway text-[1.05rem] tracking-wide mt-[.21rem]'>
                {blog.subtitle}
            </h2>
            <div className='w-full drop-shadow-sm mt-4'>
                <img
                    src={blog.img1}
                    alt='imagen de portada de blog'
                    className='block w-full object-cover aspect-video md:aspect-[21/5] object-center drop-shadow-sm'
                />
            </div>
            <h3 className='text-lg font-Raleway font-bold mt-4 leading-6 tracking-wide md:w-[80%] lg:w-[70%] md:justify-self-start'>
                {blog.drop}
            </h3>
            <p className='mt-1 text-[1.025rem] tracking-wide'>
                {blog.text1}
            </p>
            <div className='w-full drop-shadow-sm mt-5'>
                <img
                    src={blog.img2}
                    alt='imagen de mitad de blog'
                    className='block w-full object-cover aspect-video md:aspect-[21/5] object-center drop-shadow-sm'
                    />
            </div>
            <p className='mt-4 text-[1.025rem] tracking-wide'>
                {blog.text2}
            </p>
            <button
                type='button'
                className='w-fit mr-auto mt-4 px-[.8rem] py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
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
