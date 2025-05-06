import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import handshake from "../assets/images/CandB_files/handshake.jpg";

export default function ContactUs() {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const formRef = useRef(null); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }

 
    alert("Form Submitted Successfully!");

    
    formRef.current.reset();
    setRecaptchaValue(null); 
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="position-relative"
        style={{
          backgroundImage: `url(${handshake})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh",
          width: "100%",
        }}
      >
        {/* Dark overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", zIndex: 1 }}
        ></div>

        {/* Content */}
        <div
          className="container h-100 d-flex align-items-center position-relative"
          style={{ zIndex: 2 }}
        >
          <div className="row w-100">
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h1 className="display-4 fw-normal text-danger d-flex align-items-center gap-2">
                Contact <span className='text-white'>us</span>
              </h1>
              <p className="text-white lead mb-0">
                Connect with us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-dark py-5">
        <div className="container">
          <h2 className="text-center fw-bold text-white mb-5">For Business Enquiry</h2>

          <form ref={formRef} onSubmit={handleSubmit} className="text-white">
            {/* Product Inquiry */}
            <div className="mb-4">
              <label className="form-label fw-semibold">Select Product Inquiry:</label>
              <div className="d-flex flex-wrap gap-4 mt-2">
                {["Drains", "Fittings", "Pumps", "Other"].map((option, index) => (
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="productInquiry"
                      id={`option${index}`}
                      value={option}
                    />
                    <label className="form-check-label fw-semibold" htmlFor={`option${index}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Name & Message */}
            <div className="row">
              <div className="col-md-6 mb-4">
                <label className="form-label">Enter Your Name <span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control bg-transparent text-white border-white"
                  style={{ border: '1px solid white' }}
                  required
                />
              </div>
              <div className="col-md-6 mb-4">
                <label className="form-label">Enter Your Message <span className="text-danger">*</span></label>
                <textarea
                  className="form-control bg-transparent text-white border-white"
                  rows="3"
                  required
                  style={{ resize: "none", border: '1px solid white' }}
                ></textarea>
              </div>
            </div>

            {/* Mobile & Captcha */}
            <div className="row">
              <div className="col-md-6 mb-4">
                <label className="form-label">Enter Your Mobile Number <span className="text-danger">*</span></label>
                <input
                  type="tel"
                  className="form-control bg-transparent text-white border-white"
                  style={{ border: '1px solid white' }}
                  required
                />
              </div>
              <div className="col-md-6 mb-4">
                <label className="form-label">Captcha <span className="text-danger">*</span></label>
                <ReCAPTCHA
                  sitekey="6LfugRUrAAAAAIsiOHgUlC9wSEysrF2Xs0sTuH6T"  
                  onChange={(value) => setRecaptchaValue(value)}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="form-label">Enter Your Email <span className="text-danger">*</span></label>
              <input
                type="email"
                className="form-control bg-transparent text-white border-white"
                style={{ border: '1px solid white' }}
                required
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-light px-5 py-2 fw-semibold "
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
