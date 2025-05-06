import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const policyItems = [
  {
    icon: "fas fa-award",
    title: "Customer Satisfaction",
    description:
      "To ensure satisfaction of customer to supply of components as per market need with best quality.",
  },
  {
    icon: "fas fa-handshake",
    title: "Supplier Partnership",
    description:
      "To ensure that supplier works in mutual partnership and helping them to improve where we can.",
  },
  {
    icon: "fas fa-tree",
    title: "Environmental Responsibility",
    description:
      "To ensure we keep the premises clean and maintained for a greener future.",
  },
  {
    icon: "fas fa-chalkboard-teacher",
    title: "Product Improvement",
    description:
      "Continual improvement by enhancing technology, training employees, and mistake proofing.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Global Commitment",
    description:
      "We commit to global growth and will not produce components for any defense equipment.",
  },
];

export default function OurPolicy() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <div className="mb-4">
          <h5 className="text-uppercase text-danger fw-bold">Our Company Policy</h5>
          <h2 className="fw-bold">OUR POLICY</h2>
        </div>

        <div className="row justify-content-center">
          {policyItems.map((item, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-4 border rounded bg-white shadow-sm h-100">
                <div className="mb-3 text-danger display-6">
                  <i className={item.icon}></i>
                </div>
                <h5 className="fw-semibold">{item.title}</h5>
                <p className="text-muted small">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
