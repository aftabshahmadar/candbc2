import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";


import workerimg from "../assets/images/CandB_files/workerimg.jpg";
import img1 from "../assets/images/CandB_files/career1.jpg";
import img2 from "../assets/images/CandB_files/career2.jpg";
import img3 from "../assets/images/CandB_files/career3.jpg";
import img4 from "../assets/images/CandB_files/career4.jpg";



const CareerSection = () => {
    

    const [showForm, setShowForm] = useState(false);

    

  return (
    <>
      {/* Hero Section */}
      <section
        className="position-relative"
        style={{
          backgroundImage: `url(${workerimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
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
                Career
              </h1>
              <p className="text-white lead mb-0">
                Shape Your Career:{" "}
                <span className="fw-lighter">
                  Building a Strong Future Together.
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carousel + Content Section */}
      <section
        className="container-fluid py-5"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Carousel */}
            <motion.div
              className="col-md-6 mb-4 mb-md-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div
                id="careerCarousel"
                className="carousel slide carousel-fade shadow rounded overflow-hidden position-relative"
                data-bs-ride="carousel"
                data-bs-interval="3000"
                style={{
                  maxHeight: "700px",
                  minHeight: "300px",
                }}
              >
                <div className="carousel-inner h-100">
                  {[img1, img2, img3, img4].map((img, index) => (
                    <div
                      key={index}
                      className={`carousel-item h-100 ${
                        index === 0 ? "active" : ""
                      }`}
                    >
                      <img
                        src={img}
                        className="d-block w-100 h-100"
                        alt={`Slide ${index + 1}`}
                        style={{
                          objectFit: "contain", // keeps image fully visible
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="text-muted">Join Our Team</h5>
              <h2 className="fw-bold text-danger">Work Culture at C&BC</h2>
              <p>
                At C&BC, we foster a culture of collaboration, integrity, and
                innovation. We believe our success is powered by individuals who
                work together with a shared vision.
              </p>
              <p>
                Whether on the shop floor or in the boardroom, every role plays
                a vital part in building quality products and long-lasting trust
                with our clients.
              </p>
              <p className="mb-0">
                Join us and become part of a team where your contributions are
                valued, your growth is encouraged, and your future is bright.
              </p>
            </motion.div>

            {/*  */}
          </div>
        </div>
      </section>

   

{/* Heading Section */}
      <div className="text-center mb-5">
        <h4 className="fw-light mb-1 position-relative d-inline-block">
          <span className="border-bottom border-danger border-2 pb-1">Opportunities</span>
        </h4>
        <h2 className="fw-bold text-danger mt-2">CURRENT JOB OPENINGS</h2>
      </div>
        
    {/* Job Card */}
   <div className="d-flex justify-content-center align-items-center ">
  <div className="card border rounded-3 shadow-sm p-4 mb-5" style={{ maxWidth: "500px" }}>
    <h5 className="text-danger fw-bold mb-2">Maintenance Manager</h5>
    <p className="mb-2 fw-semibold text-dark small">JOB Description :</p>
    <hr className="my-2" />
    <div className="d-flex justify-content-between align-items-center">
      <span className="text-muted">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          className="bi bi-briefcase me-2" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v2H0V4zm5-1V1h6v2H5z"/>
          <path d="M0 8V6h16v2a2 2 0 0 1-2 2h-1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10H2a2 2 0 0 1-2-2z"/>
        </svg>
        Maintenance of Foundary
      </span>
      <button
        className="btn btn-danger btn-sm px-4 rounded-pill"
        onClick={() => setShowForm(true)}
      >
        Apply Now
      </button>
    </div>
  </div>
</div>


      {/* Modal */}
      {showForm && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 1050,
          }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content rounded-4">
              <div className="modal-header border-0">
                <h5 className="modal-title">Apply for Maintenance Manager</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowForm(false)}
                ></button>
              </div>
              <div className="modal-body px-4 pb-4">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="John Doe" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" placeholder="john@example.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" placeholder="+91 9876543210" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Current Address</label>
                    <textarea
                      className="form-control"
                      rows="2"
                      placeholder="Street, City, State"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Upload Resume</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="d-flex justify-content-end gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-danger">
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CareerSection;
