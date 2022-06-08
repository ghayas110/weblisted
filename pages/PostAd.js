// eslint-disable-next-line react-hooks/exhaustive-deps
import React from 'react'
import Link from 'next/link';
import styles from "../styles/postadd.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from 'react-redux';
import { selectOpenResturant } from '../components/features/ResSlice';
export default function postadd() {
    const selectJob = useSelector(selectOpenResturant);

    return (
        <section>
            <div className='container-fluid' >

                <div className='col-lg-12 col-md-12 col-sm-12' id={styles.bg}>
                    <ul className={styles.bg_list}>
                        <li><a href="/post">CL</a></li>&nbsp;&nbsp;&nbsp;
                        <li><a href="">indoor</a></li>&nbsp;&nbsp;&nbsp;
                        <li><a href="">jobs</a></li>&nbsp;&nbsp;&nbsp;
                        <li><a href="">Science/biotech</a></li>&nbsp;&nbsp;&nbsp;
                        <li><a href="/post">Post</a></li>&nbsp;&nbsp;&nbsp;
                        <li><a href="">Account</a></li>
                    </ul>
                </div>
                <div className="col-lg-12">
                    <div className={styles.cg}>
                        <ul>
                            <li><a href="">◀  prev </a></li>
                            <li><a href=""> next ▶ </a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className={styles.mm}>
                     <ul>
                        <li> <button >Reply</button></li>
                        <li>Favorite</li>
                        <li>hide</li>
                        <li>flag</li>
                        <li>share</li>
                        <li>posted 14 days ago</li>
                        <li><a href=""> print</a> </li>
                        </ul>
                    </div>
                    <h3>{selectJob?.data().jobtitle}<br></br></h3>
                </div>
                <div className="col-lg-12">
                    <div className={styles.nmn}>
                        <table>
                            <tr>
                                <td>
                                    <img src="https://painting.demoapp-lc.com/wp-content/uploads/2022/05/weblisted-01.png" className={styles.logoImg} alt="bot" />
                                </td>

                                <tr><td><button>Job Location:{selectJob?.data().city} </button></td></tr>
                                <tr><td><button>compensation: {selectJob?.data().compensation}</button></td></tr> 
                                <tr><td><button>job title: {selectJob?.data().jobtitle}</button></td></tr>
                            </tr>

                        </table>
                    </div>
                </div>

            </div>

            <div className='container-fluid' id={styles.txt}>

                <span>
                {selectJob?.data().discription}
                </span>
            </div>
            <div className="container-fluid" id={styles.footer}>
                <footer className={styles.footer}>
                    <ul className={styles.clfooter}>
                        <li>© 2022 <span className={styles.desktop}>craigslist</span><span className={styles.mobile}>CL</span></li>
                        <li><a href="">help</a></li>
                        <li><a href="">safety</a></li>
                        <li className={styles.desktop}><a href="">privacy</a></li>
                        <li className={styles.desktop}><a href="">feedback</a></li>
                        <li><a href="">terms</a></li>
                        <li><a href="">about</a></li>
                        <li><a href="">craigslist app</a></li>
                        <li><a href="">cl is hiring</a></li>
                    </ul>
                </footer>
            </div>
        </ section>
    )
}
