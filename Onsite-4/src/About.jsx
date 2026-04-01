import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="container my-5">
      <Helmet>
        <title>About Us - FakeStore</title>
      </Helmet>

      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-4" style={{ color: "#667eea" }}>
            About FakeStore
          </h1>
          <p className="lead mb-4">
            Welcome to FakeStore, your premier destination for high-quality
            products at unbeatable prices. We're committed to providing an
            exceptional shopping experience with a wide range of products that
            cater to all your needs.
          </p>
          <p className="mb-4">
            Our mission is to make online shopping simple, secure, and
            enjoyable. We carefully curate our product selection to ensure that
            every item meets our high standards of quality and value.
          </p>
          <div className="d-flex gap-3">
            <div className="text-center">
              <div className="h1 text-primary mb-2">10K+</div>
              <small className="text-muted">Happy Customers</small>
            </div>
            <div className="text-center">
              <div className="h1 text-success mb-2">500+</div>
              <small className="text-muted">Products</small>
            </div>
            <div className="text-center">
              <div className="h1 text-warning mb-2">50+</div>
              <small className="text-muted">Categories</small>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center">
            <div className="card-body">
              <div className="mb-3">
                <i className="fas fa-shipping-fast fa-3x text-primary"></i>
              </div>
              <h5 className="card-title">Fast Shipping</h5>
              <p className="card-text">
                Free shipping on orders over $50. Quick delivery to your
                doorstep.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center">
            <div className="card-body">
              <div className="mb-3">
                <i className="fas fa-shield-alt fa-3x text-success"></i>
              </div>
              <h5 className="card-title">Secure Payment</h5>
              <p className="card-text">
                Your payment information is safe with our encrypted checkout
                process.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center">
            <div className="card-body">
              <div className="mb-3">
                <i className="fas fa-headset fa-3x text-warning"></i>
              </div>
              <h5 className="card-title">24/7 Support</h5>
              <p className="card-text">
                Our customer service team is always ready to help you with any
                questions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="mb-4">Our Team</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
                  alt="Team Member"
                  className="rounded-circle mb-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <h6>John Doe</h6>
                <small className="text-muted">CEO & Founder</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150"
                  alt="Team Member"
                  className="rounded-circle mb-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <h6>Jane Smith</h6>
                <small className="text-muted">Head of Operations</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
                  alt="Team Member"
                  className="rounded-circle mb-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <h6>Mike Johnson</h6>
                <small className="text-muted">Customer Service Lead</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
