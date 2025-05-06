// src/pages/PumpDetailsPage.jsx
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { pumps } from "../data/PumpsData";

const PumpDetailsPage = () => {
  const { pumpId } = useParams();
  const pump = pumps.find((p) => p.id === parseInt(pumpId));
  const navigate = useNavigate();

  if (!pump) {
    return (
      <div className="bg-black text-white text-center py-5 min-vh-100">
        <h1 className="text-danger">Pump Not Found</h1>
        <p>No pump exists with ID: {pumpId}</p>
        <a href="/manufacturing/pumps" className="btn btn-danger">
          Back to Pumps
        </a>
      </div>
    );
  }

  const categories = pump.categories || [];
  const features = pump.features || [];
  const specifications = pump.specifications || {};
  const overview = pump.overview || ""; 

  return (
    <div className="bg-black text-white py-5 min-vh-100">
      <div className="container mt-5">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="text-decoration-none text-secondary">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a onClick={()=> navigate("/manufacturing/pumps")} className="text-decoration-none text-secondary" style={{cursor:"pointer"}}>Manufacturing</a>
            </li>
            <li className="breadcrumb-item active text-danger">{pump.name}</li>
          </ol>
        </nav>

        {/* Product Header */}
        <h1 className="text-danger fw-bold mb-4">{pump.name}</h1>
        
        {/* Categories */}
        {categories.length > 0 && (
          <div className="mb-4">
            {categories.map((cat) => (
              <span key={cat} className="badge bg-secondary me-2">
                {cat}
              </span>
            ))}
          </div>
        )}

        <div className="row">
          {/* Product Image */}
          <div className="col-lg-6 mb-4">
            {pump.image && (
              <img
                src={pump.image}
                alt={pump.name}
                className="img-fluid p-5 rounded-3 border border-secondary"
                style={{ 
                  height: '450px', 
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            )}
          </div>

          {/* Product Details */}
          <div className="col-lg-6">
            {/* Overview */}
            {overview && (
              <section className="mb-5">
                <h3 className="text-danger border-bottom pb-2">Overview</h3>
                <p className="text-white" style={{ whiteSpace: "pre-line" }}>
                  {overview}
                </p>
              </section>
            )}

            {/* Features */}
            {features.length > 0 && (
              <section className="mb-5">
                <h3 className="text-danger border-bottom pb-2">Features</h3>
                <ul className="list-unstyled">
                  {features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Specifications */}
            {Object.keys(specifications).length > 0 && (
              <section className="mb-5">
                <h3 className="text-danger border-bottom pb-2">Specifications</h3>
                <table className="table table-dark table-striped">
                  <tbody>
                    {Object.entries(specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td className="fw-bold">{key}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}

            {/* Contact CTA */}
            <div className="bg-dark p-4 rounded-3">
              <h4 className="text-danger">You Have a Question?</h4>
              <p className="mb-3">
                Email: <a href={`mailto:${pump.contact?.email || 'info@candbc.com'}`} className="text-danger">
                  {pump.contact?.email || 'info@candbc.com'}
                </a><br />
                Phone: <a href={`tel:${pump.contact?.phone || '02812387503'}`} className="text-danger">
                  {pump.contact?.phone || '02812387503'}
                </a>
              </p>
              <button  onClick={()=>navigate("/contact")}  className="btn btn-danger">Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PumpDetailsPage;