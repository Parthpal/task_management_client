import { createContext } from 'react';

import { useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../../firebase/firebase.init';


//import axios from 'axios';

export const AuthContext=createContext('null');
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const provider = new GoogleAuthProvider();
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn=()=>{
       return signInWithPopup(auth, provider)
    }
    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser, {
             displayName: name, photoURL: photo
           })
     }
 
    const logOut=()=>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
            // const userEmail=currentUser?.email;
            // const loggedUser={email:userEmail};
             setUser(currentUser);
             console.log('user in the current state',currentUser);
             setLoading(false);
                
                // if(currentUser){
                    
                //     axios.post('https://ph-job-line-server.vercel.app/jwt',loggedUser,{withCredentials:true})
                //     .then(res=>{
                //         console.log('logged in token response',res.data);
                //     })
                // }
                // else{
                //     axios.post('https://ph-job-line-server.vercel.app/logOut',loggedUser,{withCredentials:true})
                //     .then(res=>{
                //         console.log('logged out token response',res.data);
                //     })
                // }
         })
         return ()=>{
             unSubscribe();
         }
     },[])

    const authInfo={user,createUser,logIn,googleSignIn,logOut,loading,updateUserProfile};
    return (
<AuthContext.Provider value={authInfo}>

        {children}

</AuthContext.Provider>
    );
};

export default AuthProvider;