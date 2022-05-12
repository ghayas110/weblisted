/* eslint-disable react-hooks/rules-of-hooks */
import React, { main } from 'react';
import styles from '../styles/post.module.css'
import Sider from './components/Sider';
import "bootstrap/dist/css/bootstrap.min.css";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Header} from './components/Header'
function post() {
    const [on, setOn] = React.useState(true);

    const handleOn = () => {
        setOn(!on);
    };
    return (
        <>
        
        <div id={styles.body}>
        <Header />
            <div id={styles.app}>
                <aside id={on ? styles.to_right : ''}>
                    <div className='col-12'>
                        <a href="#" onClick={handleOn}>
                            <FontAwesomeIcon icon={faAnglesRight} id={styles.icon} />
                         
                        </a>

                        <div id={styles.right_side_post}>
                            <input type="text" placeholder='Search artists' id={styles.rigth_side_input} />
                            <div id={styles.search_div} >
                            <FontAwesomeIcon icon={faMagnifyingGlass}  id={styles.search_icon} />
                            </div>
                            <a href="">save <br />
                                search</a>

                        </div >
                        <div className='col-lg-10 col-md-10 col-sm-12 col-xm-12' id={styles.content_right}>
                            <select name="select" className="select-option" id={styles.select_option_right_side}>
                                <option value="">list</option>
                                <option value="gril">grid</option>
                            </select>
                            <span>no results</span>
                            <button>newest</button>
                        </div>
                        <div className='col-12' id={styles.line}></div>
                        <div className='col-lg-11 col-md-10' id={styles.text}>
                          <span>Zero local results found. Here are some from nearby – change search area</span>
                          <span><FontAwesomeIcon icon={faStar}/>&nbsp;&nbsp;&nbsp;<p>3 may&nbsp;&nbsp;&nbsp;</p><a href="/PostAd"> Best chartered accountant In Usa </a></span>
                          <span><FontAwesomeIcon icon={faStar}/>&nbsp;&nbsp;&nbsp;<p>3 may&nbsp;&nbsp;&nbsp;</p><a href="/PostAd"> Best chartered accountant In Usa </a></span>
                          <span><FontAwesomeIcon icon={faStar}/>&nbsp;&nbsp;&nbsp;<p>3 may&nbsp;&nbsp;&nbsp;</p><a href="/PostAd"> Best chartered accountant In Usa </a></span>
                          <span><FontAwesomeIcon icon={faStar}/>&nbsp;&nbsp;&nbsp;<p>3 may&nbsp;&nbsp;&nbsp;</p><a href="/PostAd"> Best chartered accountant In Usa </a></span>
                          <span><FontAwesomeIcon icon={faStar}/>&nbsp;&nbsp;&nbsp;<p>3 may&nbsp;&nbsp;&nbsp;</p><a href="/PostAd"> Best chartered accountant In Usa </a></span>
                          <span><FontAwesomeIcon icon={faStar}/>&nbsp;&nbsp;&nbsp;<p>3 may&nbsp;&nbsp;&nbsp;</p><a href="/PostAd"> Best chartered accountant In Usa </a></span>
                          <span><FontAwesomeIcon icon={faStar}/>&nbsp;&nbsp;&nbsp;<p>3 may&nbsp;&nbsp;&nbsp;</p><a href="/PostAd"> Best chartered accountant In Usa </a></span>
                          <span><FontAwesomeIcon icon={faStar}/>&nbsp;&nbsp;&nbsp;<p>3 may&nbsp;&nbsp;&nbsp;</p><a href="/PostAd"> Best chartered accountant In Usa </a></span>
                          <span><FontAwesomeIcon icon={faStar}/>&nbsp;&nbsp;&nbsp;<p>3 may&nbsp;&nbsp;&nbsp;</p><a href="/PostAd"> Best chartered accountant In Usa </a></span>
                          <span><FontAwesomeIcon icon={faStar}/>&nbsp;&nbsp;&nbsp;<p>3 may&nbsp;&nbsp;&nbsp;</p><a href="/PostAd"> Best chartered accountant In Usa </a></span>
                          <span><FontAwesomeIcon icon={faStar}/>&nbsp;&nbsp;&nbsp;<p>3 may&nbsp;&nbsp;&nbsp;</p><a href="/PostAd"> Best chartered accountant In Usa </a></span>
                        </div>
                        <div className='col-lg-10 col-md-9 ' id={styles.two_btn}>
                            <button>back to top</button>
                            <button>back to top</button>
                        </div>
                    </div>
                </aside>

                {on && <Sider openClass="open" />}
            </div>


            </div>

        </>

    )
}

export default post;
