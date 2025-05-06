import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const industries = [
  { icon: "fas fa-industry", title: "Industrial" },
  { icon: "fas fa-seedling", title: "Agriculture sprinklers" },
  { icon: "fas fa-tools", title: "OEM Corporates" },
  { icon: "fas fa-building", title: "Architects" },
  { icon: "fas fa-ruler-combined", title: "Institutional" },
  { icon: "fas fa-home", title: "Individual house owners" },
];

export default function IndustriesWeServe() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h5 className="text-uppercase text-danger fw-bold mb-2">Our Industries</h5>
        <h2 className="fw-bold mb-4">INDUSTRIES WE SERVE</h2>

        <div className="row justify-content-center">
          {industries.map((item, index) => (
            <div
              className="col-md-4 col-sm-6 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="industry-card p-4 rounded border h-100 shadow-sm">
                <div className="text-danger display-6 mb-3">
                  <i className={item.icon}></i>
                </div>
                <h5 className="fw-semibold">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
