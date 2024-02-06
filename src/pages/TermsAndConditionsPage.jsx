import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import DisabledSite from '../components/DisabledSite';

const TermsAndConditionsPage = () => {
    const { enableSite } = useContext(SiteContext)

    return (
        <>
        {
            enableSite.enabled ?
                <main className='w-full min-h-[100svh]'>
                    <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-3 pt-10 mt-20 w-fit mx-auto'>
                        Términos y condiciones
                    </h1>
                </main>
            :
                <DisabledSite />
        }
        </>
    )
};

export default TermsAndConditionsPage;
