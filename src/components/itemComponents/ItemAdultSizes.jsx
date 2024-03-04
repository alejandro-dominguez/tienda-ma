const ItemAdultSizes = ({ setSelectedAdultSize }) => {
    return (
        <div className='flex flex-col mt-[.2rem]'>
            <span className='text-sm md:text-[.9rem] font-bold'>
                Talles:
            </span>
            <fieldset className='flex items-start gap-6 font-black text-sm'>
                <label htmlFor='G' className='grid place-items-center cursor-pointer drop-shadow'>
                    G
                    <input
                        type='radio' id='G' name='adultSize' value='G'
                        onChange={e => setSelectedAdultSize(e.target.value)}
                        className='cursor-pointer'
                    />
                </label>
                <label htmlFor='XG' className='grid place-items-center cursor-pointer drop-shadow'>
                    XG
                    <input
                        type='radio' id='XG' name='adultSize' value='XG'
                        onChange={e => setSelectedAdultSize(e.target.value)}
                        className='cursor-pointer'
                    />
                </label>
            </fieldset>
        </div>
    )
};

export default ItemAdultSizes;