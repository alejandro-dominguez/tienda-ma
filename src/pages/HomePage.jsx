import { HeroSection } from '../components';
import { PromoSection, PaymentsSection, HomeContactForm } from '../components/homeComponents';
import { FeaturedItemsContainer } from '../containers';

const HomePage = () => {
    return (
        <div className='relative grid place-items-center w-full overflow-x-hidden'>
            <HeroSection />
            <PromoSection />
            <FeaturedItemsContainer />
            <PaymentsSection />
            <HomeContactForm />
        </div>
    )
};

export default HomePage;
