import React from 'react'
import Header from './Header'
import styles from "../styles/create_post.module.css"

export default function Job() {
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
                                <input type="radio" name="id" value="jo" />
                            </span> &nbsp;&nbsp;
                            <span className="right-side">
                                job offered
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
                                <input type="radio" name="id" value="jw" />
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
                                <input type="radio" name="id" value="hw" />
                            </span>&nbsp;&nbsp;
                            <span className="right-side">
                                housing wanted
                            </span>
                        </label>
                    </li>
                    <li className="start-of-grouping">
                        <label>
                            <span className="left-side">
                                <input type="radio" name="id" value="fso" />
                            </span>&nbsp;&nbsp;
                            <span className="right-side">
                                for sale by owner
                            </span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <span className="left-side">
                                <input type="radio" name="id" value="fsd" />
                            </span>&nbsp;&nbsp;
                            <span className="right-side">
                                for sale by dealer
                            </span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <span className="left-side">
                                <input type="radio" name="id" value="iwo" />
                            </span>&nbsp;&nbsp;
                            <span className="right-side">
                                wanted by owner
                            </span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <span className="left-side">
                                <input type="radio" name="id" value="iwd" />
                            </span>&nbsp;&nbsp;
                            <span className="right-side">
                                wanted by dealer
                            </span>
                        </label>
                    </li>
                    <li className="start-of-grouping">
                        <label>
                            <span className="left-side">
                                <input type="radio" name="id" value="so" />
                            </span>&nbsp;&nbsp;
                            <span className="right-side">
                                service offered
                            </span>
                        </label>
                    </li>
                    <li className="start-of-grouping">
                        <label>
                            <span className="left-side">
                                <input type="radio" name="id" value="c" />
                            </span>&nbsp;&nbsp;
                            <span className="right-side">
                                community
                            </span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <span className="left-side">
                                <input type="radio" name="id" value="e" />
                            </span>&nbsp;&nbsp;
                            <span className="right-side">
                                event / className
                            </span>
                         
                        </label>
                    </li>
                </ul>  
                <button type="submit" className="pickbutton" name="go" va lue="Continue" id={styles.button_radio}><a href="/account_fianance">continue</a></button> 
        </div>
    </div>

</div>
  )
}
