import React from 'react'
import styles from '../styles/CheckOut.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CheckOut() {
    return (
        <div className={styles.card} >
        <div className="row" id={styles.row}>
            <div className="col-md-8" id={styles.cart}>
                <div className={styles.title}>
                    <div className="row" id={styles.row}>
                        <div className="col" id={styles.col} ><h4><b>Shopping Cart</b></h4></div>
                        <div className="col align-self-center text-right text-muted">3 items</div>
                    </div>
                </div>    
                <div className="row border-top border-bottom" id={styles.row}>
                    <div className="row main align-items-center" id={styles.row}>
                        <div className="col-2"><img className={styles.img_fluid} src="https://i.imgur.com/1GrakTl.jpg" /></div>
                        <div className="col" id={styles.col}>
                            <div className="row text-muted" id={styles.row}>Shirt</div>
                            <div className="row" id={styles.row}>Cotton T-shirt</div>
                        </div>
                        <div className="col" id={styles.col} >
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                        </div>
                        <div className="col" id={styles.col}>&euro; 44.00 <span className={styles.close}>&#10005;</span></div>
                    </div>
                </div>
                <div className="row" id={styles.row}>
                    <div className="row main align-items-center" id={styles.row}>
                        <div className="col-2" id={styles.col_2}><img className={styles.img_fluid} src="https://i.imgur.com/ba3tvGm.jpg" /></div>
                        <div className="col" id={styles.col}>
                            <div className="row text-muted" id={styles.row}>Shirt</div>
                            <div className="row" id={styles.row}>Cotton T-shirt</div>
                        </div>
                        <div className="col" id={styles.col} >
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                        </div>
                        <div className="col" id={styles.col}>&euro; 44.00 <span className={styles.close}>&#10005;</span></div>
                    </div>
                </div>
                <div className="row border-top border-bottom" id={styles.row}>
                    <div className="row main align-items-center" id={styles.row}>
                        <div className="col-2"><img className={styles.img_fluid} src="https://i.imgur.com/pHQ3xT3.jpg" /></div>
                        <div className="col" id={styles.col}>
                            <div className="row text-muted" id={styles.row}>Shirt</div>
                            <div className="row" id={styles.row}>Cotton T-shirt</div>
                        </div>
                        <div className="col" id={styles.col}>
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                        </div>
                        <div className="col" id={styles.col}>&euro; 44.00 <span className={styles.close}>&#10005;</span></div>
                    </div>
                </div>
                <div className={styles.back_to_shop}><a href="#"><FontAwesomeIcon icon={faArrowCircleLeft } /></a><span className="text-muted">Back to shop</span></div>
            </div>
            <div className="col-md-4" id={styles.summary}>
                <div><h5><b>Summary</b></h5></div>
                <hr />
                <div className="row"id={styles.row}> 
                    <div className="col" id={styles.col} >ITEMS 3</div>
                    <div className="col text-right">&euro; 132.00</div>
                </div>
                <form className={styles.checkform}>
                    <p>SHIPPING</p>
                    <select><option className={styles.text_muted}>Standard-Delivery- &euro;5.00</option></select>
                    <p>GIVE CODE</p>
                    <input id={styles.code} placeholder="Enter your code" />
                </form>
                <div className="row" id={styles.row}>
                    <div className="col" id={styles.col}>TOTAL PRICE</div>
                    <div className="col text-right">&euro; 137.00</div>
                </div>
                <button className={styles.btn}>CHECKOUT</button>
            </div>
        </div>
        
    </div>
    )
}

export default CheckOut
