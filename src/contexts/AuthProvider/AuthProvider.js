import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/Firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    //user states
    const [user,setUser] = useState(null);
    //laoding state
    const [loading,setLoading]  = useState(true);


    //google login
    const signInByGoogle = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }


    //github login
    const signInByGithub = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }


    //register user by email,password
    const createUserByEmailPassword = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //sign in user  by email,password
    const signInbyEmailPassword = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    //email varification
    const varifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }


    //update profile
    const updateUserProfile = profile =>{
        return updateProfile(auth.currentUser,profile);
    }


    //forget password
    const passwordResetEmail  = email =>{
        return sendPasswordResetEmail(auth,email);
    }


    //signout user
    const userSignOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


    






    //user status ovserver
    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{

            if(currentuser===null || currentuser.emailVerified){


                setUser(currentuser);
                console.log(currentuser);
            }

            setLoading(false);
        });

        return ()=>unsubscribe() ;


    },[])




    const authInfo = {
        user,
        loading,
        setLoading,
        signInByGoogle,
        signInByGithub,
        createUserByEmailPassword,
        signInbyEmailPassword,
        varifyEmail,
        updateUserProfile,
        passwordResetEmail,
        userSignOut



    };
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;

