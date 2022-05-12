import React, { useState } from "react";
import styles from '../../styles/form.module.css'

export default function FormSignup() {
  return (
    <>
    <div className="login-page" id={styles.login_page}>
<div className="form" id={styles.form}>
  <form className="register-form" id={styles.register_form}>
    <input type="text" placeholder="name"/>
    <input type="password" placeholder="password"/>
    <input type="text" placeholder="email address"/>
    <button>create</button>
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





