import React from 'react'
import header from './next/header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/scams.module.css"

export default function scams() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <header className={styles.global - header}>
                        <a className={styles.header_logo} name="logoLink" href="https://www.craigslist.org">CL</a>

                        <nav className="breadcrumbs-container">

                            <ul className={styles.breadcrumbs}>
                                <li className={styles.crumb}>
                                    <p>
                                        <a href="/about/">about</a>
                                        <span className={styles.breadcrumb_arrow}>&gt;</span>
                                    </p>
                                </li>
                                <li className={styles.crumb}>
                                    <p>
                                        scams
                                    </p>
                                </li>
                            </ul>
                        </nav>


                    </header>
                </div>
            </div>
        </div>


    )
}
