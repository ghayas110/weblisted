import React, { useState } from 'react'
import Header from './Header'
import Link from 'next/link'
import styles from "../styles/create_post.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {data}  from '../components/component/data'





const Job = () => {
    
    const [dataFetch, setDataFetch] = useState(data)

    return (
        <div>
            <Header />
            <div className="container" id={styles.container}>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-10">
                        <form id="postingForm" className={styles.jobpost} action="http://localhost:3000/account_fianance" method="post">
                            <div className="new-form" id="new-edit">
                                <link type="text/css" rel="stylesheet" media="all" href="//www.craigslist.org/styles/JSONForm.css?v=73d36127a22f4c44c8ddbeb974b83460" />
                                <link type="text/css" rel="stylesheet" media="all" href="//www.craigslist.org/styles/posting-process-edit.css?v=932f708dd7f72971099c4fef37a08f6c" />
                                <div className={styles.json_form}>
                                    <div className={styles.json_form_item}>
                                        <p className={styles.formnote}>
                                            <b>please choose a category:</b>
                                            (see <Link href="/account_fianance">prohibited</Link> list before posting.)
                                        </p>
                                    </div>

                                    <label className={styles.variant_radio}>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="24" />
                                            <div>

                                                {dataFetch.createPost.map((item, index) =>
                                                    <span className="option-label" key={index}>{
                                                        item.subcat.map((innerItem, innerKey) =>
                                                            <span key={innerKey}>{innerItem.Accfin}</span>)}</span>
                                                )}
                                                

                                            </div>
                                        </label>

                                        <label className="radio-option">
                                            <input type="radio"  className="json-form-input id" name="id" value="24" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.subcat.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.admin}</span>)}</span>
                                            )}

                                            
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="48" />
                                            <div>
                                                <span className="option-label">architect/engineer/cad</span>
                                                <span className="option-label-addendum"> <span className="parenthetical">(no IT/computer jobs here please)</span></span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="25" />
                                            <div>
                                                <span className="option-label">art/media/design</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="12" />
                                            <div>
                                                <span className="option-label">business/mgmt</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="100" />
                                            <div>
                                                <span className="option-label">customer service</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="57" />
                                            <div>
                                                <span className="option-label">education/teaching</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="15" />
                                            <div>
                                                <span className="option-label">et cetera</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="129" />
                                            <div>
                                                <span className="option-label">food/beverage/hospitality</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="130" />
                                            <div>
                                                <span className="option-label">general labor</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="61" />
                                            <div>
                                                <span className="option-label">government</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="26" />
                                            <div>
                                                <span className="option-label">healthcare</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="54" />
                                            <div>
                                                <span className="option-label">human resource</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="47" />
                                            <div>
                                                <span className="option-label">legal/paralegal</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="128" />
                                            <div>
                                                <span className="option-label">manufacturing</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="13" />
                                            <div>
                                                <span className="option-label">marketing/advertising/pr</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="28" />
                                            <div>
                                                <span className="option-label">nonprofit</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="127" />
                                            <div>
                                                <span className="option-label">real estate</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="27" />
                                            <div>
                                                <span className="option-label">retail/wholesale</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="49" />
                                            <div>
                                                <span className="option-label">sales</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="126" />
                                            <div>
                                                <span className="option-label">salon/spa/fitness</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="75" />
                                            <div>
                                                <span className="option-label">science/biotech</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="131" />
                                            <div>
                                                <span className="option-label">security</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="59" />
                                            <div>
                                                <span className="option-label">skilled trades/artisan</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="21" />
                                            <div>
                                                <span className="option-label">software/qa/dba/etc</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="50" />
                                            <div>
                                                <span className="option-label">systems/networking</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="55" />
                                            <div>
                                                <span className="option-label">technical support</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="125" />
                                            <div>
                                                <span className="option-label">transportation</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="52" />
                                            <div>
                                                <span className="option-label">tv/film/video/radio</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="11" />
                                            <div>
                                                <span className="option-label">web/html/info design</span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="16" />
                                            <div>
                                                <span className="option-label">writing/editing</span>
                                            </div>
                                        </label>
                                    </label>

                                    <div className={styles.json_form_item}>

                                    </div>
                                    <div className={styles.json_form_group}>
                                        <div className={styles.submit_button}>
                                            <button type="submit" name="go" value="Continue" className={styles.go_pickbutton}><a href="/account_fianance">continue</a></button>
                                            
                                        </div>
                                    </div>
                                    <input type="hidden" name="cryptedStepCheck" value="U2FsdGVkX183MDk0NTcwOaay6GKoUgbdjl6TfXV2JDiNgNBSZo8R9_mdiTaBYv58" className="cryptedStepCheck" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Job;
