import React,{textarea} from 'react'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/account_fianance.module.css"

export default function account_fianance() { 

    return (
        <div>
            <Header />
                    <section id={styles.account_section}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8">
                                       <div className="row">
                                           <div className="col-lg-5" id={styles.input1}>
                                               <span>posting title</span>
                                               <input type="text" />
                                           </div>
                                           <div className="col-lg-5" id={styles.input1}>
                                           <span>city or neighborhood</span>
                                               <input type="text" />
                                           </div>
                                           <div className="col-lg-2" id={styles.input1}>
                                           <span>postal code</span>
                                               <input type="text" />
                                           </div>
                                           <div className="col-lg-12 mt-3" id={styles.TextArea}>
                                               <span>Only one job description per posting please.</span>
                                               <a href="">Please see our FAQ for job posters</a>
                                               <p><b>description</b></p>
                                                <textarea name="" id="" cols="30" rows="10"></textarea>
                                           </div>
                                           <form action=""></form>
                                       </div>
                                     
                                  </div>
                                <div className="col-lg-2"></div>
                            </div>
                        </div>
                    </section>
           

  </div>
   )
};
