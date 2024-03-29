import {
    useState,
    useEffect
} from 'react';
import {
    collection,
    query,
    getDocs,
    orderBy
} from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetAllMessages = () => {
    const [ errorMessages, setErrorMessages ] = useState('')
    const [ loadingMessages, setLoadingMessages ] = useState(false)
    const [ messages, setMessages ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoadingMessages(true)
                const collectionRef = collection(db, 'messages')
                const q = query(collectionRef, orderBy('messageDate', 'desc'))
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

    return [ messages, errorMessages, loadingMessages ]
};

export default useGetAllMessages;
