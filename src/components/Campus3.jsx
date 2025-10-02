import "../App.css";
import "./Responsive.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import "./Campus3.css";

function Campus3() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup (memory leak avoid karan lyi)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="header_area">
          <div className="header_top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-8">
                  <div className="header_info">
                    <ul>
                      <li>
                        <a href="info@sussdeu.ac.in">
                          <MdEmail />
                          info@sussdeu.ac.in{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaLocationDot />
                          Village Moonak, GT Road, Ludhiana - 141120, Punjab,
                          India
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-4">
                  <div className="header_top-right">
                    <div className="header_login">
                      <a href="#">
                        <CiUser />
                        Login
                      </a>
                    </div>
                    <div className="header_btn">
                      <Link to="contact">
                        <button className="contact_btn">Contact Us</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div
            className={`${sticky ? "navbar sticky" : "navbar"} header_bottom`}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                  <div className="logo">
                    <img src="logo.jpeg"></img>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block">
                  <div className="main-menu">
                    <nav>
                      <ul className="mobile_menu">
                        <li className="nav-item dropdown mobile_menu_list">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="aboutDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            UNIVERSITY OVERVIEW
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-start"
                            aria-labelledby="aboutDropdown"
                          >
                            <li>
                              <a className="dropdown-item" href="about">
                                About SUSSDEU
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="vision">
                                Vision & Mission
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="corevalue">
                                University Values
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Historical Legacy
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown mobile_menu_list">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="aboutDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            LEADERSHIP & GOVERNANCE
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-start"
                            aria-labelledby="aboutDropdown"
                          >
                            <li>
                              <a className="dropdown-item" href="profile">
                                Chancellor Profile
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="management">
                                University Management
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="governors">
                                Board of Governors
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Academic Council
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown mobile_menu_list">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="aboutDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            ACADEMIC PROGRAMS
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-start"
                            aria-labelledby="aboutDropdown"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Undergraduate Programs
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Postgraduate Programs
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Diploma & Certificate Courses
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Professional Development Programs
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown mobile_menu_list">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="aboutDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            ADMISSIONS
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-start"
                            aria-labelledby="aboutDropdown"
                          >
                            <li>
                              <a className="dropdown-item" href="process">
                                Application Process
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="eligibility">
                                Eligibility Criteria
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="feestructure">
                                Fee Structure
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="scholarship">
                                Scholarships & Financial Aid
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown mobile_menu_list">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="aboutDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            CAMPUS & FACILITIES
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-start"
                            aria-labelledby="aboutDropdown"
                          >
                            <li>
                              <a
                                className="dropdown-item"
                                href="infrastructure"
                              >
                                Infrastructure Overview
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="academicfacities"
                              >
                                Academic Facilities
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="studentlife">
                                Student Life
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="residentialfacilities"
                              >
                                Residential Facilities
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown mobile_menu_list">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="aboutDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            RESEARCH & INNOVATION
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-start"
                            aria-labelledby="aboutDropdown"
                          >
                            <li>
                              <a className="dropdown-item" href="research">
                                Research Centers
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="industrypartner"
                              >
                                Industry Partnerships
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="innovation">
                                Innovation Framework
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="ecosystem">
                                Startup Ecosystem
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-6 col-6">
                  <Link to="pay">
                    <button className="pay_btn">Pay to Foundation</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="campus3">
        {/* Hero Section */}
        <div className="hero-section text-center text-white d-flex align-items-center justify-content-center">
          <div>
            <h1>Student Life Facilities</h1>
            <button className="btn btn-warning mt-3">SUSSDEU</button>
            <p className="lead mt-2">STUDENT LIFE FACILITIES</p>
          </div>
        </div>

        {/* Sports & Recreation */}
        <div className="container my-5">
          <h2 className="text-center mb-4">Sports & Recreation</h2>
          <p className="text-muted text-center">
            The campus places a strong emphasis on student well-being with
            world-class sports & fitness infrastructure...
          </p>

          <div className="row g-4 mt-4">
            <div className="col-md-3">
              <div className="card shadow h-100 p-3">
                <h6>
                  <strong>Sports Complex</strong>
                </h6>
                <p>Indoor & outdoor spaces for year-round sports & fitness.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow h-100 p-3">
                <h6>
                  <strong>Outdoor Grounds</strong>
                </h6>
                <p>Cricket ground, basketball & badminton courts.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow h-100 p-3">
                <h6>
                  <strong>Gym & Fitness Center</strong>
                </h6>
                <p>Equipped with cardio & strength training facilities.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow h-100 p-3">
                <h6>
                  <strong>Swimming Pool</strong>
                </h6>
                <p>Planned addition for aquatic sports & recreation.</p>
              </div>
            </div>
          </div>
          <div className="alert alert-info mt-4">
            The university promotes an active lifestyle with top-tier sports,
            gym, and upcoming swimming pool.
          </div>
        </div>

        {/* Cultural & Events */}
        <div className="container my-5">
          <h2 className="text-center mb-4">Cultural & Events</h2>
          <p className="text-muted text-center">
            A vibrant hub for creativity, leadership, and student engagement...
          </p>

          <div className="row g-4 mt-4">
            <div className="col-md-3">
              <div className="card shadow h-100 p-3">
                <h6>
                  <strong>500-Seat Auditorium</strong>
                </h6>
                <p>Perfect for cultural programs, guest lectures & events.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow h-100 p-3">
                <h6>
                  <strong>Seminar Halls</strong>
                </h6>
                <p>Modern conference rooms for workshops & academic talks.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow h-100 p-3">
                <h6>
                  <strong>Student Activity Centers</strong>
                </h6>
                <p>
                  Dynamic hubs for clubs, societies & student-led initiatives.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow h-100 p-3">
                <h6>
                  <strong>Cultural Spaces</strong>
                </h6>
                <p>Stages for music, dance, theater & creative arts.</p>
              </div>
            </div>
          </div>
          <div className="alert alert-success mt-4">
            Students are empowered to express creativity & leadership through
            diverse cultural platforms.
          </div>
        </div>

        {/* Membership Section */}
        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Become A SUSSDEU Member</h2>
              <p>
                SUSSDEU FOUNDATION is a not-for-profit platform for educators,
                innovators, researchers, and entrepreneurs. Membership connects
                academia with industry leaders and professionals to collaborate
                for India’s educational development.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://i0.wp.com/foeii.in/wp-content/uploads/2025/01/FOEII-29.jpg?fit=1100%2C732&ssl=1"
                className="img-fluid rounded shadow"
                alt="SUSSDEU"
              />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="footer_bottom">
            <div className="row">
              <div className="col-md-3">
                <img src="public/logo.jpeg"></img>
                <div>
                  <p>
                    Federation of Education in India (भारतीय शिक्षा संघ) is a
                    legal entity, registered in Company Act 2013, Section 8,
                    not-for-profit for educational development in India on
                    January 20th 2023, with Ministry of Corporate Affairs (MCA)
                    Government of India. (UIN U85300DL2023NPL410237){" "}
                  </p>
                </div>

                <h3>Follow us</h3>
                <div className="footer_icon">
                  <div className="footer_icon1">
                    <Link to="/SUSSDEUPunjab">
                      <FaFacebook />
                    </Link>
                  </div>
                  <div className="footer_icon2">
                    <Link to="@sussdeu_official">
                      <FaInstagram />
                    </Link>
                  </div>
                  <div className="footer_icon3">
                    <Link to="/company/sussdeu-punjab">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h2>Explore</h2>
                <br></br>
                <ul className="footer_list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <br></br>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <br></br>
                  <li>
                    <a href="#">Membership</a>
                  </li>
                  <br></br>
                  <li>
                    <a href="#">Public Documents</a>
                  </li>
                  <br></br>
                  <li>
                    <a href="#">Career with us</a>
                  </li>
                  <br></br>
                  <li>
                    <a href="#">Media & Blogs</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h2>Links</h2>
                <ul className="footer_list">
                  <li>
                    <a href="#">University</a>
                  </li>
                  <br></br>
                  <li>
                    <a href="#">Academics</a>
                  </li>
                  <br></br>
                  <li>
                    <a href="#">UG-PG-PhD</a>
                  </li>
                  <br></br>
                  <li>
                    <a href="#">AI-LMS(24*7*365)</a>
                  </li>
                  <br></br>
                  <li>
                    <a href="#">Privacy Statement</a>
                  </li>
                  <br></br>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                  <br></br>
                  <li>
                    <a href="#">Terms Of Service</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h2>Contact Us</h2>
                <br></br>
                <p>
                  Registered Office: Village Moonak, GT Road, Ludhiana - 141120,
                  Punjab, India
                </p>
                <br></br>
                <p>
                  E: info@sussdeu.ac.in <br></br>Contact no.: +91-161-2345679{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Campus3;
