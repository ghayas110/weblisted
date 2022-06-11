import React, { useState, useRef } from 'react'
import Header from './Header'
import Link from "next/link"
import styles from "../styles/create_post.module.css"
import { data } from '../components/component/data'
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';


export default function Create_post() {

    const [select, setSelect] = useState([])
    const [jobOffered, setJobOffered] = useState([])
    const [resume, setResume] = useState([])

    const handleChecked = async (e) => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, 'category'), {

                jobOffer:jobOffer,
                gigoffered:gigoffered,
                resume: resume,
                housingOffered:housingOffered,
                housingWanted:housingWanted,
                ForSaleByOwner:ForSaleByOwner,
                ForSaleByDealer:ForSaleByDealer,
                WantedByOwner : WantedByOwner,
                WantedByDealer:WantedByDealer,
                serviceOffered:  serviceOffered,    
            })

            alert("form submited")

        } catch (err) {
            alert(err)
        }
    }


    return (
        <div>
            <Header />
            <div className="container" id={styles.container}>
                <span>please limit each posting to a single area and category, once per 48 hours</span> <br />
                <span> <b> what type of posting is this:</b> (see prohibited list before posting.)</span>

                <div className="col-lg-6 col-md-8">
                    <ul className="selection-list" id={styles.radio_list}>
                        <li>
                            <label>
                                <span className="left-side">
                                    <input type="radio" name="id" value=" job offer" onChange={handleChecked} />
                                </span>&nbsp;&nbsp;
                                <span className="right-side">
                                   job offer
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span className="left-side">
                                    <input type="radio" name="id" value="go" />
                                </span>&nbsp;&nbsp;
                                <span className="right-side">
                                    gig offered
                                    <i>(I'm hiring for a short-term, small or odd job)</i>
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span className="left-side">
                                    <input type="radio" name="id" value="resume" onChange={handleChecked} />
                                </span>&nbsp;&nbsp;
                                <span className="right-side">
                                    resume / job wanted
                                </span>
                            </label>
                        </li>
                        <li className="start-of-grouping">
                            <label>
                                <span className="left-side">
                                    <input type="radio" name="id" value="ho" />
                                </span>&nbsp;&nbsp;
                                <span className="right-side">
                                    housing offered
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span className="left-side">
                                    <input type="radio" name="id" value="housing wanted" onChange={handleChecked} />
                                </span>&nbsp;&nbsp;
                                <span className="right-side">
                                    housing wanted
                                </span>
                            </label>
                        </li>
                        <li className="start-of-grouping">
                            <label>
                                <span className="left-side">
                                    <input type="radio" name="id" value="for sale by owner" onChange={handleChecked} />
                                </span>&nbsp;&nbsp;
                                <span className="right-side">
                                    for sale by owner
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span className="left-side">
                                    <input type="radio" name="id" value="for sale by dealer" onChange={handleChecked} />
                                </span>&nbsp;&nbsp;
                                <span className="right-side">
                                    for sale by dealer
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span className="left-side">
                                    <input type="radio" name="id" value="wanted by owner" onChange={handleChecked} />
                                </span>&nbsp;&nbsp;
                                <span className="right-side">
                                    wanted by owner
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span className="left-side">
                                    <input type="radio" name="id" value="wanted by dealer" onChange={handleChecked} />
                                </span>&nbsp;&nbsp;
                                <span className="right-side">
                                    wanted by dealer
                                </span>
                            </label>
                        </li>
                        <li className="start-of-grouping">
                            <label>
                                <span className="left-side">
                                    <input type="radio" name="id" value="service offered" onChange={handleChecked} />
                                </span>&nbsp;&nbsp;
                                <span className="right-side">
                                    service offered
                                </span>
                            </label>
                        </li>
                        <li className="start-of-grouping">
                            <label>
                                <span className="left-side">
                                    <input type="radio" name="id" value="community" onChange={handleChecked} />
                                </span>&nbsp;&nbsp;
                                <span className="right-side">
                                    community
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <span className="left-side">
                                    <input type="radio" name="id" value="event / className" onChange={handleChecked} />
                                </span>&nbsp;&nbsp;
                                <span className="right-side">
                                    event / className
                                </span>

                            </label>
                        </li>
                    </ul>
                    <button type="submit" className="pickbutton" name="go" value="Continue" id={styles.button_radio}><a href="/Job">continue</a></button>
                </div>
            </div>

        </div>
    )
}
