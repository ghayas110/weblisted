import React, { useState } from "react";
import styles from '../styles/form.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore'; 
import { db, storage } from '../firebase';
import { login, logout, } from "../components/features/UderSlice";
import { Link } from "styled-icons/bootstrap";
function FormSignup() {



  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("");
  const [uid, setUids] = useState("");
  const dispatch = useDispatch();
  const router = useRouter()

  const registers = () => {

    createUserWithEmailAndPassword(auth,email,password).then((userAuth) => {
      dispatch(login({
        email: userAuth.user.email,
        password: userAuth.user.password,

      }))
        setUids(userAuth.user.uid)
        localStorage.setItem('email', email);
    
         localStorage.setItem('displayName', name);
         const docRef =  addDoc(collection(db, 'userid'), {
          email:email,
          password:password,
          name:name,
        
         
        })
      

        router.push('/')
    }).catch(function(error) {
      var errorMessage = error.message;
      console.log("errorMessage: "+ errorMessage )
    });
  
  
 
    
    }
  return (
    
      <div className="login-page" id={styles.login_page}>
        <div className="form" id={styles.form}>
       
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
            <button onClick={registers}>create</button>
       
        </div>
      </div>
    
  )
};

export default FormSignup



