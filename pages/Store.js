import React from 'react'
import Header from '../pages/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/store.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from 'react-bootstrap/Carousel';


function Store() {
    return (
        <div className={styles.body}>
            <div className={styles.header00}>
                <Header />
            </div>

            <div className="container-fluid">

                <div className="row" id={styles.collist}>
                    <div className='col-lg-1'></div>
                    <div className="col-lg-11" >
                        <ul className={styles.storeheadul}>
                            <li>SAVE MORE ON APP</li>
                            <li>AFFILIATE PROGRAM</li>
                            <li>SELL ON CRAIGLIST</li>
                            <li>CUSTOMER CARE</li>
                            <li>TRACK MY ORDER</li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className='col-lg-12' id={styles.col12}>
                        <img src="/weblisted-store-logo.png" alt="" className={styles.storelogo} />

                        <div className={styles.Searchdiv}>
                            <div className="form-control " id={styles.search}>
                                <input type="text" placeholder='SEARCH' name="" id="" />
                                <FontAwesomeIcon icon={faSearch} className={styles.icon} />
                            </div>
                        </div>
                        <a href='' > <FontAwesomeIcon icon={faCartShopping} className={styles.iconCart} /> </a>
                    </div>
                    {/*<div className="col-lg-12" id={styles.divrecomm}>
                        <span>Most  Recommended</span>
                        <div className={styles.recom} ></div>
                        <div className={styles.recpost} id={styles.recpost1} >
                            <span className={styles.cart}>
                                <img src="/00v0v_6SFtGULNQ54z_0kE0dL_600x450.jpg" alt="" className={styles.image} />
                                <span className={styles.text}>Class Room</span>
                            </span>
                        </div>
    </div>*/}
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-sm-12 ">
                        <Carousel variant="dark">
                            <Carousel.Item className={styles.Carousel_Item} >
                                <img
                                    className="d-block w-100"
                                    src="/silder1.jpg"
                                    alt="First slide"
                                    id={styles.sliderImg}
                                />
                                <Carousel.Caption className={styles.Carousel_Caption}>
                                    <h1>First slide label</h1>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className={styles.Carousel_Item}>
                                <img
                                    className="d-block w-100"
                                    src="/slider3.jpg"
                                    alt="Second slide"
                                    id={styles.sliderImg}

                                />
                                <Carousel.Caption className={styles.Carousel_Caption}>
                                    <h1>Second slide label</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className={styles.Carousel_Item}>
                                <img
                                    className="d-block w-100"
                                    src="/slider2.png"
                                    alt="Third slide"
                                    id={styles.sliderImg}

                                />
                                <Carousel.Caption className={styles.Carousel_Caption}>
                                    <h1>Third slide label</h1>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row" id={styles.rowmart}>
                    <div className="col-lg-3 col-md-4 col-sm-4" id={styles.banner}>
                        <button className={styles.btns} >
                            <img src="/martlogo.png" alt="" />
                            <span>MART </span>
                        </button>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.btnsIcon} />

                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4" id={styles.banner}>
                        <button className={styles.btns} >
                            <img src="/martlogo.png" alt="" />
                            <span>FASHION</span>
                        </button>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.btnsIcon} />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4" id={styles.banner}>
                        <button className={styles.btns} >
                            <img src="/martlogo.png" alt="" />
                            <span>BEAUTY</span>
                        </button>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.btnsIcon} />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row" id={styles.Mall2}>
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-5" id={styles.Mall}>
                        <h5>FLAT SALE</h5>
                        <div className={styles.mallborder}>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-5" id={styles.Mall}>
                        <h5>CRAIGLIST MALL</h5>
                        <div className={styles.mallborder}>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5" id={styles.catrow}>
                    <h5>CATEGORY</h5>
                    <div className='col-md-12 col-lg-12 col-sm-12  col-xs-12' id={styles.category}>
                        <div className="row">
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>    <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>    <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className="w-100"></div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>    <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>    <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="container">
                <div className="row mt-4" id={styles.forsale}>
                    <h3>FOR SALE</h3>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row mt-4" id={styles.forsale}>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row mt-4" id={styles.forsale}>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid">
                <div className="row mt-4" id={styles.footrtstore}>
                    <div className="col-lg-3 col-md-3 col-sm-3" id={styles.footerlist}>
                        <div className={styles.listdiv}>
                            <span>Customer Care</span>
                            <ul className={styles.footerul}>
                                <li>Help Center</li>
                                <li>How to Buy</li>
                                <li>Corporate & Bulk Purchasing</li>
                                <li>Returns & Refunds</li>
                                <li>Daraz Shop</li>
                                <li>Contact Us</li>
                                <li>Purchase Protection</li>
                                <li>Daraz Pick up Points</li>
                                <li>Fulfilled by Daraz FBD</li>
                            </ul>
                            <br />
                        </div>
                        <div className={styles.listdiv}>
                            <span>Make Money With Us</span>
                            <ul className={styles.footerul}>
                                <li>Daraz University </li>
                                <li>Sell on Daraz</li>
                                <li>Join Daraz Affiliate Program</li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3" id={styles.footerlist}>
                        <div className={styles.listdiv}>
                            <span>Craiglist</span>
                            <ul className={styles.footerul}>
                                <li>Digital Payments </li>
                                <li>Daraz Cares </li>
                                <li>Daraz Blog </li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Privacy Policy</li>
                                <li>Online Shopping App</li>
                                <li>Online Grocery Shopping</li>
                                <li>Daraz Exclusive</li>
                                <li> How to shop on Daraz</li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className={styles.footlinks}>
                           <img src="/barstore.png" alt="" className={styles.footImg} />
                           <div className={styles.footlinktext}>
                           <span>happy shopping </span>
                            <span>Download App</span>
                            </div>
                        </div>
                        <div>
                            <img src="/linkimg.png" alt="" className={styles.footImglink} />
                            <img src="/linkimg.png" alt="" className={styles.footImglink} />
                            <img src="/linkimg.png" alt="" className={styles.footImglink} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store;