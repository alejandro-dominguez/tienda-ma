import {
    useState,
    useEffect,
    createContext
} from 'react';
import {
    collection,
    query,
    getDocs,
    orderBy
} from 'firebase/firestore';
import { db } from '../firebase/config';

export const WholesalerMessageContext = createContext();

const WholesalerMessageProvider = ({ children }) => {
    const [ errorWholesalersMessages, setErrorWholesalersMessages ] = useState('')
    const [ loadingWholesalersMessages, setLoadingWholesalersMessages ] = useState(false)
    const [ wholesalersMessages, setWholesalersMessages ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoadingWholesalersMessages(true)
                const collectionRef = collection(db, 'wholesalers')
                const q = query(collectionRef, orderBy('dateFilter', 'desc'))
                const querySnapshot = await getDocs(q)
                const firebaseWholesalersMessages = []
                querySnapshot.forEach((doc) => {
                    firebaseWholesalersMessages.push({...doc.data(), id: doc.id})
                })
                setWholesalersMessages(firebaseWholesalersMessages)
                setLoadingWholesalersMessages(false)
            } catch (error) {
                setErrorWholesalersMessages(error.message)
                setLoadingWholesalersMessages(false)
            } finally {
                setLoadingWholesalersMessages(false)
            }
        })()
    }, [])

    return (
        <WholesalerMessageContext.Provider
            value={{
                wholesalersMessages,
                errorWholesalersMessages,
                loadingWholesalersMessages
            }}
        >
            {children}
        </WholesalerMessageContext.Provider>
    )
};

export default WholesalerMessageProvider;
