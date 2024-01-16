import { createContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const signIn = (email, password) => {
        const userCredentials = signInWithEmailAndPassword(auth, email, password)
        console.log(userCredentials.user);
    }

    return (
        <AuthContext.Provider
            value={{
                signIn
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
