const SizesNoBrandGuide = ({
    brand,
    name
}) => {
    return (
        <div className='flex flex-col w-full mb-16'>
            <h3 className='w-32 h-32 self-center'>
                <span className='mt-11 font-bold text-lg font-Raleway text-center leading-6'>
                    {name}
                </span>
            </h3>
            <div className='grid grid-cols-2 w-fit gap-14 self-center'>
                <div className='flex flex-col items-start'>
                    <span className='font-black'>
                        Talles
                    </span>
                    <div className='flex flex-col text-[.9rem] font-bold ml-1 gap-3 pt-3'>
                        {
                            brand.map((e,i) => {
                                return (
                                    <span
                                        key={i}
                                    >
                                        {e.size}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <span className='font-black'>
                        Kilos
                    </span>
                    <div className='flex flex-col text-[.9rem] font-bold ml-1 gap-3 py-2'>
                        {
                            brand.map((e,i) => {
                                return (
                                    <span
                                        key={i}
                                    >
                                        {e.kg}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SizesNoBrandGuide;
