import "../App.css";
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

function Profile() {
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
                              <a className="dropdown-item" href="#">
                                About SUSSDEU
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Vision & Mission
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
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
                              <a className="dropdown-item" href="#">
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
                              <a className="dropdown-item" href="#">
                                Application Process
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Eligibility Criteria
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Fee Structure
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
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
                              <a className="dropdown-item" href="#">
                                Infrastructure Overview
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Academic Facilities
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Student Life
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
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
                              <a className="dropdown-item" href="#">
                                Research Centers
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Industry Partnerships
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Innovation Framework
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
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
      <div className="container-fluid Chancellor d-flex align-items-center text-center text-white">
        <div className="row w-100">
          <div className="col-12">
            <h4 className="display-5 fw-bold">
              Management of University A team of Professional Leaders
            </h4>
            <p className="lead fw-semibold mt-3">
              SUSSDEU:: Management of University A team of Professional Leaders
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="public/logo.jpeg"
              className="img-fluid rounded shadow"
              alt="Logo"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">Skilling Way of Education in India</h3>
            <p>
              University management is a combination of
              Public-Private-Partnership (PPP) and supporting from the ecosystem
              of Skills, Education, Industry, professionals, policymakers,
              entrepreneurs and development sector in association with SUSSDEUP
              and team to work for “Skilling Way of Education”.
            </p>
            <p>
              An Institution with capacity to Invest INR 2500/ Cr. for creating
              “Skill University” with a not for profit entity to work for
              society development with the participation and partnership of
              Public Funds, CSR & Corporate Alliance, Charities Donations,
              Private Equities-Partnerships and Government support.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sandeep">
          <div className="row">
            <div className="col-md-6">
              <img src="public/kaura.jpg"></img>
              <h2>Dr. Sandeep Singh Kaura </h2>
            </div>
            <div className="col-md-6">
              <h3>Chancellor of the UNIVERSITY</h3>
              <p>
                <strong>Dr. Sandeep Singh Kaura</strong> holds the esteemed
                position of Founder Chancellor of Shaheed Udham Singh Skill
                Development & Entrepreneurship University Punjab.
                <br></br>
                Former Advisor to the National Skill Development Corporation
                (NSDC)/NSDC International under the Ministry of Skill
                Development & Entrepreneurship, Government of India
                <br></br>
                Spearheaded the vision of establishing India as a global hub for
                skilled workforce as part of the Skill India International
                Mission
                <br></br>
                Founder Chancellor of Lamrin Tech Skills University Punjab
                <br></br>
                Advisor to the Chief Minister of Punjab for Skill Development
                and Technical Education (2015-2023)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>
              {" "}
              Globally renowned for his expertise in skill development, Dr.
              Kaura is dedicated to fortifying the foundation of the skilling
              ecosystem in countries with a surplus of young workforce and
              facilitating their migration to countries experiencing significant
              shortage of skilled workforce.
              <br></br> 26 years of rich experience in Government and Private
              sector. Chevening Fellowship from the University of Oxford.
              Doctorate from Indian School of Business (ISB) Hyderabad
            </p>
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

export default Profile;
