// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { textarea, useState, useRef } from 'react'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/account_fianance.module.css"
import { useRouter } from 'next/router';
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../components/features/UderSlice';
// import { data } from '../components/component/data'
import { setUserId } from 'firebase/analytics';



export default function account_fianance() {

    const [individual, setIndividual] = useState(true);
    const [Weekends, setWeekends] = useState('');
    const [Weekdays, setWeekdays] = useState('');
    const [Overnight, setOvernight] = useState('');
    const [Evening, setEvening] = useState('');
    const [Afternoon, setAfternoon] = useState('');
    const [morning, setMorning] = useState('');
    const [NoPay, setNoPay] = useState('');
    const [pay, setPay] = useState('');
    const [section, setSection] = useState(false);
    const [elecommuting, setElecommuting] = useState("");
    const [nonprofit, setNonprofit] = useState("");
    const [internship, setInternship] = useState("");
    const [contactbyrecruiters, setContactbyrecruiters] = useState("")
    const [dataFetch, setDataFetch] = useState()
    const [posttitle, setPosttitle] = useState("");
    const [city, setCity] = useState("");
    const [postalcode, setPostalcode] = useState("");
    const [discription, setDiscription] = useState("");
    const [employetype, setEmployetype] = useState("");
    const [jobtitle, setJobtitle] = useState("");
    const [select, setSelect] = useState("");
    const [compensation, setCompensation] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [HowmyPhoneNumber, setHowmyPhoneNumber] = useState('');
    const [PhoneCallsOK, setPhoneCallsOK] = useState('');
    const [TextSmsOK, setTextSmsOK] = useState('');
    const [CLMailRelay, setCLMailRelay] = useState('');
    const [RealEmail, setRealEmail] = useState('');
    const [NoEmail, setNoEmail] = useState('');
    const user = useSelector(selectUser)
    const router = useRouter()
    const { category } = router.query;
    const { subcategory } = router.query;
    console.log(category)
    console.log(subcategory)
    const handleCapacity = (e) => {

        setSelect(e.target.value);
    }

    const handleSection = () => {
        if (community === groups) {
            setSection()

        } else {

        }
    }


    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, 'Form'), {
                Weekends: Weekends,
                Weekdays: Weekdays,
                Overnight: Overnight,
                Evening: Evening,
                Afternoon: Afternoon,
                morning: morning,
                NoPay: NoPay,
                pay: pay,
                CLMailRelay: CLMailRelay,
                RealEmail: RealEmail,
                PhoneCallsOK: PhoneCallsOK,
                NoEmail: NoEmail,
                TextSmsOK: TextSmsOK,
                HowmyPhoneNumber: HowmyPhoneNumber,
                elecommuting: elecommuting,
                nonprofit: nonprofit,
                internship: internship,
                contactbyrecruiters: contactbyrecruiters,
                posttitle: posttitle,
                city: city,
                postalcode: postalcode,
                discription: discription,
                employetype: employetype,
                jobtitle: jobtitle,
                compensation: compensation,
                company: company,
                phone: phone,
                select: select,
                subcategory, subcategory,
                category: category,
            })
            alert("form submited")
            console.log(docRef)
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
                                    <span className="option-label">
                                        <span>posting</span>
                                    </span>

                                    <input value={posttitle} type="text" placeholder="post title" onChange={(e) => setPosttitle(e.target.value)} />
                                </div>

                                <div className="col-lg-5" id={styles.input1}>
                                    <span className="option-label" >
                                        <span>
                                            <span>city</span>
                                        </span>
                                    </span>
                                    <input value={city} type="text" placeholder="city" onChange={(e) => setCity(e.target.value)} />
                                </div>

                                <div className="col-lg-2" id={styles.input1}>
                                    <span className="option-label">
                                        <span>
                                            <span >postal</span>
                                        </span>
                                    </span>
                                    <input type="text" value={postalcode} placeholder="postal code" onChange={(e) => setPostalcode(e.target.value)} />
                                </div>
                                <div className="col-lg-12 mt-3" id={styles.TextArea}>
                                    <div className="row">
                                        <div className="col-md-6" id={styles.postselectText}>
                                            <span>Only one job description per posting please.</span>
                                            <a href="">Please see our FAQ for job posters</a>
                                            <p>
                                                <b>
                                                    <span className="option-label">
                                                        <span >
                                                            <span >discription </span>
                                                        </span>
                                                    </span>
                                                </b>
                                            </p>
                                        </div>

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
                                                    <span className="option-label">
                                                        <span >
                                                            <span>Employee Type</span>
                                                        </span></span>

                                                </label> <br />
                                                <select name="" id={styles.control_label} onChange={handleCapacity}>
                                                    <option value="full-time">full-time</option>
                                                    <option value="Part-time">Part-time</option>
                                                    <option value="contract">contract</option>
                                                    <option value="employee's choice">employee's choice</option>
                                                </select>
                                            </div>
                                            <div className="form-group inside" id={styles.inside}>
                                                <div className="checkbox" id={styles.checkbox}>
                                                    <label>
                                                        <input type="checkbox" value="contactbyrecruiters" onClick={(e) => setContactbyrecruiters(e.target.value)} /> direct contact by recruiters is ok
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" value="internship" onClick={(e) => setInternship(e.target.value)} /> internship
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" value="nonprofit" onClick={(e) => setNonprofit(e.target.value)} /> non-profit organization
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" value="elecommuting" onClick={(e) => setElecommuting(e.target.value)} /> elecommuting ok
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
            {/*----------------------section gigoffered hire service computer------------>*/}

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
                                                <label>
                                                    <input type="checkbox" value="contactbyrecruiters" onClick={(e) => setContactbyrecruiters(e.target.value)} /> direct contact by recruiters is ok
                                                </label>
                                            </div>
                                        </form>
                                        <div className='form-group'>
                                            <label className={styles.paylabel}>
                                                <input type="radio" value="NoPay" onClick={(e) => setNoPay(e.target.value)} /> no pay &nbsp;&nbsp;
                                                <input type="radio" value="pay" onClick={(e) => setPay(e.target.value)} /> pay
                                            </label><br />
                                            <label htmlFor="" id={styles.job_title_label}>
                                                <span className="option-label" >
                                                    <span >
                                                        <span >compensation</span>
                                                    </span></span>
                                            </label>
                                            <div className='form-control' id={styles.job_title_search}>
                                                <input type="text" id={styles.input} className='form-control' value={compensation} placeholder="compensation" onChange={(e) => setCompensation(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*----------------end-----------*/}

            {/*----------------------section housing offer room & share------------>*/}


            <section>
                <div className="container" id={styles.property_form_fields}>
                    <div className="row">
                        <div className="container" id={styles.property_form_fields1}>
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-lg-3 " id={styles.fields_search}>
                                    price
                                    <input type="number" />
                                    <select name="housing type" id={styles.list_pro}>
                                        <option value="">housing type </option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    sqft
                                    <input type="number" />
                                </div>
                                <div className="col-md-3 col-sm-3 col-lg-3" id={styles.fields_select}>
                                    <span>private room</span>
                                    <select name="housing type" id="">
                                        <option value=""> </option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <span>housing type</span>
                                    <select name="housing type" id="">
                                        <option value="">housing type </option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <span>laundry</span>
                                    <select name="" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <span>parking</span>

                                    <select name="" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <span>bedrooms</span>

                                    <select name="" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <span>bathroos</span>

                                    <select name="" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className="col-md-3 col-sm-3 col-lg-3" id={styles.fields_checkbox}>
                                    <span>
                                        <input type="checkbox" name="" id="" />cats ok
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" />dogs ok
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" />furnished
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" />no smoking
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" />wheelchair accessible
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" />air conditioning
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" />EV charging
                                    </span>

                                </div>
                                <div className="col-md-3 col-sm-3 col-lg-3" >
                                    <span >
                                        <input type="text" id={styles.pro_inp_2} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*----------------end-----------*/}

            {/*----------------------section housing offer appartment / house------------>*/}
            <section>
                <div className="container" id={styles.property_form_fields}>
                    <div className="row">
                        <div className="container" id={styles.property_form_fields1}>
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-lg-4  " id={styles.fields_search}>
                                    price
                                    <input type="number" />
                                    <select name="housing type" id={styles.list_pro}>
                                        <option value="">housing type </option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    sqft
                                    <input type="number" />
                                </div>
                                <div className="col-md-4 col-sm-4 col-lg-4" id={styles.fields_select}>
                                    <span>private room</span>
                                    <select name="housing type" id="">
                                        <option value=""> </option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <span>housing type</span>
                                    <select name="housing type" id="">
                                        <option value="">housing type </option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <span>laundry</span>
                                    <select name="" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <span>parking</span>

                                    <select name="" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <span>bedrooms</span>

                                    <select name="" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <span>bathroos</span>

                                    <select name="" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-sm-4 col-lg-4" id={styles.fields_checkbox}>
                                    <span>
                                        <input type="checkbox" name="" id="" />cats ok
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" />dogs ok
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" />furnished
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" />no smoking
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" />wheelchair accessible
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" />air conditioning
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" />EV charging
                                    </span>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <span></span>
                        <div className="col-md-12 col-sm-12 col-lg-12" >
                            <span >
                                <input type="text" id={styles.pro_inp_2} />
                            </span>
                           
                            <div className={styles.form_pro_sec}>
                                <label htmlFor="" className={styles.form_pro_sec1}>
                                <select name="" id="">
                                    <option value="">-</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select> 
                                 <select name="" id="">
                                    <option value="">-</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select> 
                                 <select name="" id="">
                                    <option value="">-  </option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*----------------end-----------*/}
            
            {/*----------------------section housing offer office and commercial------------>*/}
            <section id={styles.account_section} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10" id={styles.col_account}>
                        <div className="form-bg" id={styles.form_bg}>
                            <div className="row">
                                <div className="col-md-offset-3 col-md-12" id={styles.col_12}>
                                    <form>
                                        <div className="form-group" id={styles.form_group_sec2}>
                                            <label className=" control-label" >
                                                <span className="option-label">
                                                <span>rent</span>

                                                    </span>

                                            </label> <br />
                                            <select name="" id={styles.control_label} onChange={handleCapacity}>
                                                <option value="full-time">-</option>
                                                <option value="Part-time"></option>
                                                <option value="contract">contract</option>
                                                <option value="employee's choice">employee's choice</option>
                                            </select>
                                            <span>per</span>
                                            <select name="" id={styles.control_label} onChange={handleCapacity}>
                                            <option value="full-time">-</option>
                                            <option value="Part-time"></option>
                                            <option value="contract">contract</option>
                                            <option value="employee's choice">employee's choice</option>
                                        </select>

                                        
                                        <span className={styles.form_ooo}>
                                        <span>sqft</span>
                                        <input type="number" name='number'/>
                                        </span>
                                        </div>
                                        <div className="form-group inside" id={styles.inside}>
                                            <div className="checkbox" id={styles.checkbox}>
                                                <label>
                                                    <input type="checkbox" value="contactbyrecruiters" onClick={(e) => setContactbyrecruiters(e.target.value)} /> air conditioning  
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

            {/*----------------end-----------*/}
            {/*----------------------section housing want  wanted apts------------>*/}
            <section>
            <div className="container" id={styles.house_wan_pos} >
                <div className="row" id={styles.house_wan_pos2}>
                    <div className="col-lg-12" id={styles.house_wan_pos3}>
                                <input type="checkbox" name="" id="" /> &nbsp; cats ok <br />
                                <input type="checkbox" name="" id="" /> &nbsp;dogs ok <br />                       
                                <input type="checkbox" name="" id="" /> &nbsp;air conditioning <br />                       

                    </div>
                </div>
            </div>
        </section>  
            {/*----------------end-----------*/}
            {/*----------------------section housing want  wanted real estate------------>*/}
            <section>
            <div className="container" id={styles.house_wan_pos} >
                <div className="row" id={styles.house_wan_pos2}>
                    <div className="col-lg-12" id={styles.house_wan_pos3}>
                                <input type="checkbox" name="" id="" /> &nbsp; air conditioning<br />
                                              

                    </div>
                </div>
            </div>
        </section>  
            {/*----------------end-----------*/}


            {/*----------------------section resume I'm an individual seeking employment------------>*/}
            <section>
                <div className="container" id={styles.container_res} >
                    <div className="row" id={styles.resume_1}>
                        <div className="col-lg-10" id={styles.col_resume}>
                            <div className="form-control" id={styles.resume_input}>
                                <input type="checkbox" value="morning" onClick={(e) => setMorning(e.target.value)} />
                                <label htmlFor="">morning</label>
                                <input type="checkbox" value="Afternoon" onClick={(e) => setAfternoon(e.target.value)} />
                                <label htmlFor="">Afternoon</label>
                                <input type="checkbox" value="Evening" onClick={(e) => setEvening(e.target.value)} />
                                <label htmlFor="">Evening</label>
                                <input type="checkbox" value="Overnight" onClick={(e) => setOvernight(e.target.value)} />
                                <label htmlFor="">Overnight</label>
                                <input type="checkbox" value="Weekdays" onClick={(e) => setWeekdays(e.target.value)} />
                                <label htmlFor="">Weekdays  </label>
                                <input type="checkbox" value="Weekends" onClick={(e) => setWeekends(e.target.value)} />
                                <label htmlFor="">Weekends</label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row" id={styles.resume_post}>
                        <div className="col-lg-5" id={styles.col_resume_post}>
                            <div className="form-group" id={styles.resume_input_post}>
                                <select name="" id="" onChange={handleCapacity}>
                                    <option value="-">-</option>
                                    <option value="less the high school">less the high school</option>
                                    <option value="high school/GED<">high school/GED</option>
                                    <option value="some college">some college</option>
                                    <option value="master">master</option>
                                    <option value="bachlor's">bachlor's</option>
                                    <option value="doctoral">doctoral</option>

                                </select>

                            </div>

                        </div>
                        <div className="col-lg-5" id={styles.rsume_post_2}>
                            <div className="form-group" id={styles.resume_input_post}>
                                <input type="checkbox" /> &nbsp;&nbsp;&nbsp;  direct contact by recruiters is ok
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*----------------end-----------*/}

            <section id={styles.job_title}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="row">
                                <div className='form-group'>
                                    <label htmlFor="" id={styles.job_title_label}>
                                        <span className="option-label">
                                            <span >
                                                <span>Job Title</span>
                                            </span></span>
                                    </label>
                                    <div className='form-control' id={styles.job_title_search}>
                                        <input type="text" id={styles.input} className='form-control' value={jobtitle} placeholder="job tittle" onChange={(e) => setJobtitle(e.target.value)} />
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="" id={styles.job_title_label}>
                                        <span className="option-label" >
                                            <span >
                                                <span >compensation </span>
                                            </span></span>
                                    </label>
                                    <div className='form-control' id={styles.job_title_search}>
                                        <input type="text" id={styles.input} className='form-control' value={compensation} placeholder="compensation" onChange={(e) => setCompensation(e.target.value)} />
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="" id={styles.job_title_label}>
                                        <span className="option-label" >
                                            <span >
                                                <span >Company</span>
                                            </span></span>
                                    </label>
                                    <div className='form-control' id={styles.job_title_search}>
                                        <input type="text" id={styles.input} className='form-control' value={company} placeholder="Company" onChange={(e) => setCompany(e.target.value)} />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/*subcategory === I'm an individual seeking employmen section*/}

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
                                                        <span className="option-label">
                                                            <span>
                                                                <span>email    </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <input type="text" placeholder='enter your email' className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} id={styles.form_control2} />
                                                    <div id={styles.form_inside_list}>
                                                        <span><b> email privacy options [?]</b> </span>
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="CLMailRelay" onClick={(e) => setCLMailRelay(e.target.value)} /> &nbsp;CL mail relay (recommended)
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="RealEmail" onClick={(e) => setRealEmail(e.target.value)} /> &nbsp;show my real email address
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="NoEmail" onClick={(e) => setNoEmail(e.target.value)} /> &nbsp;no replies to this email
                                                        </label>
                                                    </div>


                                                </div>

                                                <div className="col-md-7 col-sm-12" >
                                                    <div className="form-group inside " id={styles.inside2}>
                                                        <div className="radio" id={styles.radio}>
                                                            <label id={styles.radio_label}>
                                                                <input type="radio" name="optionsRadios" id="optionsRadios1" value="HowmyPhoneNumber" onClick={(e) => setHowmyPhoneNumber(e.target.value)} />how my phone number

                                                            </label>
                                                            <label id={styles.radio_label}>
                                                                <input type="radio" name="optionsRadios" id="optionsRadios2" value="PhoneCallsOK" onClick={(e) => setPhoneCallsOK(e.target.value)} />phone calls OK
                                                            </label>
                                                            <label id={styles.radio_label}>
                                                                <input type="radio" name="optionsRadios" id="optionsRadios3" value="TextSmsOK" onClick={(e) => setTextSmsOK(e.target.value)} />text/sms OK
                                                            </label>
                                                            <div>

                                                            </div>
                                                        </div>
                                                        <div id={styles.form_inside}>
                                                            <div className="" id={styles.form_list_input} >
                                                                <label htmlFor="">
                                                                    <span className="option-label">
                                                                        <span >
                                                                            <span > Extension   </span>
                                                                        </span></span>
                                                                </label>
                                                                <input type="text" />
                                                            </div>
                                                            <div className="" id={styles.form_list_input}>
                                                                <label htmlFor="">
                                                                    <span className="option-label" >
                                                                        <span >
                                                                            <span > Contact   </span>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div id={styles.form_inside2} >
                                                            <div className="" id={styles.form_list_input}>
                                                                <label htmlFor="">
                                                                    <span className="option-label">
                                                                        <span>
                                                                            <span >Phone Number   </span>
                                                                        </span>
                                                                    </span>
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
                <button onClick={handleSubmit} >Form   Submit</button>
            </section>




        </div>
    )
};
