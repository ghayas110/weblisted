import React from 'react'
import styles from '../../styles/store.module.css'
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";


function Slider() {
  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12 ">
            <Carousel variant="dark">
                <Carousel.Item className={styles.Carousel_Item} >
                    <img
                        className="d-block w-100"
                        src="/weblisted_banner1.jpg"
                        alt="First slide"
                        id={styles.sliderImg}
                    />
                    {/*<Carousel.Caption className={styles.Carousel_Caption}>
                        <h1>First slide label</h1>
                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item className={styles.Carousel_Item}>
                    <img
                        className="d-block w-100"
                        src="/weblisted_banner2.jpg"
                        alt="Second slide"
                        id={styles.sliderImg}

                    />
                   {/* <Carousel.Caption className={styles.Carousel_Caption}>
                        <h1>Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className={styles.Carousel_Item}>
                    <img
                        className="d-block w-100"
                        src="/weblisted_banner3.jpg"
                        alt="Third slide"
                        id={styles.sliderImg}

                    />
                    {/*<Carousel.Caption className={styles.Carousel_Caption}>
                        <h1>Third slide label</h1>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
               </Carousel.Caption>*/ }
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
</div>
  )
}

export default Slider