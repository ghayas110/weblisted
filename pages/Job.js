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
                                                        item.jobType.map((innerItem, innerKey) =>
                                                            <span key={innerKey}>{innerItem.Accfin}</span>)}</span>
                                                )}
                                                

                                            </div>
                                        </label>

                                        <label className="radio-option">
                                            <input type="radio"  className="json-form-input id" name="id" value="24" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.admin}</span>)}</span>
                                            )}

                                            
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="48" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.architect}</span>)}</span>
                                            )}
                                                <span className="option-label-addendum"> <span className="parenthetical">(no IT/computer jobs here please)</span></span>
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="25" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.art}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="12" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.business}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="100" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.customer}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="57" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.education}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="15" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.etcetera}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="129" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.food}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="130" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.general}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="61" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.government}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="26" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.healthcare}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="54" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.humanresource}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="47" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.legalparalegal}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="128" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.manufacturing}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="13" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.marketing}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="28" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.nonprofit}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="127" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.realestate}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="27" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.retailwholesale}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="49" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.sales}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="126" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.salon}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="75" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.sciencebiotech}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="131" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.security}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="59" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.skilled}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="21" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.software}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="50" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.systemsnetworking}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="55" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.technical}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="125" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.transportation}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="52" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.tv}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="11" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.web}</span>)}</span>
                                            )}
                                            </div>
                                        </label>
                                        <label className="radio-option">
                                            <input type="radio" className="json-form-input id" name="id" value="16" />
                                            <div>
                                            {dataFetch.createPost.map((item, index) =>
                                                <span className="option-label" key={index}>{
                                                    item.jobType.map((innerItem, innerKey) =>
                                                        <span key={innerKey}>{innerItem.writing}</span>)}</span>
                                            )}
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
