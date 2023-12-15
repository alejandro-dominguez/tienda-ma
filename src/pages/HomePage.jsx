import { HeroSection } from '../components';
import { BenefitsSection, HomeContactForm } from '../components/homeComponents';
import { FeaturedItemContainer } from '../containers';

const HomePage = () => {
    return (
        <div className='grid place-items-center'>
            <HeroSection />
            <FeaturedItemContainer />
            <BenefitsSection />
            <HomeContactForm />
        </div>
    )
};

export default HomePage;
