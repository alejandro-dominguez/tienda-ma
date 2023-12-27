import HeroSection from '../components/HeroSection';
import HomeContactForm from '../components/homeComponents/HomeContactForm';
import PaymentsSection from '../components/homeComponents/PaymentsSection';
import FeaturedItemsContainer from '../containers/FeaturedItemsContainer';
import PromoSectionContainer from '../containers/PromoSectionContainer';

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
