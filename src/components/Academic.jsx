import "./Academic.css";
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

function Academic() {
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
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Undergraduate Programs</h1>
          <p>U.G. PROGRAMS</p>
          <button className="btn btn-warning mt-3">SUSSDEU</button>
        </div>
      </section>

      {/* Programs Section */}
      <div className="container my-5">
        {/* B.Tech */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2>Bachelor Of Technology (B.Tech)</h2>
            <h5>
              Eligibility: 10+2 with Physics, Chemistry, Mathematics (60%
              minimum)
            </h5>
            <p>
              The <strong>Bachelor of Technology (B.Tech)</strong> is a
              four-year undergraduate degree focused on engineering and
              technology disciplines...
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="src/components/image2.jpg"
              alt="B.Tech"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* BCA */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <h2>Bachelor Of Computer Applications (BCA)</h2>
            <h5>Eligibility: 10+2 with Mathematics</h5>
            <p>
              The <strong>Bachelor of Computer Applications (BCA)</strong> is a
              three-year undergraduate program focused on fundamentals of
              computer science, software development, and IT systems...
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="src/components/pexels-julia-m-cameron-4145190.jpg"
              alt="BCA"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* BBA */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2>Bachelor of Business Administration (BBA)</h2>
            <h5>Eligibility: 10+2 in any streams</h5>
            <p>
              The <strong>Bachelor of Business Administration (BBA)</strong> is
              a three-year undergraduate program designed to equip students with
              foundational knowledge in business and management...
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="src/components/man-have-question-hand-raised-up-group-people-business-conference-modern-classroom-daytime.jpg"
              alt="BBA"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* B.Com */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <h2>
              Bachelor Of Commerce (B.Com){" "}
              <img
                src="src/components/business-and-finance.png"
                width={50}
                alt="icon"
              />
            </h2>
            <h5>Eligibility: 10+2 in Commerce/Science</h5>
            <p>
              The <strong>Bachelor of Commerce (B.Com)</strong> is a three-year
              undergraduate degree program that provides students with a solid
              foundation in areas like accounting, finance, business law...
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="src/components/upi-credit-cards-v1.png"
              alt="B.Com"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* BA */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2>Bachelor Of Arts (BA)</h2>
            <h5>Eligibility: 10+2 in any Discipline</h5>
            <p>
              The <strong>Bachelor of Arts (B.A.)</strong> is a three-year
              undergraduate degree program offering students a broad education
              in humanities, social sciences, and liberal arts...
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="src/components/benefits-of-pursuing-an-arts-degree-.jpg"
              alt="BA"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* B.Sc */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <h2>Bachelor Of Science (B.Sc)</h2>
            <h5>Eligibility: 10+2 with science subjects</h5>
            <p>
              The <strong>Bachelor of Science (B.Sc)</strong> is a three-year
              undergraduate degree program that focuses on scientific knowledge
              and research-based learning with multiple specializations...
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="src/components/bsc-biomedical-science.jpg"
              alt="B.Sc"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* B.Voc */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2>Bachelor Of Vocation (B.Voc)</h2>
            <h5>Eligibility: 10+2 in any Discipline</h5>
            <p>
              The <strong>Bachelor of Vocation (B.Voc)</strong> is a skill-based
              undergraduate degree program designed to provide students with
              hands-on training and industry-oriented knowledge...
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="src/components/bvoc-slider-2.webp"
              alt="B.Voc"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Become A SUSSDEU Member</h2>
            <p>
              SUSSDEU FOUNDATION is a not-for-profit organization with a
              collaborative platform for education. Members can become
              Educators, Researchers, Innovators, and Industry Leaders...
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://i0.wp.com/foeii.in/wp-content/uploads/2025/01/FOEII-29.jpg?fit=1100%2C732&ssl=1"
              alt="SUSSDEU"
              className="img-fluid rounded shadow"
            />
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

export default Academic;
