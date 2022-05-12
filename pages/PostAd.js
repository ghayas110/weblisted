import React from 'react'
import styles from "../styles/postadd.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function postadd() {
    return (
        <>
        <div className='container'>
            <div className='col-lg-12 col-md-12 col-sm-12' id={styles.bg}>
                <ul>
                    <li><a href="/post">CL</a></li>
                    <li><a href="#">indore</a></li>
                    <li><a href="#">jobs</a></li>
                    <li><a href="#">Science/biotech</a></li>
                </ul>
                <ul>
                    <li><a href="/post">Post</a></li>
                    <li><a href="#">Account</a></li>
                </ul>

            </div>
            <div className={styles.cg}>
                <ul>
                    <li><a href="#">◀  prev </a></li>
                    <li><a href="#"> next ▶ </a></li>
                </ul>
            </div>
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
            <div className='container' id={styles.txt}>

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

            <div id={styles.bg}>
                <ul>
                    <li><a>© 2022 craigslist</a></li>
                    <li><a href="#">help</a></li>
                    <li><a href="#">safety</a></li>
                    <li><a href="#">privacy</a></li>
                    <li><a href="#">feedback</a></li>
                    <li><a href="#">terms</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">craigslist app</a></li>
                    <li><a href="#">cl is hiring</a></li>
                </ul>
            </div>




        </>
    )
}

export default postadd