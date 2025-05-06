import React from "react";
import { Link } from "react-router-dom";

const Drains = () => {
  return (
    <div
      className="d-flex flex-column justify-content-end align-items-center vh-100 text-white"
      style={{ backgroundColor: "#000", fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="container mb-5 text-center">
        {/* Breadcrumb */}
        <div className="mb-3 text-start">
          <span className="text-white-50">Home</span> |{" "}
          <span className="text-white-50">Manufacturering</span> |{" "}
          <span className="text-danger">Drains</span>
        </div>

        {/* Heading */}
        <h2 className="fw-bold text-danger">Drains</h2>
        <p className="text-white-50">Total 0 Products</p>

        {/* No products message */}
        <p className="mt-4 text-white-50">No drains are currently listed under this category.</p>

        {/* CTA Banner */}
        <div className="bg-danger text-white rounded-3 p-4 d-flex flex-column flex-md-row justify-content-between align-items-center mt-5">
          <div className="text-center text-md-start">
            <h4 className="fw-bold mb-2">You Have a Question?</h4>
            <p className="mb-0">
              Let us help you. Email{" "}
              <a className="text-white fw-bold" href="mailto:info@candbc.com">info@candbc.com</a>{" "}
              or call us at{" "}
              <a className="text-white fw-bold" href="tel:02812387503">02812387503</a>
            </p>
          </div>
          <Link to="/contact" className="btn btn-light mt-3 mt-md-0">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drains;
