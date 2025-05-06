// src/pages/About.jsx
import React from 'react';
import aboutcar from "../assets/images/CandB_files/aboutcar.jpg";
import director from "../assets/images/CandB_files/managingdirector.png";
import medal from "../assets/images/CandB_files/medal.png";
import TeamSection from './TeamSection';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-section container-fluid py-25">
      <div className="row align-items-center">
        <motion.div 
          className="col-lg-6 px-5 text-white"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="about-title mb-4">About <span>us</span></h1>
          <p className="about-text fw-lighter">
            We offer a variety of castings for various applications. We produce components to address the highest level of customer satisfaction, for which we have adopted the best technology for production and the highest precision quality control tools to ensure the best products from our company. All products are backed by a guarantee of quality and reliability.
          </p>
          <p className="about-text">
            Continual improvement and embracing change is our company’s philosophy, because we believe that manufacturing is an art that requires rigorous effort and a willingness to adapt with time.
          </p>
        </motion.div>

        <motion.div 
  className="col-lg-6 p-4 d-flex justify-content-center align-items-center"
  initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <img 
    src={aboutcar}
    alt="Cast and Blower" 
    className="rounded shadow about-img"
    style={{ height: '100%', maxHeight: '700px', width: '100%', objectFit: 'cover' }}
  />
</motion.div>

      </div>

      {/* 👨‍💼 Managing Director Section */}
      <div className="row align-items-center py-5 mt-5">
        <motion.div 
          className="col-lg-6 p-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src={director}
            alt="Managing Director"
            className="img-fluid rounded-4 shadow-lg"
            style={{ maxHeight: '600px', objectFit: 'cover', width: '100%' }}
          />
        </motion.div>

        <motion.div 
          className="col-lg-6 px-5 text-white"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4">Managing Director <span style={{ color: '#d2232a' }}>N Patel</span></h2>
          <h3 className="d-flex align-items-center gap-2 mb-4">
  <img src={medal} alt="Medal Icon" style={{ height: '30px', width: '30px' }} />
  <span>26 Years of Excellence</span>
</h3>

          
          <p className="fst-italic mb-3">
            It is with great pleasure to introduce myself.
          </p>
          <p className="fw-light mb-3">
            My name is <strong>N Patel</strong> and I am the <strong>Managing Director of Cast And Blower Co. (Guj.) Pvt. Ltd.</strong> Third generation foundrymen and a second generation entrepreneur.
          </p>
          <p className="fw-light mb-3">
            I have been with the company for the past <strong>26 years</strong> and have seen it grow from a small pump manufacturing company to a big diversified business. I am passionate about the success of our company and strive to ensure that our team have the best possible working environment.
          </p>
          <p className="fw-light">
            I believe in creating a culture of collaboration and innovation, and I am committed to providing our customers with the highest quality products and services.
          </p>
        </motion.div>
      </div>
      <TeamSection />
    </div>
  );
};

export default About;
