import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import steelpole from "../assets/images/CandB_files/steelpole.jpg";

export default function OurMission() {
  const [isHovered, setIsHovered] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Check once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardToggle = () => {
    if (isMobile) {
      setShowCard(!showCard);
    }
  };

  return (
    <>
      <div className="container-fluid" style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
        <div className="row h-100 flex-column-reverse flex-md-row">

          {/* Left Side - Content */}
          <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
            <div style={{ maxWidth: "600px" }}>
              <h5 className="text-uppercase text-muted fw-light">High quality cast iron products and services</h5>
              <h1 className="text-danger fw-lighter mb-4 display-5">OUR MISSION</h1>
              <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
                <span className="text-danger fw-bold">■ Commitment :</span>{" "}
                At Cast and Blower, our mission is to lead the casting industry through unmatched quality, constant innovation, and an unwavering commitment to client satisfaction.
              </p>
              <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
                <span className="text-danger fw-bold">■ Responsibility :</span>{" "}
                We are dedicated to ethical practices, sustainability, and creating a work environment where craftsmanship thrives. Our mission fuels our growth and drives our global impact.
              </p>
            </div>
          </div>

          {/* Right Side - Image + Hover/Click Card */}
          <motion.div
            className="col-md-6 d-flex align-items-center justify-content-center p-0 position-relative overflow-hidden"
            initial="initial"
            onClick={handleCardToggle}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
          >
            <div className="position-relative w-100 h-100">
              <img
                src={steelpole}
                alt="Mission"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  minHeight: "100vh",
                  cursor: isMobile ? "pointer" : "default"
                }}
              />

              {/* Hover or Click Card */}
              <motion.div
                className="position-absolute bottom-0 start-0 bg-white border p-4 shadow rounded"
                style={{ maxWidth: "90%", margin: "1.5rem" }}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  hovered: { opacity: 1, y: 0 },
                }}
                animate={(isMobile && showCard) || (!isMobile && isHovered) ? "hovered" : "initial"}
                transition={{ duration: 0.4 }}
              >
                <p className="mb-0" style={{ fontSize: "16px" }}>
                  <span className="text-danger fw-bold">■ Strive to help :</span>{" "}
                  C&BC mission is to be partner to its customer and supplier. It will stand by all its partners as a strong pillar against any odds. C&BC will step up to its customer needs at all times and help its suppliers to step up to C&BC requirements. We will work hand in hand with our partners for mutual growth. C&BC will stand by its employees and implement policies to ensure a secured future.
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
