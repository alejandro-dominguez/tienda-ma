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

const useGetAllProducts = () => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ prods, setProds ] = useState({})
    const [ brands, setBrands ] = useState({})
    const [ productLines, setProductLines ] = useState({})
    
    const filterBrands = (firebaseProds) => {
        const brandsList = []
        firebaseProds.map(prod => {
            return brandsList.push(prod.brand)
        })
        const filteredBrandsList = [...new Set(brandsList)]
        setBrands(filteredBrandsList)
        setLoading(false)
    }

    const filterProductLines = (firebaseProds) => {
        const productLinesList = []
        firebaseProds.map(prod => {
            if (prod.productLine !== '') {
                return productLinesList.push(prod.productLine)
            } 
        })
        const filteredProductLinesList = [...new Set(productLinesList)]
        setProductLines(filteredProductLinesList)
        setLoading(false)
    }

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const q = query(collection(db, 'products'))
                const querySnapshot = await getDocs(q)
                const firebaseProds = []
                querySnapshot.forEach((doc) => {
                    firebaseProds.push({...doc.data(), id: doc.id})
                })
                setProds(firebaseProds)
                filterBrands(firebaseProds)
                filterProductLines(firebaseProds)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    return [ prods, brands, productLines, error, loading ]
};

export default useGetAllProducts;
