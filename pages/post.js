/* eslint-disable react-hooks/rules-of-hooks */
import React, { main, useState, useEffect } from 'react';
import styles from '../styles/post.module.css'
import Sider from '../components/component/Sider';
import "bootstrap/dist/css/bootstrap.min.css";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Header from './Header'
import {JobList} from '../components/component/JobList'
import {jobdetail} from '../components/component/jobdetail'
import { collection, onSnapshot, orderBy, query,where } from 'firebase/firestore'
import { db } from '../firebase'
function post() {
    const [on, setOn] = useState(false);
    const [job, setJob] = useState([]);

    const getPost = () => {
        onSnapshot(
            query(collection(db,"data")), (snapshot)=>{setJob(snapshot.docs)
            console.log(snapshot.docs);
            })
        };
      useEffect(() => {
          getPost();
        }, [])
        const renderPost = () => {
            if (job && job?.length) {
             
              // console.log('state', img)
              return job.map((item, index) => {
                // eslint-disable-next-line react/jsx-key
                return <JobList
                  obj={item}
                  
                />
                
                
    
              })
            }
          };


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
                        {renderPost()}
                       
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
