import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import img1977 from "../assets/images/CandB_files/1977.png";
import img1980 from "../assets/images/CandB_files/1980.png";
import img1984 from "../assets/images/CandB_files/1984.png";
import img2001 from "../assets/images/CandB_files/2001.png";
import img2001_2 from "../assets/images/CandB_files/2001_2.png";
import img2005 from "../assets/images/CandB_files/2005.png";
import img2015 from "../assets/images/CandB_files/2015.png";
import img2017 from "../assets/images/CandB_files/2017.png";
import img2019 from "../assets/images/CandB_files/2019.png";
import img2019_2 from "../assets/images/CandB_files/2019_2.png";
import img2020 from "../assets/images/CandB_files/2020.png";



const cards = [
  {
    id: 1,
    title: "1977",
    description: "Way back in 1977, a small venture was started by the Lt. Mr. Nathabhai Pedhadia.",
    image: img1977,
  },
  {
    id: 2,
    title: "1980",
    description: "C&BC was founded by the Lt. Laljibhai Pedhadia, with engineering skills to produce pumps for the agriculture, domestic, and industrial markets.",
    image: img1980,
  },
  {
    id: 3,
    title: "1994",
    description: "C&BC started manufacturing cast iron drains and fittings.",
    image: img1984,
  },
  {
    id: 4,
    title: "2001",
    description: "C&BC received the prestigious National Award for best quality products in 2001.",
    image: img2001,
  },
  {
    id: 5,
    title: "2001",
    description: "Began producing electrical pumps like submersible, openwell, and monoblock pumps.",
    image: img2001_2,
  },
  {
    id: 6,
    title: "2005",
    description: "Installed Jolt Squeeze Line Arpa 300 and Arpa 450.",
    image: img2005,
  },
  {
    id: 7,
    title: "2015",
    description: "C&BC installed a DISAMATIC high-pressure molding line to produce more than 1,500 tons of castings per month.",
    image: img2015,
  },
  {
    id: 8,
    title: "2017",
    description: "C&BC started manufacturing cast iron drains and fittings.",
    image: img2017,
  },
  {
    id: 9,
    title: "2019",
    description: "This is the fifth card description.",
    image: img2019,
  },
  {
    id: 10,
    title: "2019",
    description: "This is the fifth card description.",
    image: img2019_2,
  },
  {
    id: 11,
    title: "2020",
    description: "This is the fifth card description.",
    image: img2020,
  },
 
];

export default function CardSlider() {
  const [index, setIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideLeft = () => {
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const slideRight = () => {
    setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCards = () => {
    if (isMobile) return [cards[index]];

    const prev = (index - 1 + cards.length) % cards.length;
    const next = (index + 1) % cards.length;
    return [cards[prev], cards[index], cards[next]];
  };

  return (
    <div className="container py-5">
   <h5 className="text-uppercase text-muted fw-light">Our company journey</h5>
   <h1 className="text-danger fw-lighter mb-4 display-5">JOURNEY SO FAR</h1>

      <div className="position-relative">
        {/* Arrows on large screens */}
        {!isMobile && (
          <button
            className="btn btn-danger position-absolute start-0 top-50 translate-middle-y z-3"
            onClick={slideLeft}
          >
            ←
          </button>
        )}
  
        <div
          className={`d-flex justify-content-center align-items-center ${
            isMobile ? "flex-column" : "position-relative"
          }`}
          style={{ minHeight: isMobile ? "auto" : "420px", overflow: "hidden" }}
        >
          <AnimatePresence mode="popLayout">
            {getVisibleCards().map((card, i) => {
              const offset = isMobile ? 0 : i - 1;
              const isCenter = offset === 0;
  
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: offset * 400 }}
                  animate={{
                    opacity: 1,
                    x: offset * (isMobile ? 0 : 280),
                    scale: isCenter ? 1.1 : 0.9,
                  }}
                  exit={{ opacity: 0, x: offset * 400 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-white shadow rounded overflow-hidden text-center m-2 ${
                    isMobile ? "" : "position-absolute"
                  }`}
                  style={{
                    width: isMobile ? "90%" : "300px",
                    padding: "1rem",
                    zIndex: isCenter ? 10 : 5,
                    border: isCenter
                      ? "2px solid #dc3545"
                      : "1px solid #dee2e6",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="img-fluid mb-3 rounded"
                    style={{
                      height: "150px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <h5>{card.title}</h5>
                  <p style={{ fontSize: "14px" }}>{card.description}</p>
                  <button 
                  onClick={()=>navigate("./about")}
                  className="btn btn-outline-danger btn-sm">
                    Learn More
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
  
        {!isMobile && (
          <button
            className="btn btn-danger position-absolute end-0 top-50 translate-middle-y z-3"
            onClick={slideRight}
          >
            →
          </button>
        )}
  
        {/* Mobile arrow buttons below */}
        {isMobile && (
          <div className="mt-4 d-flex gap-3 justify-content-center">
            <button className="btn btn-outline-danger" onClick={slideLeft}>
              ←
            </button>
            <button className="btn btn-outline-danger" onClick={slideRight}>
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
  
}





