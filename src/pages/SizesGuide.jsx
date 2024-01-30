import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import DisabledSite from '../components/DisabledSite';

const SizesGuide = () => {
    const { enableSite } = useContext(SiteContext)
    
    return (
        <>
        {
            enableSite ?
                <div>
                    SizesGuide
                </div>
            :
                <DisabledSite />
        }
        </>
    )
};

export default SizesGuide;
