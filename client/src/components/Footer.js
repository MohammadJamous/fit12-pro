import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section text-white mt-auto">
      <div className="container py-5">
        <div className="row g-4">

          {/* Logo + About */}
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold text-primary">12Fit</h4>
            <p className="text-light mt-3">
              A modern fitness platform that helps you build personalized
              workout and diet plans using smart tools and a simple interface.
            </p>
          </div>

          {/* Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Links</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/workout">Workout</Link></li>
              <li><Link to="/diet">Diet</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Account</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mb-3">Contact</h6>
            <p className="text-light mb-1">📧 mohammadrasim45@gmail.com</p>
            <p className="text-light mb-3">📍 Palestine</p>

            {/* Social */}
            <div className="d-flex gap-3">
              <span className="social-icon">🌐</span>
              <span className="social-icon">📘</span>
              <span className="social-icon">📸</span>
              <span className="social-icon">🐦</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom text-center py-3">
        <small>© 2026 12Fit. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;