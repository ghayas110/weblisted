import React, { useState } from "react";


export default function FormSignup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("");
  
  return (
    <>
    <div className="login-page" id={styles.login_page}>
<div className="form" id={styles.form}>
  <form className="register-form" id={styles.register_form}>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
    <input type="text"value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email"/>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password"/>
    <button onClick={registers}>create</button>
    <p className="message" id={styles.message}>Already registered? <a href="#">Sign In</a></p>
  </form>
  {/* <form className="login-form" id={styles.login_form}>
    <input type="text" placeholder="username"/>
    <input type="password" placeholder="password"/>
    <button>login</button>
    <p className="message" id={styles.message}>Not registered? <a href="#">Create an account</a></p>
  </form> */}
</div>
</div>
  </>
  )
}





