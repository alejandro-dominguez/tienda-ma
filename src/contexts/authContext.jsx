import {
    useEffect,
    createContext,
    useState
} from 'react';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ authUser, setAuthUser ] = useState(null)

    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const signUserOut = () => signOut(auth)

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setAuthUser(user)
            }
        })
    }, [])

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signUserOut,
                authUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
