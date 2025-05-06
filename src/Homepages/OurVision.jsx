import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import blackrock from "../assets/images/CandB_files/blackrock.jpg";

export default function OurVision() {
  const [isHovered, setIsHovered] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardToggle = () => {
    if (isMobile) {
      setShowCard(!showCard);
    }
  };

  return (
    <> {/* 👇 OUR VISION Section */}
      <div className="container-fluid" style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
        <div className="row h-100">

          {/* Left Side */}
          <motion.div
            className="col-md-6 d-flex align-items-center justify-content-center p-0 position-relative overflow-hidden"
            initial="initial"
            onClick={handleCardToggle}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
          >
            <div className="position-relative w-100 h-100">
              <img
                src={blackrock}
                alt="Cast and Blower Vision"
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
                  <span className="text-danger fw-bold">■ Focus :</span>{" "}
                  C&CBC vision is to be the most innovative and versatile foundry space in the world by catering to all segments of industry where we can offer cast iron and ductile iron as the best applicable material to customer need.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
            <div style={{ maxWidth: "600px" }}>
              <h5 className="text-uppercase text-muted fw-light">
                most innovative and versatile foundry
              </h5>
              <h1 className="text-danger fw-lighter mb-4 display-5">OUR VISION</h1>
              <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
                <span className="text-danger fw-bold">■ Global :</span>{" "}
                World is changing fast, requirements are changing. Product base material is changing. We see Cast Iron today as secondary preferred material against plastic and other light metal. Thus adopting the best process and system to make cast iron and ductile iron preferred material for the components by investing on innovation.
              </p>
              <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
                <span className="text-danger fw-bold">■ Growth :</span>{" "}
                C&CBC will continue to invest in people, processes, and technology to ensure that we remain at the forefront of the industry. We will be a responsible corporate citizen, committed to sustainability and environmental stewardship.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
