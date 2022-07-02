import React from 'react'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/Signin.module.css'
import FormSignup from './FormSignup'



export default function Signup() {
    return (
        <div className={styles.bodySignin}>
            <div className={styles.body}>
                <div className="container-fluid" id={styles.container}>
                    <div className="row">
                        <div className="col-lg-12 col-md-10 col-sm-12" id={styles.head_signin}>
                            <div >
                                <h2 className={styles.Signin_text}><img src="weblisted-01.png" alt="bot"></img></h2>
                            </div>
                            <div id={styles.btn_signin}>
                                <button id={styles.btn2} > <Link href="/SignIn">Sign In</Link></button>
                                <button id={styles.btn2} > <Link href="/Signup">Sign Up</Link> </button>
                            </div>
                        </div>

                        <div>
                            <FormSignup />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}