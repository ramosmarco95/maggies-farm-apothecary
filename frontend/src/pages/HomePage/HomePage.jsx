import { Link } from "react-router-dom";
import "../HomePage/HomePage.css"; 
import product from "../../assets/mock-img.jpg"; 

export default function HomePage() {
  return (
    <>
      <section className="bg-image m-3 rounded-2"></section>

      <section className="m-3 row ">
        {/* Left side: Text Section */}
        <div className="col-md-6 p-4">
          <h2 className="h2 fw-bold mb-4">Let's Explore the World of Apothecary</h2>
          <h3 className="h5 mb-4">Discover our range of organic products.</h3>
          <Link to="/products" className="btn">
            View Our Products
          </Link>
        </div>

        {/* Right side: Image Grid Section */}
        <div className="col-md-6 d-flex justify-content-between align-items-end p-4">
          <img src={product} alt="product" className="img-fluid rounded border border-5" style={{ maxWidth: "30%" }} />
          <img src={product} alt="product" className="img-fluid rounded border border-5" style={{ maxWidth: "30%" }} />
          <img src={product} alt="product" className="img-fluid rounded border border-5" style={{ maxWidth: "30%" }} />
        </div>
      </section>     
    
    </>
  );
}