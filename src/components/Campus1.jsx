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
import "./Campus1.css";

function Campus1() {
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
      <div className="campus-container">
        {/* Section 1: Hero */}
        <div className="hero-section text-center text-white">
          <img
            src="https://foeii.in/wp-content/uploads/2025/06/foeii-university.jpg"
            alt="Campus"
            className="img-fluid hero-img"
          />
          <div className="hero-content">
            <h1 className="display-4 fw-bold">Infrastructure Overview</h1>
            <button className="btn btn-primary mt-3">SUSSDEU</button>
            <p className="lead mt-2">INFRASTRUCTURE OVERVIEW</p>
          </div>
        </div>

        {/* Section 2: Overview */}
        <div className="container my-5">
          <div className="row">
            <div className="col">
              <h2 className="fw-bold mb-3">
                SHAHEED UDHAM SINGH SKILL DEVELOPMENT & ENTREPRENEURSHIP
                UNIVERSITY PUNJAB (SUSSDEU)
              </h2>
              <p>
                Situated across a sprawling 50-acre site in Ludhiana, Punjab,
                the campus stands as a modern hub of learning, innovation, and
                sustainability. With a built-up area of 2 lakh square feet in
                its Phase 1 development, the infrastructure features
                cutting-edge academic buildings, smart classrooms, labs, and
                student amenities. Designed with environmental responsibility in
                mind, 40% of the campus is covered in lush greenery and
                plantations, promoting a healthy and eco-friendly learning
                environment. Backed by a ₹500 crore total investment, the campus
                is being developed in phases with a focus on world-class
                facilities, technology integration, and student-centric design.
                This campus reflects a vision of future-ready education blended
                with sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Details Cards */}
        <div className="container my-5">
          <div className="row text-center">
            <div className="col-md-3 mb-3">
              <div className="card shadow-sm p-3 h-100">
                <span className="fw-bold">Total Area:</span> <br /> 50 acres in
                Ludhiana, Punjab
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card shadow-sm p-3 h-100">
                <span className="fw-bold">Built-up Area:</span> <br /> 2 lakh
                sq. ft. (Phase 1)
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card shadow-sm p-3 h-100">
                <span className="fw-bold">Green Campus:</span> <br /> 40% area
                under plantation
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card shadow-sm p-3 h-100">
                <span className="fw-bold">Total Investment:</span> <br /> ₹500
                crore
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Membership */}
        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Become A SUSSDEU Member</h2>
              <p>
                SUSSDEU FOUNDATION (Shaheed Udham Singh Skill Development &
                Entrepreneurship University) is a not-for-profit organization
                with a collaborative and collective platform to work for
                educational support system and all members will be the
                participant to work for objectives of the SUSSDEU.
              </p>
              <p>
                SUSSDEU membership is a platform to create opportunities for
                Academia to become an Educator, Researcher, Innovator and Member
                of "Board of Studies". Industry Professionals and Business
                Leaders will become a "Professor of Practice of UGC". Trainers
                will become a part of Skill India, Entrepreneurs will become a
                Training Partner (TP), Managers will become an Administrator of
                the Educational System of India.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://i0.wp.com/foeii.in/wp-content/uploads/2025/01/FOEII-29.jpg?fit=1100%2C732&ssl=1"
                alt="Membership"
                className="img-fluid rounded shadow"
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

export default Campus1;
