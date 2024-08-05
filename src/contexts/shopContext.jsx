import {
    createContext,
    useState,
} from 'react';

export const ShopContext = createContext({});

const ShopProvider = ({ children }) => {
    const [ products, setProducts ] = useState([])

    const addProduct = ( productToAdd ) => {
        const newProduct =  {...productToAdd}
        const existingProduct = repeatedProduct(products, newProduct)
        if (existingProduct) {
            existingProduct.quantity += newProduct.quantity
            setProducts([...products])
        } else {
            setProducts([...products, newProduct])
        }
    }

    const repeatedProduct = (products, newProduct) => {
        for (const e of products) {
            const e1 = {...e}
            const e2 = {...newProduct}
            if ((!e2.selectedSize && (e1.id === e2.id)) ||
            ((e1.id === e2.id) && (e1.selectedSize === e2.selectedSize))
            ) return e
        }
    }

    const removeProduct = (prodId) => {
        const cartProducts = products.filter(productsInCart => productsInCart.prodId !== prodId)
        setProducts(cartProducts)
    }

    const emptyCart = () => {
        setProducts([])
    }

    const calculateCartTotal = () => {
        const cartTotal = products.reduce((acc, cartProducts) => acc += cartProducts.quantity * cartProducts.price, 0)
        return cartTotal
    }
    
    const calculateCartQuantity = () => {
        const cartQuantity = products.reduce((acc, cartProducts) => acc += cartProducts.quantity, 0)
        return cartQuantity
    }

    return (
        <ShopContext.Provider
            value={{
                products,
                addProduct,
                removeProduct,
                emptyCart,
                calculateCartTotal,
                calculateCartQuantity,
            }}
        >
            {children}
        </ShopContext.Provider>
    )
};

export default ShopProvider;
