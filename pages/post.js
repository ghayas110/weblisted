/* eslint-disable react-hooks/rules-of-hooks */
import React, { main, useState, useEffect } from 'react';
import styles from '../styles/post.module.css'
import Sider from '../components/component/Sider';
import "bootstrap/dist/css/bootstrap.min.css";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from './Header'
import { JobList } from '../components/component/JobList'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { db } from '../firebase'
import { useRouter } from 'next/router';
import { Category } from 'styled-icons/boxicons-regular';
function post() {

    const router = useRouter()
    const { openCat,city } = router.query;
    const [on, setOn] = useState(true);
    const [job, setJob] = useState([]);
    const [selectData, setSelectData] = useState();
    // const [cityName,setCityName] = useState();
    console.log("categor", openCat);
    console.log("categor", city);
  
    
    const getPost = () => {


        onSnapshot(

            query(collection(db, "Form"), where("subcategory", "==", openCat), where("city", "==", city)), (snapshot) => {
                setJob(snapshot.docs)

            })
    };
    console.log(job)
    const renderPost = () => {
        if (job && job?.length) {

            console.log('state', job)
            return job.map((item, index) => {
                // eslint-disable-next-line react/jsx-key
                return <JobList
                    obj={item}
                />
            })
        }
    };

   
    useEffect(() => {
    
        if(city){
            getPost();
        }

    }, [city])

    const handleOn = () => {
        setOn(!on);

    };

    console.log(city, "city")
    return (
        <>
            <div id={styles.body}>
                <Header />
                <div id={styles.app}>
                    <aside id={on ? styles.to_right : ''}>
                        <div className='col-md-12' id={styles.cityName}> 
                        <h1>{city}</h1>
                            <a href="#" onClick={handleOn}>
                                <FontAwesomeIcon icon={faAnglesRight} id={styles.icon} />
                            </a>
                            <div id={styles.right_side_post}>
                                <input type="text" placeholder='Search artists' id={styles.rigth_side_input} />
                                <div id={styles.search_div} >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} id={styles.search_icon} />
                                </div>
                                <a href="">save <br /> search</a>
                            </div>
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
