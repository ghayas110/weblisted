import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className='container-fluid' id={styles.header}>
            <div className='row' id={styles.row_header}>
                <div className='col-6' id={styles.head_name}>
                    <span id={styles.name_span}><a href="/">CL</a></span> &nbsp;&nbsp;
                    {/*<select name="select" id={styles.select_option} className="select-option">
                        <option value="">Country</option>
                        <option value="United State">United State</option>
                        <option value="Austailia">Austailia</option>
                        <option value="Canada">Canada</option>
                        <option value="England">England</option>
                    </select> <span id={styles.arrow}> </span>
                    <select name="select" id={styles.select_option} className="select-option">
                        <option value="">City</option>
                        <option value="New York">New York</option>
                        <option value="Landon">Landon</option>
                        <option value="Melbourne">Melbourne</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Option_two">Califoria</option>
                        <option value="Option_two">	Ottawa</option>
                        <option value="Option_two">	Vancouver</option>
                    </select> <span id={styles.arrow}>  </span>
                    <select name="select"  className="select-option" id={styles.select_option3 }>
                        <option value="">Services</option>
                        <option value="Pets">Pets</option>
                        <option value="rideshare">rideshare</option>
                        <option value="activity partners">activity partners</option>
                        <option value="missed connections">missed connections</option>
                        <option value="artists">artists</option>
                        <option value="volunteers">volunteers</option>
                        <option value="groups">groups</option>
    </select> */}
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
