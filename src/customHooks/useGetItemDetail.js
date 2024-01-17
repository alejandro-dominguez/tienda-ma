import {
    useEffect,
    useState
} from 'react';
import {
    doc,
    getDoc
} from 'firebase/firestore';
import { db } from '../firebase/config';

const useGetItemDetail = ( id ) => {
    const [ errorProduct, setErrorProduct ] = useState('')
    const [ loadingProduct, setLoadingProduct ] = useState(false)
    const [ product, setProduct ] = useState({})
    
    useEffect(() => {
        (async () => {
            try {
                setLoadingProduct(true)
                const docRef = doc(db, 'products', id)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setProduct({ ...docSnap.data(), id: docSnap.id })
                    setLoadingProduct(false)
                }
            } catch (error) {
                setErrorProduct(error.message)
                setLoadingProduct(false)
            } finally {
                setLoadingProduct(false)
            }
        })()
    }, [id])

    return [ product, errorProduct, loadingProduct ]
};

export default useGetItemDetail;
