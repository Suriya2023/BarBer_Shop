import React from 'react'
import './Nav.css'
import logo from './Image/logo (1).png'
// import bgimage from './Image/background.png'
// import Blog from './Blog'
import AboutImg from './Aboutimage'
import Service from './Service'
import Card from './Card'
import Gallery from './Gallery';
import SubContent from './SubContent'
import CardCrousal from './CardCrousal';
import ImgsiD from './imgsid'
import SubCd from './SubCd';
import BackGround from './BackGround';
import Trend from './Trend';
import Contact from './Contact';
import Footer from './Footer';
import { Link } from 'react-router-dom'
import { motion } from "motion/react"
function Navbar() {
  const transition = {
    duration: 0.8,
    opacity: 0,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }
  return (
    <div>


      {/* Top Section */}
      <div id="header">

        <div>
          <motion.div
            animate={{ y: -0 }}
            transition={transition} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="email">
              <div className="txtid">
                <div>
                  <i className="fa-solid fa-envelope"></i> &nbsp; &nbsp;
                  Suraj123@gmail.com
                  &nbsp;&nbsp;&nbsp;|  &nbsp; &nbsp;
                  <i className="fa-solid fa-phone"></i> &nbsp; &nbsp;
                  +91 95510190352

                </div>
                <div className="iconid">
                  <div id='iconUl'>
                    <span><i className="fa-brands fa-instagram"></i></span>
                    <span><i className="fa-brands fa-facebook"></i></span>
                    <span><i className="fa-brands fa-twitter"></i></span>
                    <span><i className="fa-brands fa-whatsapp"></i></span>
                    <span><i className="fa-brands fa-pinterest"></i></span>
                  </div>

                </div>
              </div>
            </div>


            {/* End */}
          </motion.div>


          {/* first Navbar */}

          <motion.div
            animate={{ y: -0 }}
            transition={transition} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >


            <header className='small'>
              {/* One */}
              <div id='ThisHiddentwo'>
                <nav className={"navbar navbar-expand-lg"} >
                  <div className="container-fluid">

                    <div className='myDis' id='thisDis'>  <Link to='/BarBer_Shop' className="d-none d-sm-flex flex-shrink-0 text-primary me-2">
                      <img src={logo} to="/" alt="Logo" />
                      {/* <img id='nonefav' src="https://cartzilla.createx.studio/assets/img/intro/features/vector.png" alt="img" /> */}


                    </Link> </div>

                    <ul className={"nav justify-content-center "} id='mcone' >

                      <li className="nav-item dropdown">
                        <Link id='lgf' className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                          Home
                        </Link>
                        <ul className="dropdown-menu"  >
                          <li><Link className="dropdown-item" to="/">About</Link></li>
                          <li><Link className="dropdown-item" to="/">Blog</Link></li>
                          <li><Link className="dropdown-item" to="/">Contact</Link></li>
                          <li><Link className="dropdown-item" to="/">Help Center</Link></li>
                          <li><Link className="dropdown-item" to="/">404 Error</Link></li>
                          <li><Link className="dropdown-item" to="/">Terms & Conditions</Link></li>
                        </ul>
                      </li>




                      <li className="nav-item dropdown">
                        <Link id='lgf' className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Pages
                        </Link>
                        <ul className="dropdown-menu"  >
                          <li><Link className="dropdown-item" to="/">About</Link></li>
                          <li><Link className="dropdown-item" to="/">Blog</Link></li>
                          <li><Link className="dropdown-item" to="/">Contact</Link></li>
                          <li><Link className="dropdown-item" to="/">Help Center</Link></li>
                          <li><Link className="dropdown-item" to="/">404 Error</Link></li>
                          <li><Link className="dropdown-item" to="/">Terms & Conditions</Link></li>
                        </ul>
                      </li>





                      <li className="nav-item">
                        <Link id='lgf' to='/blog' className="nav-link " aria-disabled="true">Blog</Link>
                      </li>

                      <li className="nav-item">
                        <Link id='lgf' to='/Section' className="nav-link " aria-disabled="true">Services</Link>
                      </li>
                      <li className="nav-item">
                        <a id='lgf' href='https://portfolio-seven-sage-aqrc3m5b8m.vercel.app/' className="nav-link " aria-disabled="true">Portfolio</a>
                      </li>

                      <li className="nav-item">
                        <Link id='lgf' to='/contact' className="nav-link " aria-disabled="true">Contact</Link>
                      </li>
                    </ul>
                    <form className="d-flex" role="search">
                      {/* <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleBtn} />{props.setMode}
                            </div> */}


                      &nbsp; &nbsp;
                      <div id='iconUl'>
                        <span className='
                      iconUli'><i className="fa-solid fa-magnifying-glass fa-fw"></i></span>
                        <span className='
                      iconUli'><i className="fa-solid fa-cart-shopping"></i></span>
                      </div>

                    </form>
                  </div>
                </nav>
                <br />
              </div>




            </header>
          </motion.div>

          {/* End */}


          {/* second nav */}
          <motion.div
            animate={{ y: -0 }}
            transition={transition} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >

            <header className="largeNav">
              <nav className="navbar ">
                <div className="container-fluid">

                  <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" />
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                      {/* <img src={logo} alt="Logo"/> */}
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><img id='uuu' src="https://th.bing.com/th/id/OIP.FqvZ6Kyu0LWTkLYkWJ8t3gHaHc?rs=1&pid=ImgDetMain" alt="" /></button>
                    </div>
                    <hr className='hrline' />

                    <div className="offcanvas-body">
                      <img src={logo} alt="Logo" id='imgcenter' />
                      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item" id='myhome'>
                          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='myhome'>
                            Home
                          </a>
                          <ul className="dropdown-menu"  >
                            <li><a className="dropdown-item" href="/">About</a></li>
                            <li><a className="dropdown-item" href="/">Blog</a></li>
                            <li><a className="dropdown-item" href="/">Contact</a></li>
                            <li><a className="dropdown-item" href="/">Help Center</a></li>
                            <li><a className="dropdown-item" href="/">404 Error</a></li>
                            <li><a className="dropdown-item" href="/">Terms & Conditions</a></li>
                          </ul>

                        </li>
                        <li className="nav-item" id='myhome'>
                          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='myhome'>
                            Pages
                          </a>
                          <ul className="dropdown-menu"  >
                            <li><a className="dropdown-item" href="/">About</a></li>
                            <li><a className="dropdown-item" href="/">Blog</a></li>
                            <li><a className="dropdown-item" href="/">Contact</a></li>
                            <li><a className="dropdown-item" href="/">Help Center</a></li>
                            <li><a className="dropdown-item" href="/">404 Error</a></li>
                            <li><a className="dropdown-item" href="/">Terms & Conditions</a></li>
                          </ul>

                        </li>
                        <li className="nav-item">
                          <Link to="/blog" id='lgf' className="nav-link " aria-disabled="true">Blog</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/Section" id='lgf' className="nav-link " aria-disabled="true">Services</Link>
                        </li>
                        <li className="nav-item ">
                          <li className="nav-item">
                            <a href='https://portfolio-seven-sage-aqrc3m5b8m.vercel.app/' id='lgf' className="nav-link " aria-disabled="true">Portfolio</a>
                          </li>

                          <li className="nav-item">
                            <Link to="/contact" id='lgf' className="nav-link " aria-disabled="true">Contact</Link>
                          </li>

                        </li>
                      </ul>
                      {/* <form className="d-flex mt-3" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    </div>
                  </div>
                </div>
              </nav>
            </header>
          </motion.div>
          {/* End */}




          <section className="MainContent">
            <motion.div
              animate={{ y: -0 }}
              transition={transition} initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div id='bottom'>
                <div className="means">
                  <h1>Men'  Styling</h1>
                  <h2>Collection <br />
                    Haircurt & Beard</h2>
                  {/* <br /> */}
                  <div id='thisDivelorem'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia magnam <br /> corrupti optio cupiditate distinctio.
                    <br /><br />
                  </div>
                  <button>Read More</button>
                </div>
              </div>
            </motion.div>
          </section>

        </div>




      </div>
      {/* End */}

      <AboutImg />

      <Service />
      <Card />
      <Gallery />
      <SubContent />
      <CardCrousal />
      <ImgsiD />
      <SubCd />
      <BackGround />
      <Trend />
      <Contact />
      <Footer />



    </div>
  )
}

export default Navbar
