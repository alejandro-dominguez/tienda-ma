import { HeroSection } from '../components';
import { BenefitsSection, HomeContactForm } from '../components/homeComponents';

const HomePage = () => {
    return (
        <div className='grid place-items-center'>
            <HeroSection />
            <BenefitsSection />
            <HomeContactForm />
        </div>
    )
};

export default HomePage;
