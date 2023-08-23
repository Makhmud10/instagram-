import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '../firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    updateEmail,
    updatePassword,
    sendPasswordResetEmail,
    signOut,
} from 'firebase/auth'

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export  const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    useEffect(() => {
        const currUser = auth.onAuthStateChanged((authUser) => {
            setUser(authUser)
        })
        //unsubscribe
        return currUser
    }, [])

    //signup
    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth)
    }

    function updateUserEmail(user, email) {
        return updateEmail(user, email)
    }

    function updateUserPassword(user, password){
        return updatePassword(user, password)
    }

    function forgotPassword(email){
        return sendPasswordResetEmail(auth, email)
    }

    return(
        <AuthContext.Provider value={{user, login, logout, updateUserEmail, updateUserPassword, register, forgotPassword}}>
            {children}
        </AuthContext.Provider>
    )
}