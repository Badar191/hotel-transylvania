import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"; // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHotel } from "@fortawesome/free-solid-svg-icons";
// import { faUtensils, faDumbbell } from "@fortawesome/free-solid-svg-icons";

import Slideshow from "./Slideshow.js";
import Offers from "./offers.js";
import Amenities from "./amenities.js";
import Contact from "./contact.js";
import AboutUs from "./about.js";
import Dinning from "./dinning.js";
import Login from "./login.js";
import Signup from "./signup.js";

import "./Banner.css";
import Carousel from "react-bootstrap/Carousel";
import banner from "./img/banner.png";
import banner1 from "./img/banner1.jpg";
import banner3 from "./img/banner2.jpg";
import Logo from "./img/logo3.png";
import footerlogo from "./img/footerlogo.jpg";

function App() {
  // const [show, setShow] = useState(false);
  // const [margin,setMargin] = useState(0);

  // const buttonHandler = () => {
  //   console.log("Menu Click");
  //   console.log(show);
  //   setShow(!show);
  //   // setMargin('233px')
  // };

  const navbarMenu = false
    ? "container-fluid  NavbarMargin"
    : "container-fluid ";
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <header>
                <div className="container-fluid banner" id="home">
                  <div className="row">
                    <div className="col-md-12">
                      <nav className="navbar">
                        <div className="navbar-brand  Logo">
                          <img
                            src={Logo}
                            className="logo animeB"
                            style={{ height: "70px" }}
                          />
                        </div>

                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarMenu"
                          aria-controls="navbarMenu"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span class="fas fa-angle-double-down"></span>
                        </button>
                        <div
                          className="nav collapse navbar-collapse"
                          id="navbarMenu"
                        >
                          <ul className="nav" id=" nav">
                            <li className="nav-item">
                              <Link to="/" className="nav-link">
                                Home
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/about" className="nav-link">
                                About
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/offers" className="nav-link">
                                Offers
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/dinning" className="nav-link">
                                Dining & Drinks
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/amenities" className="nav-link">
                                Amenities
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/contact" className="nav-link">
                                Contact
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="nav2">
                        <ul className="nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/offers" className="nav-link">
                    Offers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dinning" className="nav-link">
                    Dining & Drinks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/amenities" className="nav-link">
                    Amenities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
                        </div>
                      </nav>
                      <Carousel className="carousel">
                        <Carousel.Item className="ban-img-1">
                          <img
                            className="d-block w-100 ban-img  "
                            src={banner}
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <div className="col-md-8 offset-md-2 info">
                              <h1 className="animate__animated animate__rollIn">
                                Hotel Transylvania
                              </h1>

                              <p className="animate__animated animate__fadeInDown">
                                Make The Moments you Never Forget. !
                              </p>
                              <Link
                                className="btn btn-md text-center animate__animated animate__tada"
                                to="/login"
                              >
                                BOOK NOW
                              </Link>
                            </div>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100 ban-img"
                            src={banner1}
                            alt="Second slide"
                          />

                          <Carousel.Caption>
                            <div className="col-md-8 offset-md-2 info">
                              <h1 className="animate__animated animate__rollIn">
                                Hotel Transylvania
                              </h1>
                              <p className="animate__animated animate__fadeInDown">
                                Find Peace You Never Get in the Whole World. !
                              </p>
                              <Link
                                className="btn btn-md text-center animate__animated animate__tada"
                                to="/login"
                              >
                                BOOK NOW
                              </Link>
                            </div>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100 ban-img"
                            src={banner3}
                            alt="Third slide"
                          />

                          <Carousel.Caption>
                            <div className="col-md-8 offset-md-2 info">
                              <h1 className="animate__animated animate__rollIn">
                                Hotel Transylvania
                              </h1>
                              <p className="animate__animated animate__fadeInDown">
                                Fill your Life with Pro-Level Enjoyment. !
                              </p>
                              <Link
                                className="btn btn-md text-center animate__animated animate__tada"
                                to="/login"
                              >
                                BOOK NOW
                              </Link>
                            </div>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                </div>
              </header>

              <div className="wrapper">
                <div className="main-div main-div1">
                  <h1 className="divH">Enjoy</h1>
                </div>
                <div className="main-div main-div2">
                  <h1 className="divH">Every</h1>
                </div>
                <div className="main-div main-div3">
                  <h1 className="divH">
                    Moment <i className="fas fa-heartbeat"></i>
                  </h1>
                </div>
              </div>

              <div>
                <Slideshow />
              </div>
            </div>
          }
        />

        <Route
          path="/contact"
          element={
            <div>
              <Contact />
            </div>
          }
        />

        <Route
          path="/about"
          element={
            <div>
              <AboutUs />
            </div>
          }
        />

        <Route
          path="/offers"
          element={
            <div>
              <Offers />
            </div>
          }
        />
        <Route
          path="/amenities"
          element={
            <div>
              <Amenities />
            </div>
          }
        />
        <Route
          path="/dinning"
          element={
            <div>
              <Dinning />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div>
              <Signup />
            </div>
          }
        />
      </Routes>
      {/* 
          <FontAwesomeIcon icon={faHotel} size="3x" />
      */}

      <section className="footBack">
        <div class="container">
          <footer class="py-2">
            <ul class="nav justify-content-center pb-3 mb-3">
              <li class="nav-item">
                <Link to="/" className="nav-link px-2 text-body-secondary">
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/amenities"
                  className="nav-link px-2 text-body-secondary"
                >
                  Features
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/contact"
                  className="nav-link px-2 text-body-secondary"
                >
                  FAQs
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" className="nav-link px-2 text-body-secondary">
                  About
                </Link>
              </li>
            </ul>
            <hr className="text-white footerLine" />
            <a
              href="/"
              className="text-center text-body-secondary border-bottom"
            >
              <img src={footerlogo} style={{ height: "60px" }} />
            </a>
            <hr className="text-white footerLine" />
            <p className="text-center text-white text-body-secondary">
              © 2023 Copyright, Transylvania.Inc <i class="fas fa-leaf"></i>
            </p>
          </footer>
        </div>
      </section>
    </BrowserRouter>

    //   <div className="clr"></div>
    //   <footer id="main-footer" className="main-footer">
    //     <p>Transylvania &copy; 2023</p>
    //   </footer>
    // </div>
  );
}

export default App;
