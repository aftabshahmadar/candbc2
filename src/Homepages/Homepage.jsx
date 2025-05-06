import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhoWeAre from "./WhoWeAre";
import OurVision from "./OurVision";
import OurMission from "./OurMission";
import CardSlider from "./CardSlider";
import OurPolicy from "./Ourpolicy";
// import SustainableFuture from "./SustainableFuture";
import IndustriesWeServe from "./IndustriesWeServe";
import PhotoGallery from "./PhotoGallery";
import CertificateGallery from "./CertificateGallery";
import factoryVideo from "../assets/Videos/factory.mp4";
import phone from "../assets/images/CandB_files/phone.png";
import download from "../assets/images/CandB_files/download.png";

// Motion Variants
const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const messages = [
  "High quality cast iron products and service.",
  "Precision is our craftsmanship.",
  "Most innovative and versatile foundry.",
];

const Homepage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // Change message every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* 🔥 HERO VIDEO SECTION */}
      <div className="position-relative vh-100 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        >
          <source src={factoryVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" />

        <motion.div
          className="position-relative text-white h-100 d-flex flex-column justify-content-center align-items-center text-center px-3"
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ fontFamily: '"Roboto Mono", monospace' }}
        >
          <motion.h1 className="display-9 fw-bold" variants={item}>
            Cast and Blowers
          </motion.h1>

          <div style={{ minHeight: "2.5rem", marginTop: "1rem" }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                className="lead fw-lighter"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.8 }}
              >
                {messages[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            className="d-flex gap-4 mt-4 flex-wrap justify-content-center"
            variants={item}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline-light d-flex align-items-center px-4 py-2 rounded-pill"
              style={{
                minWidth: "200px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(1px)",
                color: "white",
              }}
            >
              <img src={phone} alt="Phone" width="24" height="24" className="me-2" />
              <span className="fw-light">Business inquiry</span>
            </motion.button>

            <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="/brochure.pdf"
  download="Cast-And-Blowers-Brochure.pdf"
  className="btn btn-outline-light d-flex align-items-center px-4 py-2 rounded-pill text-decoration-none"
  style={{
    minWidth: "200px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(1px)",
    color: "white",
  }}
>
  <img src={download} alt="Download" width="24" height="24" className="me-2" />
  <span className="fw-light">Download brochure</span>
</motion.a>

          </motion.div>
        </motion.div>
      </div>

      {/* Vision + Mission Sections */}
      <WhoWeAre />
      <OurVision />
      <OurMission />
      <CardSlider />
      <CertificateGallery />
      <OurPolicy />
      <IndustriesWeServe />
      {/* <SustainableFuture /> */}
      <PhotoGallery />
    </div>
  );
};

export default Homepage;
