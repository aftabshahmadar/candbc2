import React from "react";
import img1 from "../assets/images/CandB_files/Apatel.jpg";
import img2 from "../assets/images/CandB_files/Mpatel.jpg";
import img3 from "../assets/images/CandB_files/Hpatel.jpg";
import img4 from "../assets/images/CandB_files/Ypatel.png";
import img5 from "../assets/images/CandB_files/Dpatel.png";


const teamMembers = [
    { name: "A Patel", text: "Operation director", img: img1 },
    { name: "M Patel", text: "Accountant", img: img2 },
    { name: "H Patel", text: "Design and R&B", img: img3 },
    { name: "Y Patel", text: "Foundry", img: img4 },
    { name: "D Patel", text: "Sales and marketing ", img: img5 },
  ];
const TeamSection = () => {
  return (
    <div className="container-fluid my-5">
      <h2 className="text-center">Our Experienced Team</h2>
      <h1 className="text-center text-danger fw-bold mb-4">OUR TEAM</h1>

      <div className="team-gallery">
        {teamMembers.map((member, idx) => (
          <div className="team-card" key={idx}>
            <img src={member.img} alt={member.name} />
            <div className="team-info">
              <h4>{member.name}</h4>
              <p>{member.text}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;