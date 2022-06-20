import React, { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from 'next/router';
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc, getDocs } from 'firebase/firestore';
import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import Script from 'next/script'
import Calendar from "react-calendar/dist/umd/Calendar";
// import JobList from "../components/component/JobList";

export default function Home() {

  const [housingOffered, setHousingOffered] = useState([])
  const [community, setCommunity] = useState([])
  const [radioData, setRadioData] = useState([])
  const [services, setServices] = useState([])
  const [sale, setSale] = useState([])
  const [selectData, setSelectData] = useState()
  const router = useRouter()
  const [subcat, setSubcat] = useState()
  var data = [];
  var housing = [];
  var communitydata = [];
  var saledata = [];
  var servicesdata = [];

  const postdata = (e) => {
    // setSubcat(e.target.id)
    // console.log(subcat)
    router.push({ pathname: "/post", query: { openCat: e.target.id } })
  }

  useEffect(() => {
    try {
      getData();

    }
    catch (error) {
      console.error(error)
    }

  }, [])


  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "subcategory"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      //   data.push({ id: doc.id, ...doc.data() });
      data.push(Object.values(doc.data()));
      // setUserData(userData=>[...userData,doc.data()])
    })

    setRadioData(data)

    const housingOffered = await getDocs(collection(db, "housing offered"));
    housingOffered.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      //   data.push({ id: doc.id, ...doc.data() });
      housing.push(Object.values(doc.data()));
      // setUserData(userData=>[...userData,doc.data()])
    })
    setHousingOffered(housing)
    // console.log(data[0],"hello")

    const community = await getDocs(collection(db, "community"));
    community.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      //   data.push({ id: doc.id, ...doc.data() });
      communitydata.push(Object.values(doc.data()));
      // setUserData(userData=>[...userData,doc.data()])
    })

    setCommunity(communitydata)

    const forSaleByOwner = await getDocs(collection(db, "for sale by owner"));
    forSaleByOwner.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      //   data.push({ id: doc.id, ...doc.data() });
      saledata.push(Object.values(doc.data()));
      // setUserData(userData=>[...userData,doc.data()])
    })

    setSale(saledata)

    const gigsubcategory = await getDocs(collection(db, "gigsubcategory"));
    gigsubcategory.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      //   data.push({ id: doc.id, ...doc.data() });
      servicesdata.push(Object.values(doc.data()));
      // setUserData(userData=>[...userData,doc.data()])
    })

    setServices(servicesdata)
  }



 return (
 
 


    <div className="container-fluid">
      <div className='row' id={styles.home_row}>
        <div className='col-lg-2 col-md-12 col-sm-12' id={styles.bg_1}>
       

          <h1>
            <img src="https://painting.demoapp-lc.com/wp-content/uploads/2022/05/weblisted-01.png" alt="" className={styles.img_logo} />
          </h1>
          <span>
            
            <a href="/Create_post" className={styles.a_1}>
              Create a posting
            </a>
          </span>
          <span>
            
            <a href="/SignIn" className={styles.a_1}>
              My account
            </a>
          </span>
          <span>
            
            <form className={styles.form_input}>
              <input type="text" />
            </form>
            <br />
          </span>
          <span>
            
            <a href="http://google.com/" className={styles.a_2}>
              Event calendar
            </a>
          </span>
          <div className={styles.calendar}>
            <Calendar />
          </div>
          <ul>
            <li className={styles.a_3}>
              
              <a href="/About">help, faq, abuse, legal</a>
            </li>
            <li className={styles.a_3}>
              
              <a href="/scams">avoid scams & fraud</a>
            </li>
            <li className={styles.a_3}>
              
              <a href="">personal safety tips</a>
            </li>
            <li className={styles.a_3}>
              
              <a href="/termsOfUse">terms of use</a>
            </li>
            <li className={styles.a_3}>
              
              <a href="/privacy">privacy policy</a>
            </li>
            <li className={styles.a_3}>
              
              <a href="/systemStatus">system status</a>
            </li>
            {/* <li className={styles.a_3}> <a href='' >help, faq, abuse, legal</a> </li> */}
          </ul>

          <ul>
            <li className={styles.a_3}>
              
              <a href="/About">about craigslist</a>
            </li>
            <li className={styles.a_3}>
              
              <a href="/opensource">craigslist open source</a>
            </li>
            <li className={styles.a_3}>
              
              <a href="/craigslistHiring">craigslist hiring</a>
            </li>
            <li className={styles.a_3}>
              
              <a href="/bestofcraigslist">best-of-craigslist</a>
            </li>
            <li className={styles.a_3}>
              
              <a href="">"craigslist joe"</a>
            </li>
            <li className={styles.a_3}>
              
              <a href="https://craignewmarkphilanthropies.org/">
                craig newmark <br />
                philanthropies
              </a>
            </li>
            {/* <li className={styles.a_3}> <a href='' >help, faq, abuse, legal</a> </li> */}
          </ul>
        </div>

        {/*-------rehman code-----*/}

        <div className="col-lg-8 col-md-12 col-sm-8">
          <h1 className={styles.Head}>DALLAS</h1>
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-6">
                  <h6 className={styles.comhead}>Community</h6>
                  <ul>

                    {community[0] ? community[0].map((item, index) => {
                      return (
                        <li onClick={postdata} className={styles.comlist}>
                          <span id={item} >{item}</span>
                        </li>

                      )
                    }
                    ) : <span>Community......</span>}
                  </ul>
                </div>

                <div className="col-md-6">
                  <h6 className={styles.comhead}>Housing</h6>
                  <ul>

                    {housingOffered[0] ? housingOffered[0].map((item, index) => {
                      return (
                        <li onClick={postdata} className={styles.comlist}>
                          <span id={item} >{item}</span>
                        </li>

                      )
                    }
                    ) : <span>Housing......</span>}
                  </ul>
                </div>

                <div className="col-lg-12">
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h6 className={styles.comhead}>Services</h6>
                  <ul>

                    {services[0] ? services[0].map((item, index) => {
                      return (
                        <li onClick={postdata} className={styles.comlist}>
                          <span id={item} >{item}</span>
                        </li>

                      )
                    }
                    ) : <span>Services......</span>}
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className={styles.comhead}>For Sale</h6>
                  <ul>

                    {sale[0] ? sale[0].map((item, index) => {
                      return (
                        <li onClick={postdata} className={styles.comlist}>
                          <span id={item} >{item}</span>
                        </li>

                      )
                    }
                    ) : <span>For Sale......</span>}
                  </ul>
                </div>

                <div className="col-lg-12">
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="col-md-12">
                <h6 className={styles.comhead}>Jobs</h6>
                <ul>

                  {radioData[0] ? radioData[0].map((item, index) => {
                    return (
                      <li onClick={postdata} className={styles.comlist}>
                        <span id={item} >{item}</span>
                      </li>

                    )
                  }
                  ) : <span>Jobs......</span>}
                </ul>
              </div>

            </div>
          </div>



        </div>

        {/*-------end code-----*/}


        <div className='col-lg-2 col-md-12 col-sm-2' id={styles.bg_1}>
          <span >
            <img src="https://painting.demoapp-lc.com/wp-content/uploads/2022/05/weblisted-01.png" alt="" className={styles.logo_img} />
          </span>
          <p className="P_1">
            <select name="lang" id="chlang" className='js-only' >
              <option value="?lang=da&amp;setlang=1">dansk</option>
              <option value="?lang=de&amp;setlang=1">deutsch</option>
              <option selected="" value="?lang=en&amp;setlang=1">
                english
              </option>
              <option value="?lang=es&amp;setlang=1">español</option>
              <option value="?lang=fr&amp;setlang=1">français</option>
              <option value="?lang=it&amp;setlang=1">italiano</option>
              <option value="?lang=pt&amp;setlang=1">português</option>
              <option value="?lang=fi&amp;setlang=1">suomi</option>
              <option value="?lang=sv&amp;setlang=1">svenska</option>
              <option value="?lang=vi&amp;setlang=1">tiếng việt</option>
              <option value="?lang=tr&amp;setlang=1">türkçe</option>
              <option value="?lang=ru&amp;setlang=1">русский</option>
              <option value="?lang=zh&amp;setlang=1">中文</option>
              <option value="?lang=ja&amp;setlang=1">日本語</option>
              <option value="?lang=ko&amp;setlang=1">한국말</option>
            </select>
          </p>

          <div className="accordion" id="accordionExample">

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo1">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
                  USA
                </button>
              </h2>
              <div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  adelaide
                  auckland
                  bangladesh
                  beijing
                  brisbane
                  canberra
                  christchurch
                  darwin
                  guangzhou
                  hangzhou
                  hong kong
                  indonesia
                  malaysia
                  manila
                  melbourne
                  micronesia
                  okinawa
                  osaka
                  perth
                  seoul
                  shanghai
                  shenzhen
                  singapore
                  sydney
                  taiwan
                  tasmania
                  thailand
                  tokyo
                  vietnam
                  wellington
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  asia/pacific
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  adelaide
                  auckland
                  bangladesh
                  beijing
                  brisbane
                  canberra
                  christchurch
                  darwin
                  guangzhou
                  hangzhou
                  hong kong
                  indonesia
                  malaysia
                  manila
                  melbourne
                  micronesia
                  okinawa
                  osaka
                  perth
                  seoul
                  shanghai
                  shenzhen
                  singapore
                  sydney
                  taiwan
                  tasmania
                  thailand
                  tokyo
                  vietnam
                  wellington
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  cl worldwide
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">

                  africa
                  egypt
                  ethiopia
                  ghana
                  kenya
                  morocco
                  south africa
                  tunisia
                  americas
                  asia
                  europe
                  middle east
                  oceania

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
