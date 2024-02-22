import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import DisabledSite from '../components/DisabledSite';
import WholesalersForm from '../components/WholesalersForm';

const WholesalersPage = () => {
    const { enableSite } = useContext(SiteContext)

    return (
        <>
        {
            enableSite.enabled ?
                <main className='w-full min-h-[100svh]'>
                    <h1 className='font-bold font-Raleway text-[1.75rem] md:text-3xl drop-shadow-sm pb-3 pt-10 mt-20 w-fit mx-auto'>
                        Mayoristas
                    </h1>
                    <WholesalersForm />
                </main>
            :
                <DisabledSite />
        }
        </>
    )
};

export default WholesalersPage;
