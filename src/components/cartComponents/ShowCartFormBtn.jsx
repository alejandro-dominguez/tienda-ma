import cartCheck from '../../assets/cart-check.svg';

const ShowCartFormBtn = ({ setShowForm }) => {
    return (
        <button
            className='flex items-center justify-center justify-self-center px-4 py-2 gap-2 mt-4
            rounded-lg shadow-sm bg-zinc-900 text-white transition-colors ease-in-out
            hover:bg-zinc-700 focus:bg-zinc-700'
            type='button'
            onClick={() => setShowForm(true)}
        >
            <div className='w-[1.2rem]'>
                <img
                    src={cartCheck}
                    alt='carrito de compras tildado'
                />
            </div>
            <span className='font-Raleway text-[.9rem] tracking-wider font-bold'>
                Formulario de compra
            </span>
        </button>
    )
};

export default ShowCartFormBtn;
