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

  const router = useRouter()
  const [housingOffered, setHousingOffered] = useState([])
  const [community, setCommunity] = useState([])
  const [radioData, setRadioData] = useState([])
  const [services, setServices] = useState([])
  const [sale, setSale] = useState([])
  const [selectData, setSelectData] = useState()
  const [subcat, setSubcat] = useState()
  var data = [];


  const postdata = (e) => {
    // setSubcat(e.target.id)
    console.log(e.target.id)
    router.push({ pathname: '/post', query: { openCat: e.target.id } })
  }

  // useEffect(() => {
  //   try {
  //     getData();

  //   }
  //   catch (error) {
  //     console.error(error)
  //   }

  // }, [])


  // const getData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "subcategory"));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     //   console.log(doc.id, " => ", doc.data());
  //     //   data.push({ id: doc.id, ...doc.data() });
  //     data.push(Object.values(doc.data()));
  //     // setUserData(userData=>[...userData,doc.data()])
  //   })

  //   setRadioData(data)

  //   const housingOffered = await getDocs(collection(db, "housing offered"));
  //   housingOffered.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     //   console.log(doc.id, " => ", doc.data());
  //     //   data.push({ id: doc.id, ...doc.data() });
  //     housing.push(Object.values(doc.data()));
  //     // setUserData(userData=>[...userData,doc.data()])
  //   })
  //   setHousingOffered(housing)
  //   // console.log(data[0],"hello")

  //   const community = await getDocs(collection(db, "community"));
  //   community.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     //   console.log(doc.id, " => ", doc.data());
  //     //   data.push({ id: doc.id, ...doc.data() });
  //     communitydata.push(Object.values(doc.data()));
  //     // setUserData(userData=>[...userData,doc.data()])
  //   })

  //   setCommunity(communitydata)

  //   const forSaleByOwner = await getDocs(collection(db, "for sale by owner"));
  //   forSaleByOwner.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     //   console.log(doc.id, " => ", doc.data());
  //     //   data.push({ id: doc.id, ...doc.data() });
  //     saledata.push(Object.values(doc.data()));
  //     // setUserData(userData=>[...userData,doc.data()])
  //   })

  //   setSale(saledata)

  //   const gigsubcategory = await getDocs(collection(db, "gigsubcategory"));
  //   gigsubcategory.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     //   console.log(doc.id, " => ", doc.data());
  //     //   data.push({ id: doc.id, ...doc.data() });
  //     servicesdata.push(Object.values(doc.data()));
  //     // setUserData(userData=>[...userData,doc.data()])
  //   })

  //   setServices(servicesdata)
  // }



  return (
    <>

      <div className="container-fluid">
        <div className='row' id={styles.home_row}>
          <div className='col-lg-2 col-md-12 col-sm-12' id={styles.bg_1}>
            <span>
              <img src="https://painting.demoapp-lc.com/wp-content/uploads/2022/05/weblisted-01.png" alt="" className={styles.img_logo} />
            </span>
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
              <Calendar className={styles.calendar1} />
            </div>

            <ul className={styles.home_ul}>
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

            <ul className={styles.home_ul}>
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
            </ul>
          </div>

          {/*-------rehman code-----*/}

          <div className="col-lg-8 col-md-12 col-sm-8">
            <h1 className={styles.Head}>DALLAS</h1>
            <div className="row">
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-md-6" >
                    <h6 className={styles.comhead}>Community</h6>
                    <div className="row" id={styles.homecat1}>
                      <div className="col-md-6">
                        <ul>
                          <li onClick={(e) => postdata(e)} id="activites" className={styles.comlist}>
                            activites
                          </li><li onClick={(e) => postdata(e)} id="artists" className={styles.comlist}>
                            artists
                          </li><li onClick={(e) => postdata(e)} id="childcare" className={styles.comlist}>
                            childcare
                          </li><li onClick={(e) => postdata(e)} id="classes" className={styles.comlist}>
                            classes
                          </li>
                          <li onClick={(e) => postdata(e)} id="events" className={styles.comlist}>
                            events
                          </li>
                          <li onClick={(e) => postdata(e)} id="general" className={styles.comlist}>
                            general
                          </li>
                          <li onClick={(e) => postdata(e)} id="groups" className={styles.comlist}>
                            groups
                          </li>
                          <li onClick={(e) => postdata(e)} id="local news" className={styles.comlist}>
                            local news
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>


                          <li onClick={(e) => postdata(e)} id="lost+found" className={styles.comlist}>
                            lost+found
                          </li><li onClick={(e) => postdata(e)} id="misssed" className={styles.comlist}>
                            misssed
                          </li>
                          <li onClick={(e) => postdata(e)} id="connections" className={styles.comlist}>
                            connections
                          </li>
                          <li onClick={(e) => postdata(e)} id="musicians" className={styles.comlist}>
                            musicians
                          </li><li onClick={(e) => postdata(e)} id="pets" className={styles.comlist}>
                            pets
                          </li><li onClick={(e) => postdata(e)} id="politics" className={styles.comlist}>
                            politics
                          </li><li onClick={(e) => postdata(e)} id="rant & raves" className={styles.comlist}>
                            rant & raves
                          </li><li onClick={(e) => postdata(e)} id="rideshare" className={styles.comlist}>
                            rideshare
                          </li>
                          <li onClick={(e) => postdata(e)} id="volunteers" className={styles.comlist}>
                            volunteers
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h6 className={styles.comhead}>Housing</h6>
                    <ul>


                      <li onClick={(e) => postdata(e)} id="apts / housing" className={styles.comlist}>
                        apts / housing
                      </li> <li onClick={(e) => postdata(e)} id="housing swap" className={styles.comlist}>
                        housing swap
                      </li> <li onClick={(e) => postdata(e)} id="housing wanted" className={styles.comlist}>
                        housing wanted
                      </li>
                      <li onClick={(e) => postdata(e)} id="office / commercial" className={styles.comlist}>
                        office / commercial
                      </li>
                      <li onClick={(e) => postdata(e)} id="parking / storage" className={styles.comlist}>
                        parking / storage
                      </li>
                      <li onClick={(e) => postdata(e)} id="real estate for sale" className={styles.comlist}>
                        real estate for sale
                      </li>
                      <li onClick={(e) => postdata(e)} id="rooms & shares" className={styles.comlist}>
                        rooms / shared
                      </li>
                      <li onClick={(e) => postdata(e)} id="rooms wanted" className={styles.comlist}>
                        rooms wanted
                      </li>
                      <li onClick={(e) => postdata(e)} id="sublet / temporary" className={styles.comlist}>
                        sublet / temporary
                      </li>
                      <li onClick={(e) => postdata(e)} id="vocation rentals" className={styles.comlist}>
                        vocation rentals
                      </li>


                    </ul>
                  </div>

                  <div className="col-lg-12">
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className={styles.comhead}>Services</h6>
                    <ul>
                      <li onClick={(e) => postdata(e)} id="automotive" className={styles.comlist}>
                        automotive
                      </li>
                      <li onClick={(e) => postdata(e)} id="beauty" className={styles.comlist}>
                        beauty
                      </li>
                      <li onClick={(e) => postdata(e)} id="cell/mobile" className={styles.comlist}>
                        cell/mobile
                      </li>
                      <li onClick={(e) => postdata(e)} id="computer" className={styles.comlist}>
                        computer
                      </li>
                      <li onClick={(e) => postdata(e)} id="creative" className={styles.comlist}>
                        <span >creative</span>
                      </li> <li onClick={(e) => postdata(e)} id="cycle" className={styles.comlist}>
                        cycle
                      </li>
                      <li onClick={(e) => postdata(e)} id="event" className={styles.comlist}>
                        event
                      </li>
                      <li onClick={(e) => postdata(e)} id="farm+garden" className={styles.comlist}>
                        farm+garden
                      </li>
                      <li onClick={(e) => postdata(e)} id="financial" className={styles.comlist}>
                        financial
                      </li>
                      <li onClick={(e) => postdata(e)} id="health / well" className={styles.comlist}>
                        health / well
                      </li>
                      <li onClick={(e) => postdata(e)} id="household" className={styles.comlist}>
                        household
                      </li>
                      <li onClick={(e) => postdata(e)} id="labor/move" className={styles.comlist}>
                        labor/move
                      </li>
                      <li onClick={(e) => postdata(e)} id="legal" className={styles.comlist}>
                        legal
                      </li> <li onClick={(e) => postdata(e)} id="lessons" className={styles.comlist}>
                        lessons
                      </li>
                      <li onClick={(e) => postdata(e)} id="marine" className={styles.comlist}>
                        marine
                      </li>
                      <li onClick={(e) => postdata(e)} id="pet" className={styles.comlist}>
                        pet
                      </li>
                      <li onClick={(e) => postdata(e)} id="real estate" className={styles.comlist}>
                        real estate
                      </li>
                      <li onClick={(e) => postdata(e)} id="skilled trade" className={styles.comlist}>
                        skilled trade
                      </li>
                      <li onClick={(e) => postdata(e)} id="sm biz ads" className={styles.comlist}>
                        sm biz ads
                      </li>
                      <li onClick={(e) => postdata(e)} id="travel/vac" className={styles.comlist}>
                        travel/vac
                      </li>
                      <li onClick={(e) => postdata(e)} id="write/ed/tran" className={styles.comlist}>
                        write/ed/tran
                      </li>

                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <h6 className={styles.comhead}>For Sale</h6>
                      <div className="col-md-6">
                        <ul>
                          <li onClick={(e) => postdata(e)} id="photo/video" className={styles.comlist}>
                            photo/video
                          </li>
                          <li onClick={(e) => postdata(e)} id="free stuff" className={styles.comlist}>
                            free stuff
                          </li>

                          <li onClick={(e) => postdata(e)} id="motorcycle parts" className={styles.comlist}>
                            motorcycle parts
                          </li>

                          <li onClick={(e) => postdata(e)} id="business/commercial" className={styles.comlist}>
                            business/commercial
                          </li>

                          <li onClick={(e) => postdata(e)} id="barter" className={styles.comlist}>
                            barter
                          </li>

                          <li onClick={(e) => postdata(e)} id="tickets" className={styles.comlist}>
                            tickets
                          </li>

                          <li onClick={(e) => postdata(e)} id="health and beauty" className={styles.comlist}>
                            health and beauty
                          </li>

                          <li onClick={(e) => postdata(e)} id="video gaming" className={styles.comlist}>
                            video gaming
                          </li>

                          <li onClick={(e) => postdata(e)} id="computers" className={styles.comlist}>
                            computers
                          </li>

                          <li onClick={(e) => postdata(e)} id="cars & trucks" className={styles.comlist}>
                            cars & trucks
                          </li>

                          <li onClick={(e) => postdata(e)} id="garage & moving sales" className={styles.comlist}>
                            garage & moving sales
                          </li>

                          <li onClick={(e) => postdata(e)} id="bicycles" className={styles.comlist}>
                            bicycles
                          </li>

                          <li onClick={(e) => postdata(e)} id="wanted" className={styles.comlist}>
                            wanted
                          </li>

                          <li onClick={(e) => postdata(e)} id="farm & garden" className={styles.comlist}>
                            farm & garden
                          </li>


                          <li onClick={(e) => postdata(e)} id="bicycle parts" className={styles.comlist}>
                            bicycle parts
                          </li>

                          <li onClick={(e) => postdata(e)} id="tools" className={styles.comlist}>
                            tools
                          </li>

                          <li onClick={(e) => postdata(e)} id="antiques" className={styles.comlist}>
                            antiques
                          </li>

                          <li onClick={(e) => postdata(e)} id="appliances" className={styles.comlist}>
                            appliances
                          </li>
                          <li onClick={(e) => postdata(e)} id="atvs/utvs/snowmobiles" className={styles.comlist}>
                            atvs/utvs/snowmobiles
                          </li>
                          <li onClick={(e) => postdata(e)} id="books & magazines" className={styles.comlist}>
                            books & magazines
                          </li>
                          <li onClick={(e) => postdata(e)} id="jewelry" className={styles.comlist}>
                            jewelry
                          </li>
                          <li onClick={(e) => postdata(e)} id="clothing & accessories" className={styles.comlist}>
                            clothing&accessories
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>

                          <li onClick={(e) => postdata} id="rvs" className={styles.comlist}>
                            rvs
                          </li>
                          <li onClick={(e) => postdata(e)} id="household items" className={styles.comlist}>
                            household items
                          </li>
                          <li onClick={(e) => postdata(e)} id="auto wheels & tires" className={styles.comlist}>
                            auto wheels & tires
                          </li>
                          <li onClick={(e) => postdata(e)} id="motorcycles/scooter" className={styles.comlist}>
                            motorcycles/scooter
                          </li>
                          <li onClick={(e) => postdata(e)} id="cell phones" className={styles.comlist}>
                            cell phones
                          </li>

                          <li onClick={(e) => postdata(e)} id="arts & crafts" className={styles.comlist}>
                            arts & crafts
                          </li>  <li onClick={(e) => postdata(e)} id="boats" className={styles.comlist}>
                            boats
                          </li>

                          <li onClick={(e) => postdata(e)} id="trailers" className={styles.comlist}>
                            trailers
                          </li>
                          <li onClick={(e) => postdata(e)} id="toys & games" className={styles.comlist}>
                            toys & games
                          </li>
                          <li onClick={(e) => postdata(e)} id="electronics" className={styles.comlist}>
                            electronics
                          </li>

                          <li onClick={(e) => postdata(e)} id="boat parts" className={styles.comlist}>
                            boat parts
                          </li>
                          <li onClick={(e) => postdata(e)} id="collectibles" className={styles.comlist}>
                            collectibles
                          </li>
                          <li onClick={(e) => postdata(e)} id="heavy equipment" className={styles.comlist}>
                            heavy equipment
                          </li>
                          <li onClick={(e) => postdata(e)} id="auto parts" className={styles.comlist}>
                            auto parts
                          </li>
                          <li onClick={(e) => postdata(e)} id="aviation" className={styles.comlist}>
                            aviation
                          </li>
                          <li onClick={(e) => postdata(e)} id="furniture" className={styles.comlist}>
                            furniture
                          </li>
                          <li onClick={(e) => postdata(e)} id="cds/dvds/vhs" className={styles.comlist}>
                            cds/dvds/vhs
                          </li>
                          <li onClick={(e) => postdata(e)} id="baby & kid stuff" className={styles.comlist}>
                            baby & kid stuff
                          </li>
                          <li onClick={(e) => postdata(e)} id="musical instruments" className={styles.comlist}>
                            musical instruments
                          </li>
                          <li onClick={(e) => postdata(e)} id="materials" className={styles.comlist}>
                            materials
                          </li>
                          <li onClick={(e) => postdata(e)} id="general for sale" className={styles.comlist}>
                            general for sale
                          </li>
                          <li onClick={(e) => postdata(e)} id="computer parts" className={styles.comlist}>
                            computer part
                          </li>

                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-12">
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="col-md-12">
                  <h6 className={styles.comhead}>Jobs</h6>
                  <ul>
                    <li onClick={(e) => postdata(e)} id="et cetera" className={styles.comlist}>
                      et cetera
                    </li>
                    <li onClick={(e) => postdata(e)} id="software/qa/dba/etc" className={styles.comlist}>
                      software/qa/dba/etc
                    </li>
                    <li onClick={(e) => postdata(e)} id="science/biotech" className={styles.comlist}>
                      science/biotech
                    </li>
                    <li onClick={(e) => postdata(e)} id="salon/spa/fitness" className={styles.comlist}>
                      salon/spa/fitness
                    </li>
                    <li onClick={(e) => postdata(e)} id="food/beverage/hospitality" className={styles.comlist}>
                      food/beverage/hospitality
                    </li>
                    <li onClick={(e) => postdata(e)} id="real estate" className={styles.comlist}>
                      real estate
                    </li>
                    <li onClick={(e) => postdata(e)} id="skilled trades/artisan" className={styles.comlist}>
                      skilled trades/artisan
                    </li>
                    <li onClick={(e) => postdata(e)} id="writing/editing" className={styles.comlist}>
                      writing/editing
                    </li>
                    <li onClick={(e) => postdata(e)} id="nonprofit" className={styles.comlist}>
                      nonprofit
                    </li>
                    <li onClick={(e) => postdata(e)} id="marketing/advertising/pr" className={styles.comlist}>
                      marketing/advertising/pr
                    </li>
                    <li onClick={(e) => postdata(e)} id="admin" className={styles.comlist}>
                      admin
                    </li>
                    <li onClick={(e) => postdata(e)} id="general labor" className={styles.comlist}>
                      general labor
                    </li>
                    <li onClick={(e) => postdata(e)} id="government" className={styles.comlist}>
                      government
                    </li>
                    <li onClick={(e) => postdata(e)} id="manufacturing" className={styles.comlist}>
                      manufacturing
                    </li>
                    <li onClick={(e) => postdata(e)} id="retail/wholesale" className={styles.comlist}>
                      retail/wholesale
                    </li>
                    <li onClick={(e) => postdata(e)} id="legal/paralegal" className={styles.comlist}>
                      legal/paralegal
                    </li>
                    <li onClick={(e) => postdata(e)} id="human resource" className={styles.comlist}>
                      human resource
                    </li>

                    <li onClick={(e) => postdata(e)} id="customer service" className={styles.comlist}>
                      customer service
                    </li><li onClick={(e) => postdata(e)} id="tv/film/video/radio" className={styles.comlist}>
                      tv/film/video/radio
                    </li>

                    <li onClick={(e) => postdata(e)} id="healthcare" className={styles.comlist}>
                      healthcare
                    </li>
                    <li onClick={(e) => postdata(e)} id="art/media/design" className={styles.comlist}>
                      art/media/design
                    </li>

                    <li onClick={(e) => postdata(e)} id="architect/engineer/cad" className={styles.comlist}>
                      architect/engineer/cad (no IT/computer jobs here please)
                    </li>

                    <li onClick={(e) => postdata(e)} id=">web/html/info design" className={styles.comlist}>
                      web/html/info design
                    </li>

                    <li onClick={(e) => postdata(e)} id="technical support" className={styles.comlist}>
                      technical support
                    </li>
                    <li onClick={(e) => postdata(e)} id="education/teaching" className={styles.comlist}>
                      education/teaching
                    </li>
                    <li onClick={(e) => postdata(e)} id="systems/networking" className={styles.comlist}>
                      systems/networking
                    </li>
                    <li onClick={(e) => postdata(e)} id="sales" className={styles.comlist}>
                      sales
                    </li>
                    <li onClick={(e) => postdata(e)} id="transportation" className={styles.comlist}>
                      transportation
                    </li>
                    <li onClick={(e) => postdata(e)} id="business/mgmt" className={styles.comlist}>
                      business/mgmt
                    </li><li onClick={(e) => postdata(e)} id="security" className={styles.comlist}>
                      security
                    </li>
                    <li onClick={(e) => postdata(e)} id="account/finance" className={styles.comlist}>
                      account/finance
                    </li>
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

            <div >
              <div className={styles.home_select_div}>
                <span>
                  USA
                </span> <br />
                <select id="" className={styles.home_select}>
                  <option value=""> adelaide</option>
                  <option value=""> bangladesh</option>
                  <option value=""> beijing</option>
                  <option value="">brisbane</option>
                  <option value="">canberra</option>
                  <option value="">christchurch</option>
                  <option value="">darwin</option>
                  <option value="">guangzhou</option>
                  <option value=""> hangzhou</option>
                  <option value="">hong kong</option>
                  <option value="">indonesia</option>
                  <option value=""> malaysia</option>
                  <option value=""> malaysia</option>
                  <option value="">  melbourne</option>
                  <option value="">  micronesia</option>
                  <option value="">osaka</option>
                  <option value="">  perth</option>
                  <option value=""> seoul</option>
                  <option value=""> shanghai</option>
                  <option value="">  singapore</option>
                  <option value="">sydney</option>
                  <option value="">taiwan</option>
                  <option value=""> tasmania</option>
                  <option value="">thailand</option>
                  <option value=""> tokyo</option>
                  <option value="">vietnam</option>
                  <option value=""> wellington</option>

                </select>
              </div>
              <div className={styles.home_select_div}>
                <span>
                  asia/pacific
                </span> <br />
                <select id="" className={styles.home_select}>
                  <option value=""> adelaide</option>
                  <option value=""> bangladesh</option>
                  <option value=""> beijing</option>
                  <option value="">brisbane</option>
                  <option value="">canberra</option>
                  <option value="">christchurch</option>
                  <option value="">darwin</option>
                  <option value="">guangzhou</option>
                  <option value=""> hangzhou</option>
                  <option value="">hong kong</option>
                  <option value="">indonesia</option>
                  <option value=""> malaysia</option>
                  <option value=""> malaysia</option>
                  <option value="">  melbourne</option>
                  <option value="">  micronesia</option>
                  <option value="">osaka</option>
                  <option value="">  perth</option>
                  <option value=""> seoul</option>
                  <option value=""> shanghai</option>
                  <option value="">  singapore</option>
                  <option value="">sydney</option>
                  <option value="">taiwan</option>
                  <option value=""> tasmania</option>
                  <option value="">thailand</option>
                  <option value=""> tokyo</option>
                  <option value="">vietnam</option>
                  <option value=""> wellington</option>

                </select>
              </div>

              <div className={styles.home_select_div}>
                <span>
                  cl worldwide
                </span> <br />
                <select name="" id="" className={styles.home_select}>
                  <option value="">africa</option>
                  <option value="">egypt</option>
                  <option value="">ethiopia</option>
                  <option value="">ghana</option>
                  <option value="">morocco</option>
                  <option value="">kenya</option>
                  <option value="">south africa</option>
                  <option value="">tunisia</option>
                  <option value="">americas</option>
                  <option value="">asia</option>
                  <option value="">europe</option>
                  <option value="">middle east</option>
                  <option value="">oceania</option>

                </select>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id={styles.footer}>
        <div className={styles.footer_home}>
          <ul className={styles.clfooter_home}>
            <li>© 2022  <span className={styles.desktop}>craigslist </span><span className={styles.mobile}>CL</span></li>&nbsp;&nbsp;
            <li><a href="">help</a></li> &nbsp;&nbsp;&nbsp;&nbsp;
            <li><a href="">safety</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li className={styles.desktop}><a href="">privacy</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li className={styles.desktop}><a href="">feedback</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li><a href="">terms</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li><a href="">about</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li><a href="">craigslist app</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li><a href="">cl is hiring</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
          </ul>
        </div>
      </div>
    </>
  );
}
