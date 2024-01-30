import {
    createContext,
    useState
} from 'react';

export const SiteContext = createContext();

const SiteProvider = ({ children }) => {
    const [ enableSite, setEnableSite ] = useState(true)

    return (
        <SiteContext.Provider
            value={{
                enableSite,
                setEnableSite
            }}
        >
            {children}
        </SiteContext.Provider>
    )
};

export default SiteProvider;
