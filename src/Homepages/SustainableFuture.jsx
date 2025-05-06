import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SF1 from "../assets/images/CandB_files/SF1.png";
import SF2 from "../assets/images/CandB_files/SF2.png";
import SF3 from "../assets/images/CandB_files/SF3.png";
import SF4 from "../assets/images/CandB_files/SF4.png";

const cards = [
  {
    img: SF1,
    text: "Prioritizing the integration of persons with disabilities to foster social inclusion and sustainable development goals.",
  },
  {
    img: SF2,
    text: "Demonstrating our commitment to sustainable development through the implementation of greener plantation activities, resulting in the annual planting of over 200 trees.",
  },
  {
    img: SF3,
    text: "Implementing sustainable building materials like lightweight sand lime bricks to promote energy efficiency and support green building initiatives.",
  },
  {
    img: SF4,
    text: "Advocating for the use of cast iron cookware as a healthier and eco-friendly alternative to nonstick coatings.",
  },
];

export default function SustainableFuture() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h5 className="text-uppercase fw-normal">Development For</h5>
        <h2 className="fw-bold text-danger mb-4">SUSTAINABLE FUTURE</h2>

        <div className="row">
          {cards.map((card, index) => (
            <div
              className="col-md-3 col-sm-6 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card sustainable-card h-100 border-0">
                <img
                  src={card.img}
                  alt={`sustainable-${index}`}
                  className="card-img-top img-fluid"
                />
                <div className="card-body border-top">
                  <p className="card-text small">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
