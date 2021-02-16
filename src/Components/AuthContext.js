import React, {createContext, useState, useEffect, Children} from "react";
import auth from "./firebaseAuth";

export const AuthContext = createContext();


export const AuthProvider=({children})=>{

    const [user, setUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(()=>{

        auth.onAuthStateChanged((user)=>{
            setUser(user)
            setPending(false)
        })

    },[]);

    if(pending){
        return <> Please Wait...</>
    }

    return(

        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>




    );
}