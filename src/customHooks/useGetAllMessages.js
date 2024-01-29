import {
    useState,
    useEffect
} from 'react';
import {
    collection,
    query,
    getDocs
} from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetAllMessages = () => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ messages, setMessages ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                let q = query(collection(db, 'messages'))
                const querySnapshot = await getDocs(q)
                const firebaseMessages = []
                querySnapshot.forEach((doc) => {
                    firebaseMessages.push({...doc.data(), id: doc.id})
                })
                setMessages(firebaseMessages)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    return [ messages, error, loading ]
};

export default useGetAllMessages;
