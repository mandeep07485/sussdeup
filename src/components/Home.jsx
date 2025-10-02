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

function Home() {
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
      <div>
        <section>
          <div className="container-fuild">
            <div className="row">
              <div className="image">
                <img src="university.jpeg"></img>
              </div>
            </div>
          </div>
        </section>
        <section className="features_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <div className="features_item">
                  <div className="features_icon mr-25">
                    <div className="tp-sv-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="44"
                        viewBox="0 0 42 44"
                        fill="none"
                      >
                        <path
                          d="M16.6013 2.11585L3.95694 10.3704C-0.0968136 13.0169 -0.0968136 18.94 3.95694 21.5865L16.6013 29.841C18.8697 31.3323 22.6084 31.3323 24.8769 29.841L37.4582 21.5865C41.491 18.94 41.491 13.0379 37.4582 10.3914L24.8769 2.13685C22.6084 0.624568 18.8697 0.624569 16.6013 2.11585Z"
                          stroke="#031220"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.3176 24.275L7.2966 34.1259C7.2966 36.7934 9.35499 39.6499 11.8755 40.4901L18.5757 42.7165C19.7309 43.0945 21.6423 43.0945 22.8185 42.7165L29.5188 40.4901C32.0392 39.6499 34.0976 36.7934 34.0976 34.1259V24.38"
                          stroke="#3D6CE7"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M40.4408 28.3077V15.7054"
                          stroke="#3D6CE7"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="features_content">
                    <h3 className="features_title">
                      <a href="#">The Foundation</a>
                    </h3>
                    <p>
                      The cornerstone for fostering education, innovation, and
                      skill development.
                    </p>
                    <div className="sv-btn">
                      <a href="#">
                        Learn More
                        <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <div className="features_item">
                  <div className="features_icon mr-25">
                    <div className="tp-sv-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="44"
                        viewBox="0 0 42 44"
                        fill="none"
                      >
                        <path
                          d="M16.6013 2.11585L3.95694 10.3704C-0.0968136 13.0169 -0.0968136 18.94 3.95694 21.5865L16.6013 29.841C18.8697 31.3323 22.6084 31.3323 24.8769 29.841L37.4582 21.5865C41.491 18.94 41.491 13.0379 37.4582 10.3914L24.8769 2.13685C22.6084 0.624568 18.8697 0.624569 16.6013 2.11585Z"
                          stroke="#031220"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.3176 24.275L7.2966 34.1259C7.2966 36.7934 9.35499 39.6499 11.8755 40.4901L18.5757 42.7165C19.7309 43.0945 21.6423 43.0945 22.8185 42.7165L29.5188 40.4901C32.0392 39.6499 34.0976 36.7934 34.0976 34.1259V24.38"
                          stroke="#3D6CE7"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M40.4408 28.3077V15.7054"
                          stroke="#3D6CE7"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="features_content">
                    <h3 className="features_title">
                      <a href="#">About Foundation</a>
                    </h3>
                    <p>
                      An overview of University's mission, vision, passion and
                      impact on education and research.
                    </p>
                    <div className="sv-btn">
                      <a href="#">
                        Learn More
                        <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <div className="features_item">
                  <div className="features_icon mr-25">
                    <div className="tp-sv-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="38"
                        viewBox="0 0 41 38"
                        fill="none"
                      >
                        <path
                          d="M39.3333 27.9821V4.84788C39.3333 2.54788 37.455 0.84205 35.1742 1.03372H35.0592C31.0342 1.37872 24.92 3.42955 21.5083 5.57622L21.1825 5.78705C20.6267 6.13205 19.7067 6.13205 19.1508 5.78705L18.6717 5.49955C15.26 3.37205 9.165 1.34038 5.14 1.01455C2.85917 0.822883 1 2.54788 1 4.82872V27.9821C1 29.8221 2.495 31.547 4.335 31.777L4.89083 31.8537C9.05 32.4096 15.4708 34.5179 19.1508 36.5304L19.2275 36.5687C19.745 36.8562 20.5692 36.8562 21.0675 36.5687C24.7475 34.537 31.1875 32.4096 35.3658 31.8537L35.9983 31.777C37.8383 31.547 39.3333 29.8221 39.3333 27.9821Z"
                          stroke="#031220"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M20.1666 6.41956V35.1696"
                          stroke="#3D6CE7"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12.0209 12.1696H7.70837"
                          stroke="#3D6CE7"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M13.4584 17.9196H7.70837"
                          stroke="#3D6CE7"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="features_content">
                    <h3 className="features_title">
                      <a href="#">Membership</a>
                    </h3>
                    <p>
                      Join the Foundation community and be part of a
                      transformative learning ecosystem.
                    </p>
                    <div className="sv-btn">
                      <a href="#">
                        Learn More
                        <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container degree">
        <div className="row">
          <div className="col-md-4">
            <img
              decoding="async"
              width="359"
              height="389"
              src="https://i0.wp.com/foeii.in/wp-content/uploads/2025/02/1.png?fit=359%2C389&amp;ssl=1"
              class="attachment-full size-full wp-image-2796"
              alt=""
              srcset="https://i0.wp.com/foeii.in/wp-content/uploads/2025/02/1.png?w=359&amp;ssl=1 359w, https://i0.wp.com/foeii.in/wp-content/uploads/2025/02/1.png?resize=277%2C300&amp;ssl=1 277w"
              sizes="(max-width: 359px) 100vw, 359px"
            ></img>
          </div>
          <div className="col-md-8">
            <div className="degrees">
              <h3>
                Degrees in Various Discipline of academics, skils with AI and
                Enterpreneurship
              </h3>
              <div className="elementor-item">
                <ul className="elementor-icon-list">
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>AI</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Skills</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Sports</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Passion</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Science</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Research</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Innovation</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Enterpreneurship</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>
                      Fractal Scheme of Evaluation with AI-LMS: 24*7*365
                    </span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>
                      Multidisciplinary Credits of National Education Policy
                    </span>
                  </li>
                </ul>

                <ul className="elementor-icon-list2">
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Food and Food Tech</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Agriculture and Agro Tech</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Humanities and Language</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Motor Driving and Life Skills</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Engineering and Technology</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Commerce and Management</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Liberal Arts and Performing Arts</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Social Studies and Development</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Internships and Apprenticeships</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Mentorship and Professionalism</span>
                  </li>
                  <li>
                    <span className="elementor-icon">
                      <MdPlayArrow />
                    </span>
                    <span>Learner Choice Cultivation of Modules</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="counter_inner grey-bg-2ss">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="counter_item d-flex align-items-start tp-el-content counter_item-border">
                <div className="counter_icon mr-15">
                  <div className="c-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                    >
                      <path
                        d="M37 19.1667C37 9.23075 28.936 1.16675 19 1.16675C9.064 1.16675 1 9.23075 1 19.1667C1 29.1027 9.064 37.1667 19 37.1667"
                        stroke="#031220"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M11.8 2.9668H13.6C10.09 13.4788 10.09 24.8548 13.6 35.3668H11.8"
                        stroke="#031220"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M24.4 2.9668C26.146 8.2228 27.028 13.6948 27.028 19.1668"
                        stroke="#031220"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M2.80005 26.3667V24.5667C8.05605 26.3127 13.528 27.1947 19 27.1947"
                        stroke="#031220"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M2.80005 13.7665C13.312 10.2565 24.688 10.2565 35.2001 13.7665"
                        stroke="#031220"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M30.16 36.0867C33.3412 36.0867 35.92 33.5078 35.92 30.3267C35.92 27.1455 33.3412 24.5667 30.16 24.5667C26.9789 24.5667 24.4 27.1455 24.4 30.3267C24.4 33.5078 26.9789 36.0867 30.16 36.0867Z"
                        stroke="#3D6CE7"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M37.0001 37.1667L35.2001 35.3667"
                        stroke="#3D6CE7"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="counter_content">
                  <h4 className="tp-el-subtitle">
                    <span className="counter">9</span>+
                  </h4>
                  <p>
                    Languages, Disciplines, Life Skills, Passion and
                    Entrepreneurship
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="counter_item d-flex align-items-start tp-el-content counter_item-border">
                <div className="counter_icon mr-15">
                  <div className="c-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="38"
                      viewBox="0 0 50 38"
                      fill="none"
                    >
                      <path
                        d="M14.6984 27.5676V25.3757H16.1609V27.5676H14.6984Z"
                        fill="#031220"
                        stroke="#F5F6F8"
                        stroke-width="0.1"
                      ></path>
                      <path
                        d="M18.9289 27.5676V25.3757H20.3914V27.5676H18.9289Z"
                        fill="#031220"
                        stroke="#F5F6F8"
                        stroke-width="0.1"
                      ></path>
                      <path
                        d="M17.5234 25.9512C14.1936 25.9512 11.7765 23.4538 11.7765 20.0065V19.0436H13.239V20.0065C13.239 21.2677 13.6787 22.3416 14.436 23.1004C15.1932 23.8591 16.2649 24.2997 17.5234 24.2997C18.7821 24.2997 19.8538 23.8591 20.611 23.1004C21.3682 22.3416 21.8078 21.2677 21.8078 20.0065V14.6279H23.2703V20.006C23.2707 23.4538 20.8532 25.9512 17.5234 25.9512Z"
                        fill="#031220"
                        stroke="#F5F6F8"
                        stroke-width="0.1"
                      ></path>
                      <path
                        d="M15.2448 8.89414L25.4444 8.89327V12.1213C25.4444 14.2014 23.9423 15.8832 22.1085 15.8832H13.9511C13.5654 15.8832 13.262 16.2371 13.262 16.6588V23.2591L9.42375 18.0384V13.3221C9.42375 11.6064 10.6626 10.221 12.1734 10.221H12.6784H12.7032L12.7182 10.2013C13.3495 9.37396 14.2661 8.89414 15.2448 8.89414ZM10.8859 17.4764H10.911L11.7096 18.5626L11.7999 18.6854V18.533V16.6588C11.7999 15.3145 12.7704 14.2316 13.9515 14.2316H22.1085C23.1468 14.2316 23.9816 13.2789 23.9816 12.1213V10.5948V10.5448H23.9316L15.2445 10.5448L15.2444 10.5448C14.6109 10.5457 14.0256 10.9051 13.6774 11.5015C13.6774 11.5015 13.6774 11.5015 13.6774 11.5015L13.4607 11.8725H12.173C11.4577 11.8725 10.8859 12.5288 10.8859 13.3221V17.4264V17.4764Z"
                        fill="#031220"
                        stroke="#F5F6F8"
                        stroke-width="0.1"
                      ></path>
                      <path
                        d="M42.9272 32.716V21.0804H44.3897V32.716H42.9272Z"
                        fill="#031220"
                        stroke="#F5F6F8"
                        stroke-width="0.1"
                      ></path>
                      <path
                        d="M7.07152 32.7159H5.60862V6.08232C5.60862 4.82863 6.51389 3.81892 7.61448 3.81892H26.0965V5.4705H7.61487C7.3095 5.4705 7.07152 5.75095 7.07152 6.08232V32.7159Z"
                        fill="#031220"
                        stroke="#F5F6F8"
                        stroke-width="0.1"
                      ></path>
                      <path
                        d="M10.2844 32.0648H8.82229V30.104C8.82229 28.2623 10.2812 26.7664 12.0711 26.7664H23.1184C24.9083 26.7664 26.3668 28.2627 26.3668 30.104V31.5266H24.9043V30.104C24.9043 29.1711 24.1002 28.418 23.1184 28.418H12.0707C11.0885 28.418 10.2844 29.1715 10.2844 30.104V32.0648Z"
                        fill="#031220"
                        stroke="#F5F6F8"
                        stroke-width="0.1"
                      ></path>
                      <path
                        d="M0.34435 35.8766L0.344278 35.8765L0.05 35.6292V31.807H49.95V35.6292L49.6558 35.8773C49.5603 35.9573 49.0814 36.3514 48.4465 36.7253C47.81 37.1002 47.0245 37.4499 46.3141 37.4499H3.68516C2.9745 37.4499 2.18909 37.1002 1.55278 36.7252C0.918101 36.3512 0.439536 35.9568 0.34435 35.8766ZM1.5125 34.7592V34.7844L1.5328 34.7994C1.84194 35.0277 2.22749 35.2768 2.61064 35.469C2.99207 35.6603 3.3778 35.7988 3.68516 35.7988H46.3145C46.6216 35.7988 47.0073 35.6603 47.3888 35.469C47.772 35.2768 48.1578 35.0277 48.4676 34.7994L48.4879 34.7844V34.7592V33.509V33.459H48.4379H1.5625H1.5125V33.509V34.7592Z"
                        fill="#031220"
                        stroke="#F5F6F8"
                        stroke-width="0.1"
                      ></path>
                      <path
                        d="M31.8141 23.2115V19.0489V18.9989H31.7641H30.2215C29.1088 18.9989 28.1863 17.876 28.1863 16.4732V2.57745C28.1863 1.17324 29.1089 0.05 30.2215 0.05H45.3773C46.4916 0.05 47.4164 1.17335 47.4164 2.57745V16.4732C47.4164 17.8759 46.492 18.9989 45.3773 18.9989H36.2426H36.2225L36.208 19.0127L31.8141 23.2115ZM30.1715 1.70158V1.70539C30.0271 1.72498 29.9017 1.82807 29.8117 1.97022C29.7108 2.12959 29.6488 2.34555 29.6488 2.57789V16.4732C29.6488 16.7051 29.7108 16.9206 29.8117 17.0797C29.912 17.2377 30.0562 17.3473 30.2215 17.3473H33.2766V19.5336V19.6506L33.3611 19.5698L35.6865 17.3473H45.3769C45.543 17.3473 45.6882 17.2379 45.7893 17.0798C45.891 16.9208 45.9535 16.7052 45.9535 16.4732V2.57745C45.9535 2.34526 45.8911 2.12925 45.7895 1.96982C45.6885 1.81136 45.5433 1.70158 45.3769 1.70158H30.2215H30.1715Z"
                        fill="#3D6CE7"
                        stroke="#F5F6F8"
                        stroke-width="0.1"
                      ></path>
                      <path
                        d="M36.2705 6.36712L36.1933 6.3168V6.40902V11.6887V11.7809L36.2705 11.7306L40.3256 9.09143L40.39 9.04954L40.3256 9.00763L36.2705 6.36712ZM43.318 9.04952L34.7308 14.6386V3.45831L43.318 9.04952Z"
                        fill="#3D6CE7"
                        stroke="#F5F6F8"
                        stroke-width="0.1"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="counter_content">
                  <h4 className="tp-el-subtitle">
                    <span className="counter">99</span>+
                  </h4>
                  <p>
                    Departments of Academic, Skilling, Professional and
                    Innovative Research
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="counter_item d-flex align-items-start tp-el-content counter_item-border">
                <div className="counter_icon mr-15">
                  <div className="c-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="41"
                      viewBox="0 0 44 41"
                      fill="none"
                    >
                      <path
                        d="M23.3422 18.3518C23.5378 18.3322 23.7725 18.3322 23.9877 18.3518C28.6435 18.1953 32.3408 14.3806 32.3408 9.68568C32.3408 4.89291 28.4675 1 23.6551 1C18.8624 1 14.9695 4.89291 14.9695 9.68568C14.989 14.3806 18.6863 18.1953 23.3422 18.3518Z"
                        stroke="#031220"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M10.8983 4.91248C7.10324 4.91248 4.05152 7.98376 4.05152 11.7593C4.05152 15.4566 6.98587 18.4692 10.644 18.6061C10.8005 18.5866 10.9766 18.5866 11.1526 18.6061"
                        stroke="#031220"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M33.1235 25.5703C37.8576 28.7394 37.8576 33.9039 33.1235 37.0534C27.7438 40.6529 18.9212 40.6529 13.5416 37.0534C8.80748 33.8843 8.80748 28.7198 13.5416 25.5703C18.9016 21.9904 27.7243 21.9904 33.1235 25.5703Z"
                        stroke="#031220"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M7.12298 36.2123C5.71449 35.9188 4.38426 35.3515 3.28876 34.5103C0.237038 32.2215 0.237038 28.446 3.28876 26.1572C4.36469 25.3356 5.67537 24.7879 7.06429 24.4749"
                        stroke="#031220"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M35.8077 22.6875L37.3377 25.7729C37.5464 26.2024 38.1027 26.6143 38.5722 26.6932L41.3454 27.1578C43.1188 27.4558 43.5361 28.7531 42.2582 30.0328L40.1022 32.2066C39.7371 32.5747 39.5372 33.2847 39.6502 33.7931L40.2674 36.484C40.7542 38.614 39.6328 39.4379 37.7637 38.3247L35.1644 36.7733C34.6949 36.4928 33.9212 36.4928 33.4431 36.7733L30.8437 38.3247C28.9834 39.4379 27.8532 38.6052 28.34 36.484L28.9573 33.7931C29.0703 33.2847 28.8703 32.5747 28.5052 32.2066L26.3492 30.0328C25.08 28.7531 25.4886 27.4558 27.2621 27.1578L30.0353 26.6932C30.496 26.6143 31.0524 26.2024 31.261 25.7729L32.7911 22.6875C33.6256 21.0133 34.9818 21.0133 35.8077 22.6875Z"
                        fill="#F5F6F8"
                        stroke="#3D6CE7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="counter_content">
                  <h4 className="tp-el-subtitle">
                    <span className="counter">999</span>+
                  </h4>
                  <p>
                    Programmes of Interdisciplinary-Multidisciplinary UG-PG-PHD
                    and more
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="counter_item d-flex align-items-start tp-el-content counter_item-border">
                <div className="counter_icon mr-15">
                  <div class="c-icon">
                    <svg
                      x="0px"
                      y="0px"
                      viewBox="0 0 67.4 70.6"
                      xml:space="preserve"
                      style={{ width: "44px", height: "44px" }}
                    >
                      <path
                        class="st0"
                        d="M59.7,25.4c0,0.1,0.4,2.8,6.4,12.2c0.6,0.8,0.8,1.8,0.6,2.8c-0.1,0.5-0.4,1-0.7,1.4c-0.3,0.4-0.8,0.8-1.2,1 c-1.7,0.9-3.4,1.8-5.2,2.5c0.4,3.7,0.4,7.4,0,11.1c-0.7,3.7-7.1,4.3-10.8,4.3c-0.3,0-0.7,0-1,0.1c-0.3,0.1-0.6,0.3-0.8,0.5 c-0.2,0.2-0.4,0.5-0.5,0.8c-0.1,0.3-0.2,0.6-0.1,1v5c0,0.1,0,0.3-0.1,0.4c0,0.1-0.1,0.2-0.2,0.4c-0.1,0.1-0.2,0.2-0.3,0.2 c-0.1,0.1-0.3,0.1-0.4,0.1s-0.3,0-0.4-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.1-0.1-0.3-0.1-0.4v-5 c0-0.6,0.1-1.2,0.3-1.8c0.2-0.6,0.6-1.1,1-1.5c0.4-0.4,1-0.7,1.5-0.9c0.6-0.2,1.2-0.3,1.8-0.2c4.9,0,8.4-1,8.7-2.6 c0.7-3.6-0.1-10.8-0.1-11.3c0,0,0,0,0,0c0-0.2,0-0.5,0.1-0.7c0.1-0.2,0.3-0.3,0.5-0.4c1.9-0.8,3.8-1.7,5.6-2.7 c0.2-0.1,0.4-0.3,0.6-0.4c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.4,0-0.9-0.3-1.2c-6.4-10.1-6.8-12.9-6.8-13.2C55.1,4.4,38,2.7,32.8,2.7 c-0.5,0-0.9,0-1.2,0l0,0c-0.2,0-0.4,0-0.5,0c-3.2,0-15.6,0.7-21.9,10.1h11c0.8,0,1.6,0.2,2.3,0.6c0.7,0.4,1.3,0.9,1.8,1.5 c0.5-0.6,1.1-1.2,1.8-1.5c0.7-0.4,1.5-0.6,2.3-0.6h18c0.3,0,0.5,0.1,0.7,0.3c0.2,0.2,0.3,0.5,0.3,0.7V52c0,0.1,0,0.3-0.1,0.4 c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.3,0.2c-0.1,0.1-0.3,0.1-0.4,0.1h-18c-0.8,0-1.6,0.3-2.2,0.9s-0.9,1.4-0.9,2.2 c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.2-0.5,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.8-0.3-1.6-0.9-2.2 c-0.6-0.6-1.4-0.9-2.2-0.9h-4.5c0,0,0,0,0,0.1c0,0,0.1,0.1,0.1,0.1c2.2,4.8,2.3,14.5,2.3,14.9c0,0.3-0.1,0.5-0.3,0.7 c-0.2,0.2-0.5,0.3-0.7,0.3h0c-0.3,0-0.5-0.1-0.7-0.3c-0.2-0.2-0.3-0.5-0.3-0.7l0,0c0-0.2-0.1-9.7-2.1-14c-0.2-0.4-0.4-0.7-0.6-1.1 H2.2c-0.3,0-0.5-0.1-0.7-0.3c-0.2-0.2-0.3-0.5-0.3-0.7V13.9c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.5-0.3,0.7-0.3h4.5 C13.5,1.2,28.8,0.7,31,0.7l0.5,0c0.3,0,0.8,0,1.3,0C38.4,0.7,57,2.5,59.7,25.4z M26.2,15.8c-0.6,0.6-0.9,1.4-0.9,2.2v34 c0.9-0.7,2-1,3.1-1h17V14.9h-17C27.6,14.9,26.8,15.2,26.2,15.8z M22.4,15.8c-0.6-0.6-1.4-0.9-2.2-0.9h-17V51h17c1.1,0,2.2,0.4,3.1,1 V18C23.3,17.2,22.9,16.4,22.4,15.8z M7.7,22.2h11.1c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7 c-0.2-0.2-0.5-0.3-0.7-0.3H7.7c-0.3,0-0.5,0.1-0.7,0.3s-0.3,0.5-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7C7.2,22.1,7.4,22.2,7.7,22.2z  M7.7,30.1h11.1c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7C19.3,28.1,19,28,18.8,28H7.7 c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.7s0.1,0.5,0.3,0.7C7.1,30,7.4,30.1,7.7,30.1z M18.8,37.9H7.7c-0.1,0-0.3,0-0.4-0.1 c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.1-0.2,0.2-0.3 c0.1-0.1,0.2-0.2,0.3-0.2c0.1-0.1,0.3-0.1,0.4-0.1h11.1c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.2,0.2,0.3 c0.1,0.1,0.1,0.3,0.1,0.4c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.3,0.2C19,37.9,18.9,37.9,18.8,37.9z  M7.7,45.8h11.1c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7c-0.2-0.2-0.5-0.3-0.7-0.3H7.7 c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.7s0.1,0.5,0.3,0.7C7.1,45.7,7.4,45.8,7.7,45.8z M40.9,22.2H29.8 c-0.3,0-0.5-0.1-0.7-0.3c-0.2-0.2-0.3-0.5-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.5-0.3,0.7-0.3h11.1c0.3,0,0.5,0.1,0.7,0.3 s0.3,0.5,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7C41.5,22.1,41.2,22.2,40.9,22.2z M29.8,30.1h11.1c0.3,0,0.5-0.1,0.7-0.3 c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7c-0.2-0.2-0.5-0.3-0.7-0.3H29.8c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.7 s0.1,0.5,0.3,0.7C29.3,30,29.6,30.1,29.8,30.1z M40.9,37.9H29.8c-0.1,0-0.3,0-0.4-0.1c-0.1-0.1-0.2-0.1-0.3-0.2 c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.2 c0.1-0.1,0.3-0.1,0.4-0.1h11.1c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.1,0.1,0.3,0.1,0.4 c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.3,0.2C41.2,37.9,41,37.9,40.9,37.9z M29.8,45.8h5.5 c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7c-0.2-0.2-0.5-0.3-0.7-0.3h-5.5c-0.3,0-0.5,0.1-0.7,0.3 c-0.2,0.2-0.3,0.5-0.3,0.7s0.1,0.5,0.3,0.7C29.3,45.7,29.6,45.8,29.8,45.8z"
                      ></path>
                      <path
                        class="st1"
                        d="M7.7,22.2h11.1c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7c-0.2-0.2-0.5-0.3-0.7-0.3 H7.7c-0.3,0-0.5,0.1-0.7,0.3s-0.3,0.5-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7C7.2,22.1,7.4,22.2,7.7,22.2z"
                      ></path>
                      <path
                        class="st1"
                        d="M7.7,30.1h11.1c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7C19.3,28.1,19,28,18.8,28H7.7 c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.7s0.1,0.5,0.3,0.7C7.1,30,7.4,30.1,7.7,30.1z"
                      ></path>
                      <path
                        class="st1"
                        d="M7.7,37.9h11.1c0.1,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.3,0.1-0.4 c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1-0.1-0.3-0.1-0.4-0.1H7.7c-0.1,0-0.3,0-0.4,0.1 C7.2,36,7.1,36.1,7,36.2c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.1,0,0.3,0.1,0.4c0.1,0.1,0.1,0.2,0.2,0.3 c0.1,0.1,0.2,0.2,0.3,0.2C7.4,37.9,7.6,37.9,7.7,37.9L7.7,37.9z"
                      ></path>
                      <path
                        class="st1"
                        d="M7.7,45.8h11.1c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7c-0.2-0.2-0.5-0.3-0.7-0.3H7.7 c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.7s0.1,0.5,0.3,0.7C7.1,45.7,7.4,45.8,7.7,45.8L7.7,45.8z"
                      ></path>
                      <path
                        class="st1"
                        d="M29.8,22.2h11.1c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7s-0.5-0.3-0.7-0.3H29.8 c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7C29.3,22.1,29.6,22.2,29.8,22.2L29.8,22.2z"
                      ></path>
                      <path
                        class="st1"
                        d="M29.8,30.1h11.1c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7c-0.2-0.2-0.5-0.3-0.7-0.3 H29.8c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.7s0.1,0.5,0.3,0.7C29.3,30,29.6,30.1,29.8,30.1z"
                      ></path>
                      <path
                        class="st1"
                        d="M29.8,37.9h11.1c0.1,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.3,0.1-0.4 c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1-0.1-0.3-0.1-0.4-0.1H29.8c-0.1,0-0.3,0-0.4,0.1 c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.1,0,0.3,0.1,0.4c0.1,0.1,0.1,0.2,0.2,0.3 c0.1,0.1,0.2,0.2,0.3,0.2C29.6,37.9,29.7,37.9,29.8,37.9L29.8,37.9z"
                      ></path>
                      <path
                        class="st1"
                        d="M29.8,45.8h5.5c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7c-0.2-0.2-0.5-0.3-0.7-0.3h-5.5 c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.7s0.1,0.5,0.3,0.7C29.3,45.7,29.6,45.8,29.8,45.8L29.8,45.8z"
                      ></path>
                    </svg>{" "}
                  </div>
                </div>
                <div className="counter_content">
                  <h4 className="tp-el-subtitle">
                    <span className="counter">9999</span>+
                  </h4>
                  <p>
                    Teachers, Trainers, Coaches and Professionals for Skilling
                    way of Education
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="play_btn">
          <div className="play_btn1">
            <div className="row">
              <svg
                aria-hidden="true"
                className="e-font-icon-svg e-eicon-play"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M838 162C746 71 633 25 500 25 371 25 258 71 163 162 71 254 25 367 25 500 25 633 71 746 163 837 254 929 367 979 500 979 633 979 746 933 838 837 929 746 975 633 975 500 975 367 929 254 838 162M808 192C892 279 933 379 933 500 933 621 892 725 808 808 725 892 621 938 500 938 379 938 279 896 196 808 113 725 67 621 67 500 67 379 108 279 196 192 279 108 383 62 500 62 621 62 721 108 808 192M438 392V642L642 517 438 392Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="campus_media">
          <div className="row">
            <div className="col-md-4 campus">
              <div>
                <h5>Campus Life</h5>
                <h2>University Campus</h2>
                <p>
                  An overview of University's mission, vision, and impact on
                  education and research.
                </p>
                <button>More Research</button>
              </div>
              <div className="campus">
                <img
                  decoding="async"
                  width="359"
                  height="389"
                  src="https://i0.wp.com/foeii.in/wp-content/uploads/2025/02/1.png?fit=359%2C389&amp;ssl=1"
                  class="attachment-full size-full wp-image-2796"
                  alt=""
                  srcset="https://i0.wp.com/foeii.in/wp-content/uploads/2025/02/1.png?w=359&amp;ssl=1 359w, https://i0.wp.com/foeii.in/wp-content/uploads/2025/02/1.png?resize=277%2C300&amp;ssl=1 277w"
                  sizes="(max-width: 359px) 100vw, 359px"
                ></img>
              </div>
            </div>
            <div className="col-md-5 campus">
              <img
                decoding="async"
                src="https://i0.wp.com/foeii.in/wp-content/uploads/2025/02/3.png?fit=445%2C634&amp;ssl=1"
                alt=""
              ></img>
            </div>
            <div className="col-md-3 campus">
              <div>
                <img
                  decoding="async"
                  width="265"
                  height="226"
                  src="https://i0.wp.com/foeii.in/wp-content/uploads/2025/02/2-2.png?fit=265%2C226&amp;ssl=1"
                  class="attachment-full size-full wp-image-2821"
                  alt=""
                ></img>
              </div>
              <div className="campus_img">
                <img
                  loading="lazy"
                  decoding="async"
                  width="265"
                  height="413"
                  src="https://i0.wp.com/foeii.in/wp-content/uploads/2025/02/3-2.png?fit=265%2C413&amp;ssl=1"
                  class="attachment-full size-full wp-image-2811"
                  alt=""
                  srcset="https://i0.wp.com/foeii.in/wp-content/uploads/2025/02/3-2.png?w=265&amp;ssl=1 265w, https://i0.wp.com/foeii.in/wp-content/uploads/2025/02/3-2.png?resize=192%2C300&amp;ssl=1 192w"
                  sizes="(max-width: 265px) 100vw, 265px"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="viksit">
          <div className="row">
            <div className="col-md-6">
              <img className="viksit_img" src="FOEII-29.jpg" width={600}></img>
            </div>
            <div className="col-md-6">
              <div className="skills">
                <h5>विकसित भारत निर्माण</h5>
                <h2>University of Skills & Entrepreneurship</h2>
                <p>
                  <strong>
                    900+UG-PG-Ph.D. Programmes 100+ Departments for Academic, 64
                    kla kendra of shri krishana
                  </strong>{" "}
                  and Ancient Skills of BHARAT, Institutions for Science and
                  Research of Engineering, Technology, Computer, Commerce,
                  Management, Medical, Ayurveda, Law and Library, Centre for
                  Agriculture Innovations, Food Science and Technology,
                  Hospitality and Tourism, Social Studies-Humanities and Liberal
                  Arts with Sports and Passion Academies, Motor Driving School,
                  NCC-NSS, Yoga Centre, ITI and Life Skills of
                  Industrial-Commercial, Entrepreneurship, Internship,
                  Apprenticeship, Mentorship and Employability with Global
                  Education and Association of International Universities with
                  Sustainable Development Goals and ecosystem of urbanization of
                  India.
                </p>
                <button>Know More About University</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mousigned">
          <div className="row">
            <div className="col-md-7">
              <h2>MoU Signed: The Foundation and InvestUP (Govt. of UP)</h2>
              <p>
                <strong>The Foundation</strong> signed MoU with{" "}
                <strong>InvestUP</strong> in association with Higher Education
                Department (24/HED/0000028773) and Greater Noida Industrial
                Development Authority (24/GNIDA/0000028887) to commence the
                project{" "}
                <strong>The UNIVERSITY of Skills and Entrepreneurship</strong>{" "}
                at District Gautam Budha Nagar, Uttar Pradesh with Investment of
                <strong>INR 1600 Cr. and Direct employment of 5000</strong>{" "}
                numbers to Implementation of National Education Policy (NEP
                2020) and participating for VIKSIT BHARAT 2047
              </p>
            </div>
            <div className="col-md-5">
              <img
                loading="lazy"
                decoding="async"
                width="500"
                height="300"
                src="https://i0.wp.com/foeii.in/wp-content/uploads/2025/01/FOEII-37.jpg?fit=1100%2C732&amp;ssl=1"
                class="attachment-full size-full wp-image-1447"
                alt=""
                srcset="https://i0.wp.com/foeii.in/wp-content/uploads/2025/01/FOEII-37.jpg?w=1100&amp;ssl=1 1100w, https://i0.wp.com/foeii.in/wp-content/uploads/2025/01/FOEII-37.jpg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/foeii.in/wp-content/uploads/2025/01/FOEII-37.jpg?resize=1024%2C681&amp;ssl=1 1024w, https://i0.wp.com/foeii.in/wp-content/uploads/2025/01/FOEII-37.jpg?resize=768%2C511&amp;ssl=1 768w, https://i0.wp.com/foeii.in/wp-content/uploads/2025/01/FOEII-37.jpg?resize=600%2C399&amp;ssl=1 600w"
                sizes="(max-width: 640px) 100vw, 640px"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="national_building">
              Our Agendas are devoted for National Building
            </h2>
          </div>
        </div>
        <br></br>
        <div className="education_knowledge">
          <div className="row">
            <div className="col-md-4 education">
              <h2>Education</h2>
              <p>
                <strong>Education for All</strong> Amalgamation of Worldly
                Knowledge and Eternal Knowledge. Formation of Effective
                Education System that builds the foundation of kids and child
                with moral values and responsibility towards society.
              </p>
            </div>
            <div className="col-md-4 Establishment">
              <h2>Establishment</h2>
              <p>
                <stong>Establishment</stong> of set-ups that help to attain and
                build a corruption less and terror free society. Formation of
                institutions which promote and set forward ethical practices and
                systems for financing, manufacturing, production, trading and
                marketing.
              </p>
            </div>
            <div className="col-md-4 Empowerment">
              <h2>Empowerment</h2>
              <p>
                <strong>Empowerment</strong> the Poor, the people with limited
                resources and knowledge, the Women of India, the Senior Citizens
                of India, the people with disabilities, and the Youth of India
                with knowledge, employment opportunities, skill development,
                monetary support, moral support and by educating them for their
                rights and privileges provided by the constitution of India.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 Development">
            <h2>Development</h2>
            <p>
              <strong>Development</strong> of Physical Centers of
              Primary-Secondary-University for Higher Education and Professional
              & Vocational Education, Research & Development, Employment
              Exchange & Career Guidance, Information Exchange and hubs for
              inter exchange of religious knowledge of all the religions of the
              world.
            </p>
          </div>
          <div className="col-md-4 Employment">
            <h2>Employment</h2>
            <p>
              <strong>Employment</strong> Creating, Promoting, Tracing and
              preparing Youth for Ethical Employment opportunities in India and
              International.
            </p>
            <br></br>
            <br></br>
            <h2>Cultivation</h2>
            <p>
              <strong>Cultivation</strong> and Fostering a group of Educated,
              Motivated and Spiritually Enlighten People who work selflessly
              towards betterment of Society, Community and Nation building.{" "}
            </p>
          </div>
          <div className="col-md-4 Promotion">
            <h2>Promotion</h2>
            <p>
              <strong>Promotion</strong> of Individuals with talent in
              Education, Trade, Businesses and Social Reformation. Promotion of
              Universal Brotherhood. Promotion of true sense of peace,
              tranquility, spirituality social cohesiveness.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer_top_img">
          <div className="row">
            <div className="col-md-12">
              <img src="public/Untitled.jpeg"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer_top">
              <h1>Become A Member</h1>
              <br></br>
              <p>
                <strong>
                  The FOUNDATION (Federation of Education in India)
                </strong>{" "}
                is a not-for-profit organization with a collaborative and
                collective platform to work for educational support system and
                all members will be the participant to work for objectives of
                the Foundation.
              </p>
              <br></br>
              <p>
                <strong>The membership</strong> is a platform to create
                opportunities for Academia will become an{" "}
                <strong>
                  Educator, Researcher, Innovator and Member of "Board of
                  Studies"
                </strong>{" "}
                and Industry Professionals and Business Leaders will become a{" "}
                <strong>"Professor of Practice of UGC,</strong> Trainers will
                become a part of{" "}
                <strong>
                  Skill India, Entrepreneurs will become a Training Partner
                  (TP),
                </strong>{" "}
                Managers will become an Administrator of Educational System of
                India.
              </p>
              <button>Explore More</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer_top">
              <img src="3.jpg"></img>
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

export default Home;
