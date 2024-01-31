import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import HeroSection from '../components/HeroSection';
import HomeContactForm from '../components/homeComponents/HomeContactForm';
import PaymentsSection from '../components/homeComponents/PaymentsSection';
import FeaturedItemsContainer from '../containers/FeaturedItemsContainer';
import PromoSectionContainer from '../containers/PromoSectionContainer';
import DisabledSite from '../components/DisabledSite';
import ErrorPage from './ErrorPage';

const HomePage = () => {
    const { enableSite, loadingSite, errorSite } = useContext(SiteContext)

    return (
        <>
        {
            (enableSite.enabled && (loadingSite || !loadingSite) && !errorSite) ?  
                <div className='relative grid place-items-center w-full'>
                    <HeroSection />
                    <PromoSectionContainer />
                    <FeaturedItemsContainer />
                    <PaymentsSection />
                    <HomeContactForm />
                </div>
            : enableSite.enabled === false ?
                <DisabledSite />
            :
                <div className='relative grid place-items-center w-full'>
                    <HeroSection />
                    <PromoSectionContainer />
                    <FeaturedItemsContainer />
                    <PaymentsSection />
                    <HomeContactForm />
                </div>
        }
        </>
    )
};

export default HomePage;
