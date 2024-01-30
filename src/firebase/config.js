import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAKDVV9bG5Rxu55JCFtkS-AzJg7oMiYnu0',
    authDomain: 'tienda-ma-db.firebaseapp.com',
    projectId: 'tienda-ma-db',
    storageBucket: 'tienda-ma-db.appspot.com',
    messagingSenderId: '84251592979',
    appId: '1:84251592979:web:d40c5ce04b1a9fd9dd72e6',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
