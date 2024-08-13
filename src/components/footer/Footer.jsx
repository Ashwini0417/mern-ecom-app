import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="container px-4 my-4">
        <div className="row g-4">
          {/* categories */}
          <div className="col-6">
            <ul className="list-unstyled">
              <li className="nav-item fw-bold">ONLINE SHOPPING</li>
              <Link to="#" className="pb-0 nav-link text-decoration-none">
                <li className="nav-item">Women</li>
              </Link>
              <Link to="#" className="pb-0 nav-link text-decoration-none">
                <li className="nav-item">Kids</li>
              </Link>
              <Link to="#" className="pb-0 nav-link text-decoration-none">
                <li className="nav-item">Home & Living</li>
              </Link>
              <Link to="#" className="pb-0 nav-link text-decoration-none">
                <li className="nav-item">Beauty</li>
              </Link>
              <Link to="#" className="pb-0 nav-link text-decoration-none">
                <li className="nav-item">Gift Cards</li>
              </Link>
              <Link to="#" className="pb-0 nav-link text-decoration-none">
                <li className="nav-item">Myntra Insider</li>
              </Link>
            </ul>
          </div>

          <div className="col-6 position-relative d-flex-column  ">
            <div className="center-content ">
              <img
                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                alt="Original Image"
              />
              <Link to="#" className="mx-2 nav-link text-decoration-none">
                100% ORIGINAL guarantee for all products at Emart
              </Link>
            </div>

            <div className="center-content position-absolute mt-3">
              <img
                src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
                alt="Return Image"
              />
              <Link to="#" className="mx-2 nav-link text-decoration-none">
                Return within 30days of receiving your order
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="fw-semibold">&copy; 2024 Emart. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
