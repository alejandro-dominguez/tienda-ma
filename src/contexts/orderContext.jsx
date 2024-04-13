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

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
    const [ errorOrders, setErrorOrders ] = useState('')
    const [ loadingOrders, setLoadingOrders ] = useState(false)
    const [ orders, setOrders ] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoadingOrders(true)
                const collectionRef = collection(db, 'orders')
                const q = query(collectionRef, orderBy('dateFilter', 'desc'))
                const querySnapshot = await getDocs(q)
                const firebaseOrders = []
                querySnapshot.forEach((doc) => {
                    firebaseOrders.push({...doc.data(), id: doc.id})
                })
                setOrders(firebaseOrders)
                setLoadingOrders(false)
            } catch (error) {
                setErrorOrders(error.message)
                setLoadingOrders(false)
            } finally {
                setLoadingOrders(false)
            }
        })()
    }, [])

    return (
        <OrderContext.Provider
            value={{
                orders,
                errorOrders,
                loadingOrders
            }}
        >
            {children}
        </OrderContext.Provider>
    )
};

export default OrderProvider;
