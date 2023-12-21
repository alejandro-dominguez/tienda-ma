import { useState } from 'react';
import { HeroSection } from '../components';
import { BenefitsSection, HomeContactForm } from '../components/homeComponents';
import { FeaturedItemContainer } from '../containers';

const HomePage = () => {
    const [ btnsData, ] = useState([
        {
            'name': 'Destacados',
            'section': 'featured-section'
        },
        {
            'name': 'Beneficios',
            'section': 'benefits-section'
        },
        {
            'name': 'Contacto',
            'section': 'contact-section'
        }
    ])

    return (
        <div className='grid place-items-center'>
            <HeroSection btnsData={btnsData} />
            <FeaturedItemContainer />
            <BenefitsSection />
            <HomeContactForm />
        </div>
    )
};

export default HomePage;
