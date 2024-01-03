import {
    createContext,
    useState
} from 'react';

export const ShopContext = createContext({});

const ShopProvider = ({ children }) => {
    const [ products, setProducts ] = useState([])

    const addProduct = (productToAdd) => {
        const repeated = repeatedProduct(productToAdd.id)
        if (repeated) {
            const productRepeated = products.find(productsInCart => productsInCart.id === productToAdd.id)
            productRepeated.quantity += productToAdd.quantity
            const productsNotRepeated = products.filter(productsInCart => productsInCart.id !== productToAdd.id)
            setProducts([ ...productsNotRepeated, productRepeated ])
        } else {
            setProducts([ ...products, productToAdd ])
        }
    }

    const repeatedProduct = (id) => {
        return products.some(product => product.id === id)
    }

    const removeProduct = (id) => {
        const cartProducts = products.filter(productsInCart => productsInCart.id !== id)
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
                calculateCartQuantity
            }}
        >
            { children }
        </ShopContext.Provider>
    )
};

export default ShopProvider;
