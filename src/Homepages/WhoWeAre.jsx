import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/CandB_files/Logo.png";

export default function WhoWeAre() {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* 👇 About Section */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "#fff",
          padding: "2rem",
        }}
      >
        <AnimatePresence mode="wait">
          {!showDetails ? (
            <motion.div
              key="card"
              onClick={() => setShowDetails(true)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                width: "350px",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <p style={{ fontSize: "1.2rem", color: "black" }}>
                This is what we stand for <br />
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "lighter",
                    color: "red",
                  }}
                >
                  Who are we?
                </span>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="full-profile"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              style={{
                maxWidth: "900px",
                width: "100%",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                backgroundColor: "#ffffff",
                textAlign: "center",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                width="60"
                height="50"
                style={{ marginBottom: "1rem" }}
              />
              <h2>
                <span style={{ color: "red", fontSize: "60px" }}>47</span> YEARS
                OF EXCELLENCE
              </h2>

              <div style={{ marginTop: "2rem", textAlign: "left" }}>
                <h2 className="mb-3">Cast and Blower</h2>
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.8",
                    fontWeight: "lighter",
                  }}
                >
                  Way back, in 1977, a small venture started its manufacturing
                  activities under the name "Pedhadia Casting" by the pioneering
                  efforts of Lt. Mr. Nathabhai Makkanbhai Pedhadia. "Cast and
                  Blower Co. (Guj.) Pvt. Ltd." was founded in 1980 by Lt. Mr.
                  Laljibhai Nathabhai Pedhadia and has since grown to become one
                  of the most reputed quality manufacturers and exporters of all
                  types of castings.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/about")}
                className="btn w-100 px-4 py-2 rounded-pill mt-4"
                style={{
                  maxWidth: "200px",
                  border: "2px solid red",
                  backgroundColor: "transparent",
                  color: "black",
                  fontWeight: "lighter",
                }}
              >
                View more
              </motion.button>

              <div
                onClick={() => setShowDetails(false)}
                style={{
                  marginTop: "2rem",
                  color: "#dc3545",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                ✖ Close
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
