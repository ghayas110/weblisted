import React from 'react'
import Link from 'next/link';
import styles from "../styles/postadd.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function postadd() {

    return (
        <>
            <div className='container-fluid' >

                <div className='col-lg-12 col-md-12 col-sm-12' id={styles.bg}>
                    <ul className={styles.bg_list}>
                        <li><Link href="/post">CL</Link></li>&nbsp;&nbsp;&nbsp;
                        <li><Link href="#">indore</Link></li>&nbsp;&nbsp;&nbsp;
                        <li><Link href="#">jobs</Link></li>&nbsp;&nbsp;&nbsp;
                        <li><Link href="#">Science/biotech</Link></li>&nbsp;&nbsp;&nbsp;
                        <li><Link href="/post">Post</Link></li>&nbsp;&nbsp;&nbsp;
                        <li><Link href="#">Account</Link></li>
                    </ul>
                </div>
                <div className="col-lg-12">
                    <div className={styles.cg}>
                        <ul>
                            <li><Link href="#">◀  prev </Link></li>
                            <li><Link href="#"> next ▶ </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className={styles.mm}>
                        <li> <button >Reply</button></li>
                        <li>Favorite</li>
                        <li>hide</li>
                        <li>flag</li>
                        <li>share</li>
                        <li>posted 14 days ago</li>
                        <li><a href="#"> print</a> </li>
                    </div>
                    <h3>Production Technician (Wilson, NC)<br></br></h3>
                </div>
                <div className="col-lg-12">
                    <div className={styles.nmn}>
                        <table>
                            <tr>
                                <td>
                                    <img src="logo.jpg" alt="bot"></img>
                                </td>

                                <tr><td><button>compensation: $15/18/h on W2</button></td></tr>
                                <tr><td><button>employment type: contract</button></td></tr>
                                <tr><td><button>job title: Production Technician</button></td></tr>
                            </tr>

                        </table>
                    </div>
                </div>

            </div>

            <div className='container-fluid' id={styles.txt}>

                <span>
                    We are looking for a Production Technician in Wilson, NC for a 6+ months contract position. Please send me your updated resume along with rate expectations at show contact info .
                    Job Description:
                    Position: Production Technician
                    Location: Wilson, NC (2nd shift, 2:00 PM to 10:30 PM)
                    Duration: 6+ months contract position
                    Client: Direct Client
                    Description:
                    ponsible for taking multiple excipients and active raw material through a design manufacturing process that produces a finished dosage form (tablet or capsule) for the consumer. Operate and troubleshoot manufacturing equipment. Document activities as appropriate and perform specified quality checks.
                    · Demonstrates proficiency in the set-up, operation and cleaning of designated pharmaceutical equipment in the encapsulation/compression/tableting process.
                    · Performs in-process testing, which may include SPC, AQL, LOD and SIVE testing.
                    · Perfors verification of processing steps and proper documents.
                    · Able to write comments, with assistance from more senior technicians.
                    · Maintains adequate right-the first-time documentation results.
                    · Properly identifies equipment and quality issues.
                    · Learns common problems with equipment through extensive use and increased knowledge. Appropriately utilizes personal protective equipment at all times
                    · Understands protocols for resolving equipment issues. Knows and understands key department objectives, such as safety, quality, and output.
                    Requirements:
                    · Encapsulation, Compression, Solid Dose, Pharmaceutical, Bio works Certificate.
                    · HS Diploma.
                    · Documentation.
                    · SPC.
                    · Manufacturing Process.
                    · Process Testing.
                    Additional Skills:
                    · Quality Checks.
                    · Statistical Process Control.
                    do NOT contact us with unsolicited services or offers
                </span>
            </div>
            <div className="container-fluid" id={styles.footer}>
                <footer className={styles.footer}>
                    <ul className={styles.clfooter}>
                        <li>© 2022 <span className={styles.desktop}>craigslist</span><span className={styles.mobile}>CL</span></li>
                        <li><Link href="">help</Link></li>
                        <li><Link href="">safety</Link></li>
                        <li className={styles.desktop}><Link href="">privacy</Link></li>
                        <li className={styles.desktop}><Link href="">feedback</Link></li>
                        <li><Link href="">terms</Link></li>
                        <li><Link href="">about</Link></li>
                        <li><Link href="">craigslist app</Link></li>
                        <li><Link href="">cl is hiring</Link></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}
