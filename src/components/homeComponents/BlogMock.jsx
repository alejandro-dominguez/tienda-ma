import blogMockImg from '../../assets/blog-mock.jpeg';

const BlogMock = () => {
    return (
        <div className='bg-white/70 py-8 px-4 md:px-8'>
            <div className='w-full drop-shadow-sm'>
                <img
                    src={blogMockImg}   
                    alt='madre junto a bebé'
                    className='block w-full object-cover aspect-video object-center drop-shadow-sm'
                />
            </div>
            <h3 className='font-black font-Raleway tracking-wide text-2xl mt-4'>
                Título del Artículo
            </h3>
            <p className='leading-[1.4rem] mt-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad, autem velit maxime esse, 
                quaerat nemo totam cupiditate eum, error minus explicabo dolorem atque ex aliquid eius sed 
                amet facilis inventore reprehenderit. Saepe totam atque, alias voluptate ea odit necessitatibus 
                rerum aspernatur, culpa perferendis eius nesciunt iure inventore quas illum...
            </p>
            <button
                type='button'
                className='mt-3 px-4 py-[.3rem] bg-zinc-900 text-white rounded-lg shadow-sm transition-colors
                ease-in-out duration-200 hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer'
                onClick={() => (null)}
            >
                <span className='drop-shadow tracking-wider text-[.83rem] font-Raleway'>
                    Leer artículo
                </span>
            </button>
        </div>
    )
};

export default BlogMock;
