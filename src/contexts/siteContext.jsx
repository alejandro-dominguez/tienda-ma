import {
    createContext,
    useEffect,
    useState
} from 'react';
import {
    doc,
    getDoc
} from 'firebase/firestore';
import { db } from '../firebase/config';

export const SiteContext = createContext();

const SiteProvider = ({ children }) => {
    const [ errorSite, setErrorSite ] = useState('')
    const [ loadingSite, setLoadingSite ] = useState(false)
    const [ enableSite, setEnableSite ] = useState(true)
        
    useEffect(() => {
        (async () => {
            try {
                setLoadingSite(true)
                const docRef = doc(db, 'site', 'KM8JK6EfGRXtYQkN4T70')
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setEnableSite({ ...docSnap.data()})
                    setLoadingSite(false)
                }
            } catch (error) {
                setErrorSite(error.message)
                setLoadingSite(false)
            } finally {
                setLoadingSite(false)
            }
        })()
    }, [])
    
    return (
        <SiteContext.Provider
            value={{
                enableSite,
                loadingSite,
                errorSite
            }}
        >
            {children}
        </SiteContext.Provider>
    )
};

export default SiteProvider;
