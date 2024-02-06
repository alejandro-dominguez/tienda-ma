const SizesBrandGuide = ({
    brand,
    logo
}) => {
    return (
        <div className='flex flex-col w-full mb-16'>
            <div className='w-32 self-center'>
                <img
                    src={logo}
                    alt='logo empresa de pañales'
                    className='block w-full aspect-square object-contain'
                />
            </div>
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

export default SizesBrandGuide;
