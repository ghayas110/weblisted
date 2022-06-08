
import React from 'react'
import styles from "../styles/search.module.css"
import "bootstrap/dist/css/bootstrap.min.css";


export default function Search() {
    return (
        <>
        <div className={styles.Searchdesktop} cz-shortcut-listen="true">

            


            <div id={styles.curtain}>
                <div className={styles.cover}></div>
                <div className={styles.content}>
                    <div className={styles.icom}></div>
                    <div className="text loading" id={styles.text}>loading</div>
                    <div className="text reading" id={styles.text}>reading</div>
                    <div className="text writing" id={styles.text}>writing</div>
                    <div className="text saving" id={styles.text}>saving</div>
                    <div className="text searching" id={styles.text}>searching</div>
                    <div className="text unrecoverable" id={styles.text}>
                        There was an error loading the page; please try to
                        <a id="cl-unrecoverable-hard-refresh" href="#" >refresh the page.</a>
                    </div>
                    <div className="text message"></div>
                </div>
            </div>


            <section className={styles.page_container} id="page-top" data-areaid="450">
                <div className={styles.bglogo}></div>
                <header className="global-header wide" id={styles.global_header}>
                    <a className={styles.header_logo} name="logoLink" href="/">CL</a>
                    <nav className={styles.breadcrumbs_container}>
                        <form id="breadcrumbform" className="breadcrumbs-form" method="get" action="/search/ret">
                            <ul className={styles.breadcrumbs} >
                                <li className={styles.crumb_area}>
                                    <span className={styles.no_js}>
                                        <a href="/">dalis</a>
                                    </span>
                                    <select id="areaAbb" className="js-only">
                                        <option value="dalis">dalis</option>
                                        <option value="dalis">indore</option>
                                        <option value="dalis">surat surat</option>
                                        <option disabled="">──────────</option>
                                        <option value="do_map_popup">use map...</option>
                                        </select>
                                    <span className={styles.breadcrumb_arrow}>&gt;</span>
                                </li>
                                <li className={styles.crumb_section}>
                                    <select id="catAbb">
                                        <option value="ccc">community</option>
                                        <option value="eee">events</option>
                                        <option value="sss">for sale</option>
                                        <option value="ggg">gigs</option>
                                        <option value="hhh">housing</option>
                                        <option value="jjj" selected="">jobs</option>
                                        <option value="rrr">resumes</option>
                                        <option value="bbb">services</option>
                                    </select>
                                    <span className="breadcrumb-arrow">&gt;</span>
                                </li>
                                <li className={styles.crumb_category}>
                                    <select id="subcatAbb" className={styles.js_only}>
                                        <option value="jjj">all</option>
                                        <option value="ofc">admin/office</option>
                                        <option value="bus">business</option>
                                        <option value="csr">customer service</option>
                                        <option value="edu">education</option>
                                        <option value="egr">engineering</option>
                                        <option value="etc">etcetera</option>
                                        <option value="acc">finance</option>
                                        <option value="fbh">food/bev/hosp</option>
                                        <option value="lab">general labor</option>
                                        <option value="gov">government</option>
                                        <option value="hea">healthcare</option>
                                        <option value="hum">human resource</option>
                                        <option value="lgl">legal</option>
                                        <option value="mnu">manufacturing</option>
                                        <option value="mar">marketing</option>
                                        <option value="med">media</option>
                                        <option value="npo">nonprofit</option>
                                        <option value="rej">real estate</option>
                                        <option value="ret" selected="">retail/wholesale</option>
                                        <option value="sls">sales</option>
                                        <option value="spa">salon/spa/fitness</option>
                                        <option value="sci">science</option>
                                        <option value="sec">security</option>
                                        <option value="trd">skilled trades</option>
                                        <option value="sof">software</option>
                                        <option value="sad">systems/networking</option>
                                        <option value="tch">tech support</option>
                                        <option value="trp">transport</option>
                                        <option value="tfr">tv video radio</option>
                                        <option value="web">web design</option>
                                        <option value="wri">writing</option>
                                    </select><span className="no-js">retail/wholesale</span>
                                    <span className="breadcrumb-arrow">&gt;</span>
                                </li>
                            </ul>
                        </form>
                    </nav>

                    <div className="userlinks">
                        <ul className="user-actions">
                            <li className="user post">
                                <a href="https://post.craigslist.org/c/amd">post</a>
                            </li>
                            <li className="user account">
                                <a href="https://accounts.craigslist.org/login/home">account</a>
                            </li>
                        </ul>
                        <ul className="user-favs-discards">
                            <li className="user">
                                <div className="favorites off">
                                    <a href="#" className="favlink"><span className="icon icon-star fav" aria-hidden="true"></span><span className="fav-number">0</span><span className="fav-label"> favorites</span></a>
                                </div>
                            </li>
                            <li className="user discards">
                                <div className="to-banish-page">
                                    <a  className="to-banish-page-link">
                                        <span className="icon icon-trash red" aria-hidden="true"></span>
                                        <span className="banished_count">0</span>
                                        <span className="discards-label"> hidden</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </header>
                <header className="global-header narrow" id={styles.global_header}>
                    <a className="header-logo" href="https://ahmedabad.craigslist.org">CL</a>
                    <nav className="breadcrumbs-container">
                        <h1 className="breadcrumbs">ahmedabad&gt;retail/wholesale</h1>
                    </nav>
                    <span className="linklike show-wide-header">...</span>
                </header>
                <form id="searchform" className="search-form" action="/search/ret">
                    <div className="querybox">
                        <div className="form-tab js-only"><span className="search-open" title="hide search">«</span><span className="search-closed" title="show search">»</span></div>
                        <input type="text" placeholder="search retail/wholesale" name="query" id="query" value="" autocorrect="off" className="flatinput ui-autocomplete-input" autocapitalize="off" autocomplete="off" data-autocomplete="search" />

                        <button type="submit" className="searchbtn">
                            <span className="icon icon-search" aria-hidden="true"></span>
                            <span className="screen-reader-text">press to search craigslist</span>
                        </button>
                        <div className="savealert">
                            <a className="saveme" data-action="save" href="https://accounts.craigslist.org/savesearch/save?URL=https%3A%2F%2Fahmedabad%2Ecraigslist%2Eorg%2Fsearch%2Fret" title="save this search">save search</a>
                        </div>
                    </div>

                    <div className="search-options-container">
                        <h1 className="cattitle">
                            <a href="https://ahmedabad.craigslist.org/search/ret" title="clear all search parameters" className="reset">retail/wholesale</a>
                        </h1>
                        <div className="search-options-header linklike">
                            <div className="icon icon-toggle-gear" aria-hidden="true">
                            </div>options<span className="options-close">close</span>
                        </div>
                        <input id="excats" type="hidden" name="excats" />
                        <div className="search-options">
                            <div className="searchgroup categories">
                            </div>
                            <input type="hidden" name="userid" value="" />
                            <div className="searchgroup" id="basic-bools">
                                <ul>
                                    <li>
                                        <label className="srchType">
                                            <input type="checkbox" name="srchType" className="" value="T" />
                                            search titles only
                                        </label>
                                    </li>
                                    <li>
                                        <label className="hasPic">
                                            <input type="checkbox" name="hasPic" className="autosubmit" value="1" />
                                            has image
                                        </label>
                                    </li>
                                    <li>
                                        <label className="postedToday">
                                            <input type="checkbox" name="postedToday" className="autosubmit" value="1" />
                                            posted today
                                        </label>
                                    </li>
                                    <li>
                                        <label className="bundleDuplicates">
                                            <input type="checkbox" name="bundleDuplicates" className="autosubmit" value="1" />
                                            bundle duplicates
                                        </label>
                                    </li>
                                    <li>
                                        <label className="searchNearby">
                                            <input type="checkbox" name="searchNearby" className="" value="1" />
                                            include nearby areas
                                        </label>
                                    </li>
                                </ul>

                                <ul className="js-only nearbyAreas ">
                                    <li className="">
                                        <label className="nearby">
                                            <input type="checkbox" className="use-id nearbyArea" name="nearbyArea" id="nearbyArea_1" value="549" disabled="disabled" />
                                            dalis <small>(dalis)</small>
                                        </label>
                                    </li>
                                    <li className="">
                                        <label className="nearby">
                                            <input type="checkbox" className="use-id nearbyArea" name="nearbyArea" id="nearbyArea_2" value="85" disabled="disabled" />
                                            dalis <small>(dalis)</small>
                                        </label>
                                    </li>
                                    <li className="">
                                        <label className="nearby">
                                            <input type="checkbox" className="use-id nearbyArea" name="nearbyArea" id="nearbyArea_0" value="613" disabled="disabled" />
                                            dalis <small>(dalis)</small>
                                        </label>
                                    </li>

                                </ul>
                            </div>
                            <div className="searchgroup search-group-checkbox">
                                <label className="is_internship">
                                    <input type="checkbox" name="is_internship" value="1" className="autosubmit" />
                                    internship
                                </label><br />
                                <label className="is_nonprofit">
                                    <input type="checkbox" name="is_nonprofit" value="1" className="autosubmit" />
                                    non-profit
                                </label><br />
                                <label className="is_telecommuting">
                                    <input type="checkbox" name="is_telecommuting" value="1" className="autosubmit" />
                                    telecommute
                                </label><br />
                            </div>

                            <div className="searchgroup search-group-multi_checkbox">
                                <div className="search-attribute " data-attr="employment_type">
                                    <div className="title linklike ">
                                        <span className="plus">▸</span><span className="minus">▾</span> employment type
                                    </div>

                                    <ul className="list">

                                        <li className="checkbox ">
                                            <label>
                                                <input id="employment_type_1" name="employment_type" className="multi_checkbox" value="1" type="checkbox" />
                                                full-time
                                            </label>
                                        </li>
                                        <li className="checkbox ">
                                            <label>
                                                <input id="employment_type_2" name="employment_type" className="multi_checkbox" value="2" type="checkbox" />
                                                part-time
                                            </label>
                                        </li>
                                        <li className="checkbox ">
                                            <label>
                                                <input id="employment_type_3" name="employment_type" className="multi_checkbox" value="3" type="checkbox" />
                                                contract
                                            </label>
                                        </li>
                                        <li className="checkbox ">
                                            <label>
                                                <input id="employment_type_4" name="employment_type" className="multi_checkbox" value="4" type="checkbox" />
                                                employee's choice
                                            </label>
                                        </li>



                                    </ul>
                                </div>
                            </div>


                            <div className="searchgroup resetsearch">
                                <a href="https://ahmedabad.craigslist.org/search/ret" title="clear all search parameters" className="reset linklike">reset</a>
                                <button type="submit" className="searchlink linklike">update search</button>
                            </div>



                        </div>
                    </div>


                    <div className="search-legend">
                        <div className="search-view js-only">
                            <div className="dropdown dropdown-icons dropdown-arrows dropdown-view" role="toolbar" aria-label="view options" aria-expanded="false">
                                <ul className="dropdown-list">
                                    <li className="dropdown-item mode sel">
                                        <button title="show results in a list" data-selection="list" id="listview">
                                            <span className="view-list icon"></span>list
                                        </button>
                                        <span className="toggle-arrow"></span>
                                    </li>
                                    <li className="dropdown-item mode">
                                        <button title="show results in a list with thumbnail pictures" data-selection="pic" id="picview">
                                            <span className="view-thumb icon"></span>thumb
                                        </button>
                                        <span className="toggle-arrow"></span>
                                    </li>
                                    <li className="dropdown-item mode">
                                        <button title="show results side-by-side with larger pictures" data-selection="grid" id="gridview">
                                            <span className="view-gallery icon"></span>gallery
                                        </button>
                                        <span className="toggle-arrow"></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="search-sort">
                            <div className="dropdown dropdown-sort " data-default-sort="date" role="toolbar" aria-label="sort options" aria-expanded="false">
                                <ul className="dropdown-list">

                                    <li className="dropdown-item mode sel" aria-selected="true">
                                        <a data-selection="date" title="show newest matches first" href="/search/ret?sort=date&amp;">newest <span className="toggle-arrow"></span></a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="paginator buttongroup firstpage lastpage">
                            <span className="resulttotal">
                                <span className="for-map">
                                    showing <span className="displaycountShow">0</span> postings
                                    <span className="zoom-out-for-more" >
                                        -
                                        <a href="">
                                            zoom out for all <span className="total">0</span>
                                        </a>
                                    </span>

                                </span>
                            </span>
                            <span className="buttons">
                                <span className="button pagenum">no results</span>
                            </span>
                        </div>


                    </div>
                    <div className="content" id="sortable-results">
                        <section className="favlistsection">
                            <section className="favlistinfo">
                            </section>
                            <section className="banishlistinfo">
                            </section>
                        </section>



                        <div className="open-map-view-button">
                            <span>see in map view</span>
                        </div>
                        <div id="mapcontainer" data-arealat="23.033300" data-arealon="72.616699">
                            <div id="update-search-area-button"></div>
                            <div id="noresult-overlay"></div>
                            <div id="noresult-text">
                                <span className="message">No mappable items found</span>
                            </div>
                            <div id="map" className="loading" >
                                <div className="close-full-screen-map-mode-button">close fullscreen</div>
                            </div>
                        </div>

                        <ul className="rows" id="search-results">

                            <h4 className="ban nearby">
                                <span className="bantext">
                                    Zero local results found. Here are some from nearby
                                    –
                                    <a href="#" className="set_search_area_button">change search area</a>
                                </span>
                            </h4>

                            <li className="result-row" data-pid="7487436126">

                                <a href="https://mumbai.craigslist.org/ret/d/java-full-stack-developer/7487436126.html" className="result-image gallery empty"></a>

                                <div className="result-info">
                                    <span className="icon icon-star" role="button" title="save this post in your favorites list">
                                        <span className="screen-reader-text">favorite this post</span>
                                    </span>

                                    <time className="result-date" datetime="2022-05-24 02:32" title="Tue 24 May 02:32:38 AM">May 24</time>


                                    <h3 className="result-heading">
                                        <a href="https://mumbai.craigslist.org/ret/d/java-full-stack-developer/7487436126.html" data-id="7487436126" className="result-title hdrlnk" id="postid_7487436126">Java Full Stack Developer</a>
                                    </h3>

                                    <span className="result-meta">


                                        <span className="nearby" title="mumbai">(mum &gt; NEW JERSEY/NEW YORK)</span>

                                        <span className="result-tags">
                                        </span>

                                        <span className="banish icon icon-trash" role="button">
                                            <span className="screen-reader-text">hide this posting</span>
                                        </span>

                                        <span className="unbanish icon icon-trash red" role="button" aria-hidden="true"></span>
                                        <a href="#" className="restore-link">
                                            <span className="restore-narrow-text">restore</span>
                                            <span className="restore-wide-text">restore this posting</span>
                                        </a>

                                    </span>
                                </div>
                            </li>

                        </ul>
                    </div>


                    <div className="search-legend bottom">
                        <div className="search-view">
                            <span className="buttongroup"><a className="backtotop button" href="#page-top">^ back to top</a></span>
                        </div>
                        <div className="search-sort">
                            <span className="buttongroup"><a className="backtotop button" href="#page-top">^ back to top</a></span>
                        </div>

                    </div>

                    <section className="blurbs">

                    </section>

                    <div id="floater">
                        <img className="loading" src="//www.craigslist.org/images/animated-spinny.gif" alt="" />
                        <img className="payload" src="//www.craigslist.org/images/animated-spinny.gif" alt="" />
                    </div>
                </form>


                <div className="slidemessage">
                    <span className="fave">
                        <span className="star"></span>
                        favorited
                    </span>
                    <span className="unfave">
                        <span className="star"></span>
                        no longer favorited
                    </span>
                    <span className="hide">
                        <span className="trash"></span>
                        hidden
                    </span>
                    <span className="unhide">
                        <span className="trash"></span>
                        no longer hidden
                    </span>
                </div>

                <footer>
                    <ul className="clfooter">
                        <li>© 2022 <span className="desktop">craigslist</span><span className="mobile">CL</span></li>
                        <li><a href="https://www.craigslist.org/about/help/">help</a></li>
                        <li><a href="https://www.craigslist.org/about/scams">safety</a></li>
                        <li className="desktop"><a href="https://www.craigslist.org/about/privacy.policy">privacy</a></li>
                        <li className="desktop"><a href="https://forums.craigslist.org/?forumID=8">feedback</a></li>
                        <li><a href="https://www.craigslist.org/about/terms.of.use">terms</a></li>
                        <li><a href="https://www.craigslist.org/about/">about</a></li>
                        <li><a href="https://www.craigslist.org/about/craigslist_app">craigslist app</a></li>
                        <li><a href="https://www.craigslist.org/about/craigslist_is_hiring">cl is hiring</a></li>
                    </ul>
                </footer>
            </section>
            <ul className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-1" tabindex="0" >
            </ul>
            <span role="status" aria-live="assertive" aria-relevant="additions" className="ui-helper-hidden-accessible">
            </span>
        </div>
        </>
    )
}
