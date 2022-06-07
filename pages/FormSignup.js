import React, { useState } from "react";
import styles from '../styles/form.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { login, logout, } from "../components/features/UderSlice";
import { Link } from "styled-icons/bootstrap";
export default function FormSignup() {



  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const router = useRouter()
  const handleCapacity = (e) => {
    setSelect(e.target.value);

  }
  const registers = () => {
    createUserWithEmailAndPassword(auth, email, password,name).then((userAuth) => {
      dispatch(login({
        email: userAuth.user.email,
        password: userAuth.user.password,
        name: userAuth.user.name,

      }))
    }).catch(function (error) {
      var errorMessage = error.message;
       console.log("signup")
    });
    router.push('/SignIn')
  }
  return (
    
      <div className="login-page" id={styles.login_page}>
        <div className="form" id={styles.form}>
          <form className="register-form" id={styles.register_form}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
            <button onClick={registers}>create</button>
            <p className="message" id={styles.message}>Already registered? <a href="/Signin">Sign In</a></p>
          </form>
        </div>
      </div>
    
  )
}





