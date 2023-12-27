import { useGetPromo } from '../customHooks';
import { RotatingLines } from 'react-loader-spinner';
import { ErrorPage } from '../pages';

const PromoSectionContainer = () => {
    const [ promo, error, loading ] = useGetPromo()

    return (
        <section
            id='promo-section'
            className='w-full grid place-items-center px-4 py-10 sm:p-10 bg-white'
        >
            {
                (promo.length && !loading && !error) ?
                    <h3 className='text-4xl text-center font-black font-Raleway tracking-wide'>
                        {promo[0].text}
                    </h3>
                : !error ?
                    <div className='w-full grid place-items-center bg-white min-h-[7.5rem]'>
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
