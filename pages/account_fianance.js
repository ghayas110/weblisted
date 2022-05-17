import React, { textarea } from 'react'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/account_fianance.module.css"

export default function account_fianance() {

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
                                                <label className=" control-label" >employe type</label> <br />
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
                                    <label htmlFor="" id={styles.job_title_label}>job title</label>
                                    <div className='form-control' id={styles.job_title_search}></div>

                                </div>
                                <div className='form-group'>
                                    <label htmlFor="" id={styles.job_title_label}>compensation</label>
                                    <div className='form-control' id={styles.job_title_search}></div>

                                </div>
                                <div className='form-group'>
                                    <label htmlFor="" id={styles.job_title_label}>company name</label>
                                    <div className='form-control' id={styles.job_title_search}></div>

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
                                            <label className="control-label" id={styles.control_label2}>Phone</label>
                                            <input type="text" className="form-control" id={styles.form_control2} />
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
                                                <label htmlFor="">phone number</label>
                                                <input type="text" />
                                                </div>
                                                <div className="" id={styles.form_list_input}>
                                                <label htmlFor="">contact name</label>
                                                <input type="text" />
                                                </div>
                                            </div>
                                            <div id={styles.form_inside2} >
                                                <div className="" id={styles.form_list_input}>
                                                <label htmlFor="">extension</label>
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
<section className='mt-5'>

</section>




        </div>
    )
};
