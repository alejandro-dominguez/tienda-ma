import { RotatingLines } from 'react-loader-spinner';
import useGetPromo from '../customHooks/useGetPromo';
import ErrorPage from '../pages/ErrorPage';

const PromoSectionContainer = () => {
    const [ promo, error, loading ] = useGetPromo()

    return (
        <section className='w-full grid place-items-center px-4 md:px-10 py-5 sm:py-10 bg-white'>
            {
                (JSON.stringify(promo) !== '{}' && !loading && !error) ?
                    <h3 className='block md:leading-9 text-2xl md:text-[1.75rem] font-black font-Raleway tracking-wide'>
                        {promo.text}
                    </h3>
                : !error ?
                    <div className='w-full grid place-items-center min-h-[4.5rem]'>
                        <div className='p-5 bg-teal-600/20 rounded-lg'>
                            <RotatingLines
                                strokeColor='white'
                                strokeWidth='5'
                                animationDuration='0.75'
                                width='40'
                                visible={true}
                            />
                        </div>
                    </div>
                :
                    <ErrorPage />
            }
        </section>
    )
};

export default PromoSectionContainer;
