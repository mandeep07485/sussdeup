import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Corevalue.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";

function CoreValue() {
  const [sticky, setSticky] = useState(false);
  const values = [
    {
      title: "Excellence",
      desc: "Pursuit of the highest academic and professional standards to ensure quality in education and outcomes.",
    },
    {
      title: "Innovation",
      desc: "Encouraging creative thinking, research, and problem-solving to drive progress and originality.",
    },
    {
      title: "Integrity",
      desc: "Maintaining ethical practices, honesty, and transparency in academics and professional endeavors.",
    },
    {
      title: "Patriotism",
      desc: "Instilling a deep love and respect for the nation, its culture, and heritage while serving society.",
    },
    {
      title: "Inclusivity",
      desc: "Providing equal opportunities and fostering diversity to create a supportive and welcoming environment.",
    },
    {
      title: "Industry Alignment",
      desc: "Ensuring the curriculum, training, and skill development match the needs of the current job market.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup (avoid memory leak)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="header_area">
          {/* Header Top */}
          <div className="header_top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-8">
                  <div className="header_info">
                    <ul>
                      <li>
                        <a href="mailto:info@sussdeu.ac.in">
                          <MdEmail />
                          info@sussdeu.ac.in
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

          <hr />

          {/* Navbar */}
          <div
            className={`${sticky ? "navbar sticky" : "navbar"} header_bottom`}
          >
            <div className="container">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                  <div className="logo">
                    <img src="logo.jpeg" alt="University Logo" />
                  </div>
                </div>

                {/* Main Menu */}
                <div className="col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block">
                  <div className="main-menu">
                    <nav>
                      <ul className="mobile_menu">
                        {/* UNIVERSITY OVERVIEW */}
                        <li className="nav-item dropdown mobile_menu_list">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="overviewDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            UNIVERSITY OVERVIEW
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-start"
                            aria-labelledby="overviewDropdown"
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

                        {/* LEADERSHIP & GOVERNANCE */}
                        <li className="nav-item dropdown mobile_menu_list">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="governanceDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            LEADERSHIP & GOVERNANCE
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-start"
                            aria-labelledby="governanceDropdown"
                          >
                            <li>
                              <Link className="dropdown-item" to="profile">
                                Chancellor Profile
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="management">
                                University Management
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="governors">
                                Board of Governors
                              </Link>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Academic Council
                              </a>
                            </li>
                          </ul>
                        </li>

                        {/* ACADEMIC PROGRAMS */}
                        <li className="nav-item dropdown mobile_menu_list">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="programsDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            ACADEMIC PROGRAMS
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-start"
                            aria-labelledby="programsDropdown"
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

                        {/* ADMISSIONS */}
                        <li className="nav-item dropdown mobile_menu_list">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="admissionsDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            ADMISSIONS
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-start"
                            aria-labelledby="admissionsDropdown"
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

                        {/* CAMPUS & FACILITIES */}
                        <li className="nav-item dropdown mobile_menu_list">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="campusDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            CAMPUS & FACILITIES
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-start"
                            aria-labelledby="campusDropdown"
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

                        {/* RESEARCH & INNOVATION */}
                        <li className="nav-item dropdown mobile_menu_list">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="researchDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            RESEARCH & INNOVATION
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-start"
                            aria-labelledby="researchDropdown"
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

                {/* Pay Button */}
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
      <div className="values-section py-5">
        <div className="container text-center text-white">
          <h2 className="mb-5">Core Values</h2>
          <div className="row g-4">
            {values.map((val, i) => (
              <div key={i} className="col-md-4">
                <div className="value-card h-100 p-4">
                  <h4>{val.title}</h4>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
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

export default CoreValue;
