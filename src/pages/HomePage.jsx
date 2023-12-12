import { HeroSection, BenefitsSection } from '../components/homeComponents';

const HomePage = () => {
    return (
        <div className='grid place-items-center'>
            <HeroSection />
            <BenefitsSection />
        </div>
    )
};

export default HomePage;
