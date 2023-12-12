import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/config";

const useGetNavLinks = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [navData, setNavData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const querySnapshot = await getDocs(collection(db, 'nav-links'))
                const navLinks = []
                querySnapshot.forEach((doc) => {
                    navLinks.push({...doc.data()})
                })
                setNavData(navLinks)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    return [navData, error, loading]
}

export default useGetNavLinks;
