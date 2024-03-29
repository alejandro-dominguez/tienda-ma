import {
    useState,
    useEffect,
    createContext
} from 'react';
import {
    collection,
    query,
    getDocs,
} from 'firebase/firestore';
import { db } from '../firebase/config';

export const PaymentContext = createContext();

const PaymentProvider = ({ children }) => {
    const [ errorPayments, setErrorPayments ] = useState('')
    const [ loadingPayments, setLoadingPayments ] = useState(false)
    const [ payments, setPayments ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoadingPayments(true)
                const q = query(collection(db, 'payments'))
                const querySnapshot = await getDocs(q)
                const firebasePayments = []
                querySnapshot.forEach((doc) => {
                    firebasePayments.push({...doc.data(), id: doc.id})
                })
                setPayments(firebasePayments)
                localStorage.setItem('paymentsData', JSON.stringify(firebasePayments))
                setLoadingPayments(false)
            } catch (error) {
                setErrorPayments(error.message)
                setLoadingPayments(false)
            } finally {
                setLoadingPayments(false)
            }
        })()
    }, [])

    return (
        <PaymentContext.Provider
            value={{
                payments,
                errorPayments,
                loadingPayments
            }}
        >
            {children}
        </PaymentContext.Provider>
    )
};

export default PaymentProvider;
