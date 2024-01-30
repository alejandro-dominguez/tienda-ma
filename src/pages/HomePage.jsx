import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import HeroSection from '../components/HeroSection';
import HomeContactForm from '../components/homeComponents/HomeContactForm';
import PaymentsSection from '../components/homeComponents/PaymentsSection';
import FeaturedItemsContainer from '../containers/FeaturedItemsContainer';
import PromoSectionContainer from '../containers/PromoSectionContainer';
import DisabledSite from '../components/DisabledSite';

const HomePage = () => {
    const { enableSite } = useContext(SiteContext)

    return (
        <>
        {
            enableSite ?  
                <div className='relative grid place-items-center w-full'>
                    <HeroSection />
                    <PromoSectionContainer />
                    <FeaturedItemsContainer />
                    <PaymentsSection />
                    <HomeContactForm />
                </div>
            :
                <DisabledSite />
        }
        </>
    )
};

export default HomePage;
