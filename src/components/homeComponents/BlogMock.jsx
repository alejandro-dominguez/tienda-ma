import blogMockImg from '../../assets/blog-mock.jpeg';

const BlogMock = () => {
    return (
        <div className='bg-white/70 py-5 md:px-8 cursor-pointer'>
            <div className='w-full'>
                <img
                    src={blogMockImg}
                    alt='madre junto a bebé'
                    className='block w-full object-cover aspect-video object-center drop-shadow-sm'
                />
            </div>
            <h3 className='font-black font-Raleway tracking-wide text-2xl mt-3'>
                Título del Artículo
            </h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad, autem velit maxime esse, quaerat nemo totam cupiditate eum, error minus explicabo dolorem atque ex aliquid eius sed amet facilis inventore reprehenderit. Saepe totam atque, alias voluptate ea odit necessitatibus rerum aspernatur, culpa perferendis eius nesciunt iure inventore quas illum...
        </div>
    )
};

export default BlogMock;
