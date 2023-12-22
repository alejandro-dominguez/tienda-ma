import { HeroSection } from '../components';
import { PromoSection, PaymentsSection, HomeContactForm } from '../components/homeComponents';
import { FeaturedItemContainer } from '../containers';
import { IoLogoWhatsapp } from 'react-icons/io';

const HomePage = () => {
    return (
        <div className='relative grid place-items-center w-full'>
            <HeroSection />
            <PromoSection />
            <FeaturedItemContainer />
            <PaymentsSection />
            <HomeContactForm />
            <IoLogoWhatsapp className='cursor-pointer text-green-600/80 text-4xl fixed bottom-1/4 right-6 drop-shadow-md' />
        </div>
    )
};

export default HomePage;
