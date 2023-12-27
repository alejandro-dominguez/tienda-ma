import { HeroSection } from '../components';
import {
    PaymentsSection,
    HomeContactForm
} from '../components/homeComponents';
import { FeaturedItemsContainer, PromoSectionContainer } from '../containers';

const HomePage = () => {
    return (
        <div className='relative grid place-items-center w-full overflow-x-hidden'>
            <HeroSection />
            <PromoSectionContainer />
            <FeaturedItemsContainer />
            <PaymentsSection />
            <HomeContactForm />
        </div>
    )
};

export default HomePage;
