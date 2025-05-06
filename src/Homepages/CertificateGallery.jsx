import React, { useState } from "react";
import { motion } from "framer-motion";
import cert1 from "../assets/images/CandB_files/certi1.jpg";
import cert2 from "../assets/images/CandB_files/certi2.jpg";
import cert3 from "../assets/images/CandB_files/certi3.jpg";
import cert4 from "../assets/images/CandB_files/certi4.jpg";
import cert5 from "../assets/images/CandB_files/certi5.jpg";

const certificates = [cert1, cert2, cert3, cert4, cert5];

export default function CertificateGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setSelectedImage(null);

  return (
    <div className="container py-5">
<h5 className="text-uppercase text-muted fw-light">OUR CERTIFICATE</h5>
<h1 className="text-danger fw-lighter mb-4 display-5">CERTIFICATE</h1>

      <div className="row g-4">
        {certificates.map((cert, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <motion.div
              className="border rounded shadow-sm overflow-hidden bg-white h-100 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(cert)}
            >
              <img
                src={cert}
                alt={`Certificate ${index + 1}`}
                className="img-fluid w-100"
                style={{ objectFit: "cover", height: "400px" }}
              />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal for full screen preview */}
      {selectedImage && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          onClick={handleClose}
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="modal-content bg-transparent border-0">
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn-close btn-close-white ms-auto"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body text-center">
                <motion.img
                  src={selectedImage}
                  alt="Certificate Full View"
                  className="img-fluid"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ maxHeight: "80vh", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
