import { useNavigate } from "react-router-dom";

const FeaturedBlog = ({ blogData }) => {
    const navigate = useNavigate()

    return (
        <div className='bg-white/70 p-6'>
            <div className='w-full drop-shadow-sm'>
                <img
                    src={blogData.img1}
                    alt='imagen de portada del blog'
                    className='block w-full object-cover aspect-video object-center drop-shadow-sm'
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
                ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer'
                onClick={() => navigate((`/blogs/${blogData.id}`))}
            >
                <span className='tracking-wider text-[.83rem] font-Raleway'>
                    Leer artículo
                </span>
            </button>
        </div>
    )
};

export default FeaturedBlog;