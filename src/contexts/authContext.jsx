import { useEffect, createContext, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ authUser, setAuthUser ] = useState(null)

    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setAuthUser(user)
        })
    }, [])
    

    return (
        <AuthContext.Provider
            value={{
                signIn,
                authUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
