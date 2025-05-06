import React, { useState } from "react";

// Quality
import Gal1 from "../assets/images/CandB_files/Gal1.png";
import gal2 from "../assets/images/CandB_files/Gal2.png";
import Gal3 from "../assets/images/CandB_files/Gal3.png";

// Machine
import Machine1 from "../assets/images/CandB_files/machine1.png";
import Machine2 from "../assets/images/CandB_files/machine2.png";
import Machine3 from "../assets/images/CandB_files/machine3.png";

// // Foundry
import Foundry1 from "../assets/images/CandB_files/foundary1.png";
import Foundry2 from "../assets/images/CandB_files/foundary2.png";
import Foundry3 from "../assets/images/CandB_files/foundary3.png";

// // Paint
import Paint1 from "../assets/images/CandB_files/paint1.png";
import Paint2 from "../assets/images/CandB_files/paint2.png";
import Paint3 from "../assets/images/CandB_files/paint3.png";

const categories = [
  { name: "Quality Control Department", key: "quality" },
  { name: "Machine Shop Department", key: "machine" },
  { name: "Foundry", key: "foundry" },
  { name: "Paint Shop Department", key: "paint" },
];

const images = {
  quality: [Gal1, gal2, Gal3],
  machine: [Machine1, Machine2, Machine3],
  foundry: [Foundry1, Foundry2, Foundry3],
  paint: [Paint1, Paint2, Paint3],
};

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("quality");

  return (
    <section className="py-5 text-center">
      <div className="container">
        <h5 className="fw-light text-dark">our photo gallery</h5>
        <h2 className="fw-bold text-danger mb-4">PHOTO GALLERY</h2>

        <div className="d-flex flex-wrap justify-content-center mb-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`btn mx-2 mb-2 px-3 py-2 border fw-bold ${
                activeCategory === cat.key
                  ? "btn-danger text-white"
                  : "btn-light text-dark"
              }`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="row">
          {images[activeCategory].map((img, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="photo-card">
                <img
                  src={img}
                  alt={`${activeCategory}-${idx}`}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
