import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../firebase'


const AuthContext=React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const[currentUser , setCurrentUser]= useState()
    const [loading, setLoading] = useState(true)

    function SignUp(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function Login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }  

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false)
        })
        return unsubscribe
      })

    const value={
        currentUser,
        SignUp, 
        Login,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
           {!loading && children}
        </AuthContext.Provider>
    )
}
