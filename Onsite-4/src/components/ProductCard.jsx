import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm border-0 hover-card position-relative">
        <div
          className="card-img-container overflow-hidden position-relative"
          style={{ height: "280px" }}
        >
          {/* Category Badge */}
          <div className="position-absolute top-0 end-0 m-3 z-index-1">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill shadow-sm">
              {product.category}
            </span>
          </div>

          {/* Loading placeholder */}
          {!imageLoaded && (
            <div
              className="position-absolute top-0 start-0 w-100 h-100 image-loading rounded-top"
              style={{ borderRadius: "0.375rem 0.375rem 0 0" }}
            ></div>
          )}

          {/* Image with improved styling */}
          <img
            src={product.images[0]}
            className={`card-img-top w-100 h-100 object-fit-cover hover-img ${
              imageLoaded ? "" : "d-none"
            }`}
            alt={product.title}
            style={{
              borderRadius: "0.375rem 0.375rem 0 0",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />

          {/* Overlay effect on hover */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 opacity-0 hover-overlay transition-opacity duration-300">
            <div className="d-flex align-items-center justify-content-center h-100">
              <Link
                to={`/product/${product.id}`}
                className="btn btn-light btn-lg rounded-circle shadow-lg scale-0 hover-scale transition-transform duration-300"
              >
                <i className="fas fa-eye fa-lg"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="card-body d-flex flex-column p-4">
          <h5
            className="card-title fw-bold text-truncate mb-2"
            title={product.title}
            style={{ fontSize: "1.1rem", lineHeight: "1.4" }}
          >
            <Link
              to={`/product/${product.id}`}
              className="text-decoration-none text-dark hover-text-primary transition-colors"
            >
              {product.title}
            </Link>
          </h5>

          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">
                <span className="h5 text-primary fw-bold mb-0">
                  ${product.price}
                </span>
                <div className="d-flex align-items-center">
                  <div className="text-warning me-1">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${
                          i < Math.floor(product.rating || 4) ? "" : "far"
                        }`}
                        style={{ fontSize: "0.8rem" }}
                      ></i>
                    ))}
                  </div>
                  <small className="text-muted">
                    ({product.reviews?.length || 0})
                  </small>
                </div>
              </div>
              <Link
                to={`/product/${product.id}`}
                className="btn btn-primary btn-sm px-3 py-2 rounded-pill hover-lift"
              >
                <i className="fas fa-arrow-right me-1"></i>
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
