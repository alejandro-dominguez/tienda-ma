/* import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import productsFirebase from '../productsDb.json';

const saveFirebaseProducts = async () => {
    try {
        productsFirebase.forEach(async (product) => {
            const docRef = await addDoc(collection(db, 'products'), {
                name: product.name,
                category: product.category,
                brand: product.brand,
                description: product.description,
                price: product.price,
                img: product.img,
                quantity: product.quantity,
            })
        })
    } catch (error) {
        console.log(error)
    }
}

export default saveFirebaseProducts; */
