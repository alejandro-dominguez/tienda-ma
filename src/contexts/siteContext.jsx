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
    const [ enableSite, setEnableSite ] = useState({
        enabled: true
    })
        
    useEffect(() => {
        (async () => {
            try {
                const docRef = doc(db, 'site', import.meta.env.VITE_FIREBASE_SITE_ID)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setEnableSite({ ...docSnap.data() })
                }
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    
    return (
        <SiteContext.Provider
            value={{
                enableSite
            }}
        >
            {children}
        </SiteContext.Provider>
    )
};

export default SiteProvider;
