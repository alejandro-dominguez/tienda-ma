import { useNavigate } from 'react-router-dom';

const FeaturedBlogArticle = ({ blog }) => {
    const navigate = useNavigate()

    return (
        <div className='w-full px-4 md:px-20 lg:px-32 grid place-items-center pt-32 md:pt-36 pb-14'>
            <div className='md:flex md:flex-row-reverse'>
                <div className='md:w-2/3 md:mr-auto'>
                    <h1 className='font-Raleway font-black text-zinc-700/95 text-xl tracking-wider leading-7'>
                        {blog.title}
                    </h1>
                    <h2 className='font-Raleway text-[1.05rem] tracking-wide mt-2'>
                        {blog.subtitle}
                    </h2>
                    <p className='mt-2 md:block hidden text-[1.025rem]'>
                        {blog.text1}
                    </p>
                </div>
                <div className='w-full sm:w-1/2 md:w-2/5 lg:w-[29%] mx-auto  md:mr-4 sm:ml-0 drop-shadow-sm mt-6 md:mt-0'>
                    <img
                        
                        src={blog.img1}
                        alt='imagen de portada de blog'
                        className='block w-full object-cover aspect-square object-center drop-shadow-sm'
                    />
                </div>
            </div>
            {
                blog.drop !== '' ?
                    <h3 className='text-lg font-Raleway font-bold mt-5 leading-6 tracking-wide mr-auto'>
                        {blog.drop}
                    </h3>
                :
                    null
            }
            <p className='mt-2 md:hidden block text-[1.025rem]'>
                {blog.text1}
            </p>
            <p className='mt-3 text-[1.025rem] tracking-wide'>
                {blog.text2}
            </p>
            <div className='w-full sm:w-1/2 md:w-1/3 drop-shadow-sm mt-7 sm:mr-auto'>
                <img
                    
                    src={blog.img2}
                    alt='imagen de mitad de blog'
                    className='block w-full object-cover aspect-square object-center drop-shadow-sm'
                    />
            </div>
            {
                blog.text3 ?
                    <p className='mt-6 text-[1.025rem] tracking-wide mr-auto'>
                        {blog.text3}
                    </p>
                :
                    null
            }
            <button
                type='button'
                className='w-fit mr-auto mt-10 px-[.8rem] py-[.2rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700'
                onClick={() => navigate('/blogs')}
            >
                <span className='tracking-wider text-[.8rem] font-Raleway'>
                    Volver a blogs
                </span>
            </button>
        </div>
    )
};

export default FeaturedBlogArticle;
