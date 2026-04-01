import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          <i className="fas fa-store me-2"></i>
          FakeStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link fw-semibold px-3" to="/" end>
              Home
            </NavLink>
            <NavLink className="nav-link fw-semibold px-3" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link fw-semibold px-3" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link fw-semibold px-3" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
