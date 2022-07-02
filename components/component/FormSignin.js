import React, { useState, useEffect } from "react";
import styles from '../../styles/form.module.css'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login, logout, } from "../../components/features/UderSlice";
import { onAuthStateChanged, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../../firebase';


export default function FormSignin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = getAuth(app);





  const logintoApp = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then((userAuth) => {
      dispatch(login({
        email: userAuth.user.email,
        password: userAuth.user.password,

      }))
      localStorage.setItem("email",email)
      console.log('userAuth',email)
    })
    if (auth.currentUser != null) {
     
      alert("loged in")
      router.push('/')

    }else{
      alert("wro")
    }
    
  }
  return (

    <div id={styles.login_page}>
      <div id={styles.form}>
        <form id={styles.login_form}>
          <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={logintoApp}>login</button>
          <p id={styles.message}>Not registered? <Link href="/Signup">Create an account</Link></p>
        </form>
      </div>
    </div>

  )
}

