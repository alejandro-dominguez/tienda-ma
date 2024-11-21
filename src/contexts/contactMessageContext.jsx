import {
    collection,
    query,
    getDocs,
    orderBy
} from 'firebase/firestore';
import {
    useState,
    useEffect,
    createContext
} from 'react';
import { db } from '../firebase/config';

export const ContactMessageContext = createContext();

const ContactMessageProvider = ({ children }) => {
    const [ errorMessages, setErrorMessages ] = useState('')
    const [ loadingMessages, setLoadingMessages ] = useState(false)
    const [ messages, setMessages ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoadingMessages(true)
                const collectionRef = collection(db, 'messages')
                const q = query(collectionRef, orderBy('dateFilter', 'desc'))
                const querySnapshot = await getDocs(q)
                const firebaseMessages = []
                querySnapshot.forEach((doc) => {
                    firebaseMessages.push({...doc.data(), id: doc.id})
                })
                setMessages(firebaseMessages)
                setLoadingMessages(false)
            } catch (error) {
                setErrorMessages(error.message)
                setLoadingMessages(false)
            } finally {
                setLoadingMessages(false)
            }
        })()
    }, [])

    return (
        <ContactMessageContext.Provider
            value={{
                messages,
                errorMessages,
                loadingMessages
            }}
        >
            {children}
        </ContactMessageContext.Provider>
    )
};

export default ContactMessageProvider;
