import React from 'react';

// Import pump images

import mainpump1 from "../assets/images/CandB_files/mainpump1.png";
import mainpump2 from "../assets/images/CandB_files/mainpump2.png";
import mainpump3 from "../assets/images/CandB_files/mainpump3.png";
import mainpump4 from "../assets/images/CandB_files/mainpump4.png";
import mainpump5 from "../assets/images/CandB_files/mainpump5.png";
import mainpump6 from "../assets/images/CandB_files/mainpump6.png";
import mainpump7 from "../assets/images/CandB_files/mainpump7.png";
import mainpump8 from "../assets/images/CandB_files/mainpump8.png";
import mainpump9 from "../assets/images/CandB_files/mainpump9.png";
import mainpump10 from "../assets/images/CandB_files/mainpump10.png";

const pumps = [
  { id: 1, name: 'TDCS', image: mainpump1 },
  { id: 2, name: 'TSD', image: mainpump2 },
  { id: 3, name: 'TCD', image: mainpump3 },
  { id: 4, name: 'NDSV', image: mainpump4 },
  { id: 5, name: 'TDCV', image: mainpump5 },
  { id: 6, name: 'TDSV', image: mainpump6 },
  { id: 7, name: 'TS', image: mainpump7 },
  { id: 8, name: 'TL', image: mainpump8 },
  { id: 9, name: 'TCM', image: mainpump9 },
  { id: 10, name: 'TC', image: mainpump10 },
];

const PumpsPage = () => {
    

  return (
    <div className="bg-black text-white py-5 min-vh-100 ">
      <div className="container mt-5">
        <div className="mb-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none text-secondary">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/manufacturing" className="text-decoration-none text-secondary">Manufacturing</a>
              </li>
              <li className="breadcrumb-item active text-danger" aria-current="page">Pumps</li>
            </ol>
          </nav>
          <h1 className="fw-bold text-danger">Pumps</h1>
          <p style={{color:"gray"}}>Total 10 Products</p>
        </div>

        <div className="row g-4">
  {pumps.map((pump) => (
    <div key={pump.id} className="col-sm-6 col-md-4 col-lg-3">
      <div className="pump-card card text-center h-100 bg-dark text-white border-0 shadow-sm p-4 rounded-4">
        <div className="card-img-top d-flex align-items-center justify-content-center mb-3" style={{ height: '200px' }}>
          <img
            src={pump.image}
            alt={pump.name}
            className="img-fluid"
            style={{ maxHeight: '160px', objectFit: 'contain', transition: 'transform 0.4s ease' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-danger fw-bold fs-5 mb-3">{pump.name}</h5>
          {/* Updated Link 👇 */}
          <a 
            href={`/manufacturing/pumps/${pump.id}`} 
            className="custom-white-btn btn mt-2 px-4 py-2 rounded-pill"
          >
            Product Detail
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default PumpsPage;
