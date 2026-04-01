import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { RingLoader } from "react-spinners";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `${product.title} has been added to your cart.`,
      confirmButtonColor: "#667eea",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <RingLoader color="#667eea" size={80} />
      </div>
    );
  }

  if (!product)
    return <div className="text-center mt-5">Product not found.</div>;

  return (
    <div className="container my-5">
      <Helmet>
        <title>{product.title} - FakeStore</title>
      </Helmet>

      <Link to="/" className="btn btn-outline-primary mb-4">
        <i className="fas fa-arrow-left me-2"></i>Back to Products
      </Link>

      <div className="row g-5">
        <div className="col-lg-6">
          <div className="card border-0 shadow-lg position-relative overflow-hidden">
            <div className="position-absolute top-0 end-0 m-4 z-index-1">
              <span className="badge bg-success text-white px-3 py-2 rounded-pill shadow-sm">
                <i className="fas fa-check me-1"></i>In Stock
              </span>
            </div>
            <img
              src={product.image}
              alt={product.title}
              className="card-img-top"
              style={{
                height: "450px",
                objectFit: "contain",
                background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                padding: "2rem",
                borderRadius: "0.5rem",
              }}
            />
            <div className="card-body text-center border-top">
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-outline-secondary btn-sm">
                  <i className="fas fa-search-plus me-1"></i>Zoom
                </button>
                <button className="btn btn-outline-secondary btn-sm">
                  <i className="fas fa-share me-1"></i>Share
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ps-lg-4">
            <span className="badge bg-primary mb-3 text-capitalize">
              {product.category}
            </span>
            <h1 className="display-5 fw-bold mb-3">{product.title}</h1>
            <div className="mb-4">
              <span className="display-6 text-primary fw-bold">
                ${product.price}
              </span>
              <div className="text-warning mb-2">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star ${
                      i < Math.floor(product.rating?.rate || 0) ? "" : "far"
                    }`}
                  ></i>
                ))}
                <span className="text-muted ms-2">
                  ({product.rating?.count || 0} reviews)
                </span>
              </div>
            </div>
            <p className="lead mb-4">{product.description}</p>
            <div className="d-grid gap-3 d-md-flex">
              <button
                onClick={addToCart}
                className="btn btn-primary btn-lg px-5"
              >
                <i className="fas fa-cart-plus me-2"></i>Add to Cart
              </button>
              <button className="btn btn-outline-secondary btn-lg px-5">
                <i className="fas fa-heart me-2"></i>Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
