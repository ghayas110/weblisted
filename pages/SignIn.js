import React from 'react'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/Signin.module.css'
import FormSignin from './components/FormSignin'



export default function SignIn() {
    return (
        <body className={styles.body}>
            <div className="container" id={styles.container}>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-11" id={styles.head_signin}>
                        <div >
                        <h2 className={styles.Signin_text}><img src="weblisted-01.png" alt="bot"></img></h2>
                        </div>
                        <div id={styles.btn_signin}>
                            <button id={styles.btn2}><Link href="/SignIn">Sign In</Link></button>
                            <button id={styles.btn2}><Link href="/Signup">Sign Up</Link></button>
                        </div>
                    </div>

                    <div>
                        <FormSignin />
                    </div>
                </div>
            </div>
        </body>
    )
}
