import { useContext } from 'react';
import { PromoContext } from '../../contexts/promoContext';
import { RotatingLines } from 'react-loader-spinner';
import UpdatePromotionForm from '../../components/adminComponents/UpdatePromotionForm';
import AdminErrorPage from '../../pages/AdminErrorPage';

const AdminPromotionsPage = () => {
    const { promo, errorPromo, loadingPromo } = useContext(PromoContext)
    
    return (
        <main className='w-full flex flex-col gap-4 mt-28 min-h-[100svh]'>
            {
                (JSON.stringify(promo) !== '{}' && !loadingPromo && !errorPromo) ?
                    <div className='mx-auto flex flex-col'>
                        <h3 className='font-bold font-Raleway text-lg md:text-xl drop-shadow-sm mx-auto mt-2'>
                            Promoción activa:
                        </h3>
                        <span className='text-sm mt-2 bg-teal-500/[8%] shadow-sm py-2 px-4 rounded-sm drop-shadow-sm
                        text-black cursor-default select-none'>
                            {promo.text}
                        </span>
                        <UpdatePromotionForm />
                    </div>
                : !errorPromo ?
                    <div className='w-full grid place-items-center mt-2 py-4 min-h-[24rem]'>
                        <div className='p-5 bg-teal-600/20 rounded-lg'>
                            <RotatingLines
                                strokeColor='white'
                                strokeWidth='5'
                                animationDuration='0.75'
                                width='70'
                                visible={true}
                            />
                        </div>
                    </div>
                :
                    <AdminErrorPage />
            }
        </main>
    )
};

export default AdminPromotionsPage;
