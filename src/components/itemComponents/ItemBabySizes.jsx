const ItemBabySizes = ({ setSelectedSize }) => {
    return (
        <div className='flex flex-col mt-[.2rem]'>
            <span className='text-sm md:text-[.9rem] font-bold'>
                Talles:
            </span>
            <fieldset className='flex items-start gap-6 font-black text-sm'>
                <label htmlFor='M' className='grid place-items-center cursor-pointer drop-shadow'>
                    M
                    <input
                        type='radio' id='M' name='size' value='M'
                        onChange={e => setSelectedSize(e.target.value)}
                        className='cursor-pointer'
                    />
                </label>
                <label htmlFor='G' className='grid place-items-center cursor-pointer drop-shadow'>
                    G
                    <input
                        type='radio' id='G' name='size' value='G'
                        onChange={e => setSelectedSize(e.target.value)}
                        className='cursor-pointer'
                    />
                </label>
                <label htmlFor='XG' className='grid place-items-center cursor-pointer drop-shadow'>
                    XG
                    <input
                        type='radio' id='XG' name='size' value='XG'
                        onChange={e => setSelectedSize(e.target.value)}
                        className='cursor-pointer'
                    />
                </label>
                <label htmlFor='XXG' className='grid place-items-center cursor-pointer drop-shadow'>
                    XXG
                    <input
                        type='radio' id='XXG' name='size' value='XXG'
                        onChange={e => setSelectedSize(e.target.value)}
                        className='cursor-pointer'
                    />
                </label>
            </fieldset>
        </div>
    )
};

export default ItemBabySizes;
