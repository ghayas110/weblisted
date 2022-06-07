import React, { textarea, useState, useRef } from 'react'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/account_fianance.module.css"
import { useRouter } from 'next/router';
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../components/features/UderSlice';
import { data } from './data'



export default function account_fianance() {
    const [dataFetch, setDataFetch] = useState(data)
    const [posttitle, setPosttitle] = useState("");
    const [city, setCity] = useState("");
    const [postalcode, setPostalcode] = useState("");
    const [discription, setDiscription] = useState("");
    const [employetype, setEmployetype] = useState("");
    const [jobtitle, setJobtitle] = useState("");
    const [compensation, setCompensation] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const user = useSelector(selectUser) 
    const router = useRouter() 

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const docRef = await addDoc(collection(db, 'data'), {
             dataFetch:dataFetch,
             posttitle:posttitle,
             city:city,
             postalcode,postalcode,
             discription:discription,
             employetype:employetype,
             jobtitle:jobtitle,
             compensation:compensation,
             company:company,
             phone:phone,
             
          })
          
          alert("form submited")
          router.push("/")
        } catch (err) {
          alert(err)
        }
      }



    return (
        <div className={styles.body}>
            <Header />
            <section id={styles.account_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-5" id={styles.input1}>


                                    {dataFetch.createPost.map((item, index) =>
                                        <span className="option-label" key={index}>{
                                            item.subcat.map((innerItem, innerKey) =>
                                                <span key={innerKey}>{innerItem.form.map((mostInnerItem, mostInnerKey) =>
                                                    <span key={mostInnerKey}>{mostInnerItem.posting}    </span>
                                                )}</span>)}</span>
                                    )}

                                    <input value={posttitle} type="text" placeholder="post title" onChange={(e) => setPosttitle(e.target.value)} />

                                </div>
                                <div className="col-lg-5" id={styles.input1}>
                                {dataFetch.createPost.map((item, index) =>
                                    <span className="option-label" key={index}>{
                                        item.subcat.map((innerItem, innerKey) =>
                                            <span key={innerKey}>{innerItem.form.map((mostInnerItem, mostInnerKey) =>
                                                <span key={mostInnerKey}>{mostInnerItem.city}    </span>
                                            )}</span>)}</span>
                                )}
                                    <input value={city} type="text" placeholder="city" onChange={(e) => setCity(e.target.value)} />
                                    
                                </div>
                                <div className="col-lg-2" id={styles.input1}>
                                    {dataFetch.createPost.map((item, index) =>
                                        <span className="option-label" key={index}>{
                                            item.subcat.map((innerItem, innerKey) =>
                                                <span key={innerKey}>{innerItem.form.map((mostInnerItem, mostInnerKey) =>
                                                    <span key={mostInnerKey}>{mostInnerItem.postal}    </span>
                                                )}</span>)}</span>
                                    )}
                                    <input type="text" value={postalcode} placeholder="postal code" onChange={(e) => setPostalcode(e.target.value)} />
                                </div>
                                <div className="col-lg-12 mt-3" id={styles.TextArea}>
                                    <div className="row">
                                        <div className="col-md-6" id={styles.postselectText}>
                                            <span>Only one job description per posting please.</span>
                                            <a href="">Please see our FAQ for job posters</a>
                                            <p><b>{dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.subcat.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.form.map((mostInnerItem, mostInnerKey) =>
                                                            <span key={mostInnerKey}>{mostInnerItem.description}    </span>
                                                        )}</span>)}</span>
                                            )}</b></p></div>
                                        <div className="col-md-5" id={styles.postselect}>

                                        </div>
                                    </div>
                                    <textarea name="" id="" cols="30" rows="10" value={discription} placeholder="discription" onChange={(e) => setDiscription(e.target.value)} ></textarea>
                                </div>
                            </div>
                            {/* ------form--- */}

                        </div>

                    </div>
                </div>
            </section>
            <section id={styles.account_section} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10" id={styles.col_account}>
                            <div className="form-bg" id={styles.form_bg}>
                                <div className="row">
                                    <div className="col-md-offset-3 col-md-12" id={styles.col_12}>
                                        <form>
                                            <div className="form-group" id={styles.form_group}>
                                                <label className=" control-label" >
                                                    {dataFetch.createPost.map((item, index) =>
                                                        <span className="option-label" key={index}>{
                                                            item.subcat.map((innerItem, innerKey) =>
                                                                <span key={innerKey}>{innerItem.form.map((mostInnerItem, mostInnerKey) =>
                                                                    <span key={mostInnerKey}>{mostInnerItem.employetype}    </span>
                                                                )}</span>)}</span>
                                                    )}
                                                </label> <br />
                                                <select name="" id={styles.control_label}>
                                                    <option value="1">-</option>
                                                    <option value="1">full-time</option>
                                                    <option value="2">Part-time</option>
                                                    <option value="3">contract</option>
                                                    <option value="3">employee's choice</option>
                                                </select>
                                            </div>
                                            <div className="form-group inside" id={styles.inside}>
                                                <div className="checkbox" id={styles.checkbox}>
                                                    <label>
                                                        <input type="checkbox" /> direct contact by recruiters is ok
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" /> internship
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" /> non-profit organization
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" /> elecommuting ok
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={styles.job_title}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="row">
                                <div className='form-group'>
                                    <label htmlFor="" id={styles.job_title_label}>
                                        {dataFetch.createPost.map((item, index) =>
                                            <span className="option-label" key={index}>{
                                                item.subcat.map((innerItem, innerKey) =>
                                                    <span key={innerKey}>{innerItem.form.map((mostInnerItem, mostInnerKey) =>
                                                        <span key={mostInnerKey}>{mostInnerItem.jobtitle}    </span>
                                                    )}</span>)}</span>
                                        )}
                                                        
                                    </label>
                                    <div className='form-control' id={styles.job_title_search}>
                                    <input type="text" id={styles.input} className='form-control'  value={jobtitle} placeholder="job tittle" onChange={(e) => setJobtitle(e.target.value)} />
                                    </div>

                                </div>
                                <div className='form-group'>
                                    <label htmlFor="" id={styles.job_title_label}>
                                    {dataFetch.createPost.map((item, index) =>
                                        <span className="option-label" key={index}>{
                                            item.subcat.map((innerItem, innerKey) =>
                                                <span key={innerKey}>{innerItem.form.map((mostInnerItem, mostInnerKey) =>
                                                    <span key={mostInnerKey}>{mostInnerItem.compensation}    </span>
                                                )}</span>)}</span>
                                    )}
                                    
                                    </label>
                                    <div className='form-control' id={styles.job_title_search}>
                                    <input type="text" id={styles.input} className='form-control' value={compensation} placeholder="compensation" onChange={(e) => setCompensation(e.target.value)} />
                                    </div>

                                </div>
                                <div className='form-group'>
                                    <label htmlFor="" id={styles.job_title_label}>
                                        {dataFetch.createPost.map((item, index) =>
                                            <span className="option-label" key={index}>{
                                                item.subcat.map((innerItem, innerKey) =>
                                                    <span key={innerKey}>{innerItem.form.map((mostInnerItem, mostInnerKey) =>
                                                        <span key={mostInnerKey}>{mostInnerItem.company}    </span>
                                                    )}</span>)}</span>
                                        )}
                                        
                                    
                                    </label>
                                    <div className='form-control' id={styles.job_title_search}>
                                    <input type="text" id={styles.input} className='form-control'   value={company} placeholder="Company" onChange={(e) => setCompany(e.target.value)} />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id={styles.secForm}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="form-bg" id={styles.form_bg2}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-3 form-group" id={styles.form_group2}>
                                            <div className="row" id={styles.secForm_row}>
                                                <div className="col-md-4 ">
                                                    <label className="control-label" id={styles.control_label2}>
                                                    
                                                    {dataFetch.createPost.map((item, index) =>
                                                        <span className="option-label" key={index}>{
                                                            item.subcat.map((innerItem, innerKey) =>
                                                                <span key={innerKey}>{innerItem.form.map((mostInnerItem, mostInnerKey) =>
                                                                    <span key={mostInnerKey}>{mostInnerItem.phone}    </span>
                                                                )}</span>)}</span>
                                                    )}
                                                
                                                    
                                                    </label>
                                                    <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)}  id={styles.form_control2} />
                                                    <div id={styles.form_inside_list}>
                                                        <span><b> email privacy options [?]</b> </span>
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" checked="" /> &nbsp;CL mail relay (recommended)
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" checked="" /> &nbsp;show my real email address
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" checked="" /> &nbsp;no replies to this email
                                                        </label>
                                                    </div>


                                                </div>

                                                <div className="col-md-7" >
                                                    <div className="form-group inside " id={styles.inside2}>
                                                        <div className="radio" id={styles.radio}>
                                                            <label>
                                                                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />item1
                                                            </label>
                                                            <label>
                                                                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" checked="" />item2
                                                            </label>
                                                            <label>
                                                                <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" checked="" />item3
                                                            </label>
                                                            <div>

                                                            </div>
                                                        </div>
                                                        <div id={styles.form_inside}>
                                                            <div className="" id={styles.form_list_input} >
                                                                <label htmlFor="">
                                                                 {dataFetch.createPost.map((item, index) =>
                                                                    <span className="option-label" key={index}>{
                                                                        item.subcat.map((innerItem, innerKey) =>
                                                                            <span key={innerKey}>{innerItem.form.map((mostInnerItem, mostInnerKey) =>
                                                                                <span key={mostInnerKey}>{mostInnerItem.extension}    </span>
                                                                            )}</span>)}</span>
                                                                )}
                                                            </label>
                                                                <input type="text" />
                                                            </div>
                                                            <div className="" id={styles.form_list_input}>
                                                                <label htmlFor="">

                                                                {dataFetch.createPost.map((item, index) =>
                                                                    <span className="option-label" key={index}>{
                                                                        item.subcat.map((innerItem, innerKey) =>
                                                                            <span key={innerKey}>{innerItem.form.map((mostInnerItem, mostInnerKey) =>
                                                                                <span key={mostInnerKey}>{mostInnerItem.contact}    </span>
                                                                            )}</span>)}</span>
                                                                )}
                                                                
                                                                </label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div id={styles.form_inside2} >
                                                            <div className="" id={styles.form_list_input}>
                                                                <label htmlFor="">
                                                                
                                                                {dataFetch.createPost.map((item, index) =>
                                                                    <span className="option-label" key={index}>{
                                                                        item.subcat.map((innerItem, innerKey) =>
                                                                            <span key={innerKey}>{innerItem.form.map((mostInnerItem, mostInnerKey) =>
                                                                                <span key={mostInnerKey}>{mostInnerItem.phonenumber}    </span>
                                                                            )}</span>)}</span>
                                                                )}
                                                                
                                                                </label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className={styles.formbuttonsection}>
                <button onClick={handleSubmit} >Form Submit</button>
            </section>




        </div>
    )
};
