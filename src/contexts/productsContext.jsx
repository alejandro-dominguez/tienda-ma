import {
    useState,
    useEffect,
    createContext
} from 'react';
import {
    collection,
    query,
    getDocs
} from 'firebase/firestore';
import { db } from '../firebase/config';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ prods, setProds ] = useState([])
    const [ categories, setCategories ] = useState([])
    const [ subcategories, setSubcategories ] = useState([])
    const [ brands, setBrands ] = useState({})
    const [ productLines, setProductLines ] = useState({})
    const [ featuredProducts, setFeaturedProducts ] = useState({})
    const [ stockedProducts, setStockedProducts ] = useState({})
    const [ notStockedProducts, setNotStockedProducts ] = useState({})

    const filterProds = (firebaseProds) => {
        const categoriesList = []
        const subcategoriesList = []
        const brandsList = []
        const productLinesList = []
        
        firebaseProds.map(prod => {
            return (
                categoriesList.push(prod.category),
                subcategoriesList.push(prod.subcategory),
                brandsList.push(prod.brand),
                productLinesList.push(prod.productLine)
            )
        })
        
        const featuredProductsList = firebaseProds.filter(prod => prod.featured === true)
        const stockedProductsList = firebaseProds.filter(prod => prod.stock === true)
        const notStockedProductsList = firebaseProds.filter(prod => prod.stock === false)
        const filteredCategoriesList = [...new Set(categoriesList)]
        const filteredSubcategoriesList = [...new Set(subcategoriesList)]
        const filteredBrandsList = [...new Set(brandsList)]
        const filteredProductLinesList = [...new Set(productLinesList)]
        
        setFeaturedProducts(featuredProductsList)
        setStockedProducts(stockedProductsList)
        setNotStockedProducts(notStockedProductsList)
        setCategories(filteredCategoriesList)
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
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        })()
    }, [])

    return (
        <ProductsContext.Provider
            value={{
                prods,
                categories,
                subcategories,
                brands,
                productLines,
                featuredProducts,
                stockedProducts,
                notStockedProducts,
                error,
                loading
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
};

export default ProductsProvider;
