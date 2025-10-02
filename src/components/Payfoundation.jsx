import "../App.css";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Payfoundation() {
  return (
    <>
      <nav className="pay_navbar">
        <div>
          <img src="public/logo.jpeg"></img>
        </div>
        <div>
          <p>
            Paying to <br></br> <strong>SUSSDEU FOUNDATION</strong>
          </p>
        </div>
      </nav>
      <div className="heading">
        <h5>
          University Development Impact Bond (UDIB) of SUSSDEUP Foundation is
          sourcing funds with a systematic results-based contracts in which
          private investors provide pre-financing for University Development and
          pay back to investors their principal with return if, these programmes
          succeed in delivering social outcomes.
        </h5>

        <p>
          Amount <br></br> <strong>₹100000</strong>
        </p>
      </div>
      <div className="Account">
        <p>
          <strong>Account Name:</strong> SUSSDEUP FOUNDATION
        </p>
        <p>
          <strong>Account Number:</strong> 888248{" "}
        </p>
        <p>
          <strong>IFSC Code:</strong> ekgioeg
        </p>
        <p>
          <strong>Bank Name:</strong> xyz
        </p>
        <div>
          <ul className="navbar_list">
            <li>
              Contact Us
              <ul>
                <li>
                  <a href="info@sussdeu.ac.in">
                    <MdOutlineMail />
                    info@sussdeu.ac.in{" "}
                  </a>
                </li>
                <li>
                  <a href="161-2345679">
                    <FaPhoneAlt />
                    +91-161-2345679{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWhatsapp />
                    +91-161-2345679{" "}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Payfoundation;
