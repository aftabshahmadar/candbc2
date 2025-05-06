import React from "react";
import logo from "../assets/images/CandB_files/trishulwhitelogo.png";
import footerBg from "../assets/images/CandB_files/footerbg.png";

export default function Footer() {
  return (
    <footer
    
      className="text-white pt-5 pb-3"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "black", // fallback
      }}
    >
    <hr className="w-80" />
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Map Embed */}
          <div className="col-12 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8005482280973!2d70.83156907474887!3d22.285543943431243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca1278f4820b%3A0x2347ba70b7d344cc!2sCast%20And%20Blower%20Co.%20(Guj.)%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1744198362606!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info & Distance Section */}
          <div className="row text-start gy-4 mb-4">
            <div className="col-md-6">
              <div className="d-flex align-items-start mb-3">
                <i className="fas fa-clock fa-lg text-danger me-3 mt-1"></i>
                <div>
                  <strong>Time</strong>
                  <p className="mb-0">10:00 AM to 5:00 PM (Wednesday off)</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <i className="fas fa-phone fa-lg text-danger me-3 mt-1"></i>
                <div>
                  <strong>Call Us On</strong>
                  <p className="mb-0">02812387503</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <i className="fas fa-envelope fa-lg text-danger me-3 mt-1"></i>
                <div>
                  <strong>Mail us On</strong>
                  <p className="mb-0">info@candbc.com</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i className="fas fa-map-marker-alt fa-lg text-danger me-3 mt-1"></i>
                <div>
                  <strong>Find us On</strong>
                  <p className="mb-0">
                    CAST AND BLOWER CO. (GUJ.) PVT. LTD. Trishul Pump, 80 Feet
                    Road, Aji Industrial Estate, Opposite N.S.I.C., Near Bhavnagar
                    Crossing, Rajkot 360003, Gujarat, INDIA
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <h5 className="fw-bold mb-3 text-danger">Nearest distance from C&BC</h5>
              <ul className="list-unstyled small">
                <li className="mb-2">• C&BC is located in <strong>Rajkot city Industrial Area.</strong></li>
                <li className="mb-2">• Railway station is <strong>6kms approx.</strong></li>
                <li className="mb-2">• Central bus station is <strong>5kms approx.</strong></li>
                <li className="mb-2">• Rajkot International Airport is <strong>30kms approx.</strong></li>
                <li className="mb-2">• International Airport is <strong>230kms approx. in Ahmedabad city.</strong></li>
              </ul>
            </div>
          </div>

          {/* Logo + About */}
          <div className="col-md-6 text-center text-md-start">
            <img
              src={logo}
              alt="Company Logo"
              style={{ maxWidth: "150px", marginBottom: "1rem" }}
            />
            <p className="mb-0 text-light small">
              Leading innovation in manufacturing. Quality and trust since 1977.
            </p>
          </div>

          {/* Navigation & Socials */}
          <div className="col-md-6 text-center text-md-end">
            <ul className="list-inline mb-2">
              <li className="list-inline-item mx-2">
                <a href="#about" className="text-decoration-none text-light small">
                  About
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#products" className="text-decoration-none text-light small">
                  Products
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#contact" className="text-decoration-none text-light small">
                  Contact
                </a>
              </li>
            </ul>

            <div className="d-flex justify-content-center justify-content-md-end">
              <a href="#" className="text-light me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-4 border-top pt-3 small text-light">
          &copy; {new Date().getFullYear()} Cast and Blower Industries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
