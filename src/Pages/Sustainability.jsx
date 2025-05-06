import React from "react";
import { motion } from "framer-motion";
import windmill from "../assets/images/CandB_files/windpower.jpg";
import solarenergy from "../assets/images/CandB_files/solarenergy.jpg";
import waterenergy from "../assets/images/CandB_files/waterenergy.jpg";
import electricvehicle from "../assets/images/CandB_files/electricvehicle.jpg";
import globe from "../assets/images/CandB_files/globe.avif";
import SustainableFuture from "../Homepages/SustainableFuture";

export default function Sustainability() {
  return (
    <>
      {/* Hero Carousel Section */}
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause="false"
      >
        <div className="carousel-inner" style={{ height: "100vh" }}>
          {/* Slide 1 */}
          <div
            className="carousel-item active"
            style={{
              backgroundImage: `url(${windmill})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(0,0,0,0.7)", zIndex: 1 }}
            ></div>
            <div
              className="container h-100 d-flex align-items-center position-relative"
              style={{ zIndex: 2 }}
            >
              <motion.div
                className="col-md-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <h1 className="display-4 fw-normal text-danger d-flex align-items-center gap-2">
                  Wind <span className="text-white">power</span>
                </h1>
                <p className="text-white lead mb-0">
                  Harnessing wind to generate clean energy.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${solarenergy})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(0,0,0,0.7)", zIndex: 1 }}
            ></div>
            <div
              className="container h-100 d-flex align-items-center position-relative"
              style={{ zIndex: 2 }}
            >
              <motion.div
                className="col-md-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <h1 className="display-4 fw-normal text-warning d-flex align-items-center gap-2">
                  Solar <span className="text-white">Energy</span>
                </h1>
                <p className="text-white lead mb-0">
                  Using sunlight to power our work.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${waterenergy})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(0,0,0,0.7)", zIndex: 1 }}
            ></div>
            <div
              className="container h-100 d-flex align-items-center position-relative"
              style={{ zIndex: 2 }}
            >
              <motion.div
                className="col-md-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <h1 className="display-4 fw-normal text-info d-flex align-items-center gap-2">
                  Water <span className="text-white">energy</span>
                </h1>
                <p className="text-white lead mb-0">
                  Capturing water flow for renewable power.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Slide 4 */}
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${electricvehicle})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(0,0,0,0.7)", zIndex: 1 }}
            ></div>
            <div
              className="container h-100 d-flex align-items-center position-relative"
              style={{ zIndex: 2 }}
            >
              <motion.div
                className="col-md-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <h1 className="display-4 fw-normal text-success d-flex align-items-center gap-2">
                  Electric <span className="text-white">vehichle</span>
                </h1>
                <p className="text-white lead mb-0">
                  Driving the future with electric cars.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
      </div>

      {/* Sustainability Section */}
      <motion.section
        className="container my-5 py-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="row align-items-center shadow-lg rounded-4 p-4 bg-light">
          {/* Image Column */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={globe}
              alt="Green Earth"
              className="img-fluid rounded-4"
              style={{ maxHeight: "480px", objectFit: "cover", width: "100%" }}
            />
          </div>

          {/* Text Column */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">
              Introduction About{" "}
              <span className="text-danger">SUSTAINABILITY</span>
            </h2>
            <div className="d-inline-flex align-items-center rounded-3">
              <i className="bi bi-quote fs-4"></i>
              <span className="fw-semibold fst-italic">
                “Go Green, Breathe Clean”
              </span>
              <i className="bi bi-quote fs-4 ms-2 rotate-180"></i>
            </div>
            <p className="text-secondary fs-5" style={{ lineHeight: "1.7" }}>
              At the heart of our mission is a commitment to sustainability.
              With the motto,
              <strong> "Go Green, Breathe Clean"</strong>, we champion
              eco-friendly practices and clear the air on common misconceptions.
              <br />
              <br />
              Our efforts are rooted in credible, impactful actions that make a
              real difference. We invite you to join us in shaping a cleaner,
              greener future for all.
            </p>
          </div>
        </div>
      </motion.section>
      <SustainableFuture />
    </>
  );
}
