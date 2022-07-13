import React from 'react'
import Header from '../pages/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/store.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"


function Store() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className='col-lg-12' id={styles.col12}>
                       
                            <div className={styles.Searchdiv}>
                                <div className="form-control " id={styles.search}>
                                  <input type="text" placeholder='SEARCH' name="" id="" />
                                 <FontAwesomeIcon icon={faSearch}  className={styles.icon} />
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-12" id={styles.divrecomm}>
                      <span>Most  Recommended</span>
                       <div className={styles.recom} ></div>
                       <div className={styles.recpost} id={styles.recpost1} >
                           <span className={styles.cart}>
                           <img src="/00v0v_6SFtGULNQ54z_0kE0dL_600x450.jpg" alt="" className={styles.image} />
                            <span className={styles.text}>Class Room</span>
                           </span>
                          
                           
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Store