import {
    useState,
    useEffect,
    createContext
} from 'react';
import {
    doc,
    getDoc
} from 'firebase/firestore';
import { db } from '../firebase/config';

export const PromoContext = createContext();

const PromoProvider = ({ children }) => {
    const [ errorPromo, setErrorPromo ] = useState('')
    const [ loadingPromo, setLoadingPromo ] = useState(false)
    const [ promo, setPromo ] = useState({})

    useEffect(() => {
        (async () => {
            try {
                setLoadingPromo(true)
                const docRef = doc(db, 'promos', import.meta.env.VITE_FIREBASE_PROMO_ID)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setPromo({ ...docSnap.data(), id: docSnap.id })
                    localStorage.setItem('promoData', JSON.stringify({ ...docSnap.data(), id: docSnap.id }))
                    setLoadingPromo(false)
                }
            } catch (error) {
                setErrorPromo(error.message)
                setLoadingPromo(false)
            } finally {
                setLoadingPromo(false)
            }
        })()
    }, [])

    return (
        <PromoContext.Provider
            value={{
                promo,
                errorPromo,
                loadingPromo
            }}
        >
            {children}
        </PromoContext.Provider>
    )
};

export default PromoProvider;
