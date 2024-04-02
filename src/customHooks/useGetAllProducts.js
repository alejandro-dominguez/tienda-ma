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
    const [ subcategories, setSubcategories ] = useState({})
    const [ brands, setBrands ] = useState({})
    const [ productLines, setProductLines ] = useState({})
    const [ featuredProducts, setFeaturedProducts ] = useState({})
    const [ stockedProducts, setStockedProducts ] = useState({})
    const [ notStockedProducts, setNotStockedProducts ] = useState({})
    
    const filterProds = (firebaseProds) => {
        const subcategoriesList = []
        const brandsList = []
        const productLinesList = []
        const featuredProductsList = []
        const stockedProductsList = []
        const notStockedProductsList = []
        firebaseProds.map(prod => {
            return (
                subcategoriesList.push(prod.subcategory),
                brandsList.push(prod.brand),
                productLinesList.push(prod.productLine)
            )
        })
        const filteredSubcategoriesList = [...new Set(subcategoriesList)]
        const filteredBrandsList = [...new Set(brandsList)]
        const filteredProductLinesList = [...new Set(productLinesList)]
        setSubcategories(filteredSubcategoriesList)
        setBrands(filteredBrandsList)
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
                filterProds(firebaseProds)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    return [ prods, subcategories, brands, productLines, featuredProducts, stockedProducts, notStockedProducts, error, loading ]
};

export default useGetAllProducts;
