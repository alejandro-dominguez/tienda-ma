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

const useGetAllWholesalersMessages = () => {
    const [ errorWholesalersMessages, setErrorWholesalersMessages ] = useState('')
    const [ loadingWholesalersMessages, setLoadingWholesalersMessages ] = useState(false)
    const [ wholesalersMessages, setWholesalersMessages ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoadingWholesalersMessages(true)
                const collectionRef = collection(db, 'wholesalers')
                const q = query(collectionRef, orderBy('messageDate', 'desc'))
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

    return [ wholesalersMessages, errorWholesalersMessages, loadingWholesalersMessages ]
};

export default useGetAllWholesalersMessages;
