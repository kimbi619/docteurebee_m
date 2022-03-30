import React, { useContext, createContext, useState, useEffect } from 'react'
// import { auth } from '../Firebase';

export const AuthContext = createContext({})

export const useAuth = ()=>{
    return useContext(AuthContext);
}


export const AuthContextProvider= ({ props }) => {
    const [currentUser, setCurrentUser] = useState();
    const signup = (email, password) => {
        // return auth.createUserWithEmailAndPassword(email, password);
    }
    
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChange(user=>{
    //         setCurrentUser(user)
    //     })
    //     return unsubscribe;
    // }, [])
    
    
    const value = {
        currentUser,
        signup
    }
    return (
        
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

