import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className='container-fluid' id={styles.header}>
            <div className='row' id={styles.row_header}>
                <div className='col-6' id={styles.head_name}>
                    <span id={styles.name_span}><a href="">CL</a></span> &nbsp;&nbsp;
                    <select name="select" id={styles.select_option} className="select-option">
                        <option value="">dalis</option>
                        <option value="Option_one">Option one</option>
                        <option value="Option_two">Option two</option>
                        <option value="Option_two">Option thee</option>
                        <option value="Option_two">Option four</option>
                    </select> <span id={styles.arrow}> </span>
                    <select name="select" id={styles.select_option} className="select-option">
                        <option value="">dalis</option>
                        <option value="Option_one">Option one</option>
                        <option value="Option_two">Option two</option>
                        <option value="Option_two">Option thee</option>
                        <option value="Option_two">Option thee</option>
                        <option value="Option_two">Option thee</option>
                        <option value="Option_two">Option thee</option>
                        <option value="Option_two">Option four</option>
                    </select> <span id={styles.arrow}>  </span>
                    <select name="select"  className="select-option" id={styles.select_option3 }>
                        <option value="">dalis</option>
                        <option value="Option_one">Option one</option>
                        <option value="Option_two">Option two</option>
                        <option value="Option_two">Option thee</option>
                        <option value="Option_two">Option thee</option>
                        <option value="Option_two">Option thee</option>
                        <option value="Option_two">Option thee</option>
                        <option value="Option_two">Option four</option>
                    </select> 
                </div>
                <div className='col 6' >
                    <div id={styles.header_rightside}>
                            <span id={styles.header_rightside_text}><a href="">post |  account</a></span>
                    </div>
                </div>
            </div>

        </div>
    )
}
