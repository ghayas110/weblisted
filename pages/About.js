import React from 'react'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div>
            <Header />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                      
                            <table className='mt-3'> 
                                <tbody>
                                    <tr className={styles.about_th}>
                                      <td className={styles.about_th1}><strong>using craigslist</strong></td>
                                       <td className={styles.about_th1}><strong>about craigslist</strong></td>
                                    </tr>
                                    <br />
                                    <tr className={styles.About_tr}>
                                        <td><a href="help">CL Help Pages</a> <br/> <span>need assistance?<br/></span></td>
                                        <td><a href="/craigslist_is_hiring">CL Jobs</a><br/><span>we're hiring in SF<br/></span></td>
                                    </tr>
                                    <br />
                                    <tr className={styles.About_tr}>
                                        <td ><a href="/faq">FAQ</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<a href="/faq-job">Jobs FAQ</a>) <br/><span>frequently asked questions</span></td>
                                        <td><a href="jim_buckmaster">Jim</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="craig_newmark">Craig</a> <br/><span>CEO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; founder</span></td>
                                    </tr>
                                    <br />
                                    <tr className={styles.About_tr}>
                                        <td><a href="terms.of.use">Terms Of Use</a><br/><span>please read carefully<br/></span></td>
                                        <td><a href="http://blog.craigslist.org/">craigslist Blog</a><br/><span>updates and etc</span></td>
                                    </tr>
                                    <br />
                                    <tr className={styles.About_tr}>
                                        <td><a href="privacy.policy">Privacy Policy</a><sup>new</sup> <br/> <span>user privacy info<br/></span></td>
                                        <td><a href="best">Best of craigslist</a><br/><span>voted by 'readers like you'</span></td>
                                    </tr>
                                    <br />
                                    <tr className={styles.About_tr}>
                                        <td><a href="https://www.craigslist.org/contact">Contact Form</a><br/><span>send us a note</span></td>
                                        <td><a href="https://www.youtube.com/watch?v=e2j_ZqopHC0">24 Hours on craigslist</a><br/><span>award-winning documentary</span></td>
                                    </tr>
                                    <br />
                                    <tr className={styles.About_tr}>
                                        <td><a href="https://forums.craigslist.org/?forumID=8">CL Feedback Forum</a><br/><span>suggestion box<br/></span></td>
                                        <td><a href="/about/charitable">Charitable Fund</a><br/><span>grants for 501(c)3 orgs<br/></span></td>
                                    </tr>
                                    <br />
                                    <tr className={styles.About_tr}>
                                        <td><a href="https://forums.craigslist.org/?forumID=9">CL Help Desk Forum</a><br/><span>tips from experienced users</span></td>
                                        <td><a href="/about/open_source">Open Source</a>&nbsp;<br/><span>it gets better</span></td>
                                    </tr>
                                    <br />
                                    <tr className={styles.About_tr}>
                                        <td><a href="scams">Avoiding Scams &amp; Fraud</a> <br/><span>rule #1 is "deal locally"</span></td>
                                        <td><a href="https://www.craigslist.org/about/security_researcher_appreciation_page">Security Kudos</a><br/><span>responsible disclosures<br/></span></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
