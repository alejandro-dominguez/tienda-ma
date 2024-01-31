import { useContext } from 'react';
import { SiteContext } from '../contexts/siteContext';
import DisabledSite from '../components/DisabledSite';

const SizesGuide = () => {
    const { enableSite } = useContext(SiteContext)
    
    return (
        <>
        {
            enableSite.enabled ?
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
