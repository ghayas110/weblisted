import React from 'react'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/help.module.css"

export default function help() {
  return (
    <section >
      < Header />
      <div className="container" id={styles.help_container}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-control" id={styles.help_search}>
              <input type="text" placeholder='Seach' />
              <img src="helpsearch.png" alt="" id={styles.help_img} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className={styles.heading_help}>
              <span> classified postings </span>
            </div>
            <ul className={styles.list_ul}>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className={styles.heading_help}>
              <span> classified postings </span>
            </div>
            <ul className={styles.list_ul}>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>

            </ul>
            <div className={styles.heading_help}>
              <span> classified postings </span>
            </div>
            <ul className={styles.help_ul}>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className={styles.heading_help}>
              <span> classified postings </span>
            </div>
            <ul className={styles.list_ul}>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <div className={styles.heading_help}>
              <span> classified postings </span>
            </div>
            <ul className={styles.list_ul}>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
              <li><a href="">postings</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
