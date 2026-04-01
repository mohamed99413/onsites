export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">FakeStore</h5>
            <p>Your one-stop shop for amazing products. Quality guaranteed.</p>
            <div className="d-flex">
              <a href="#" className="text-light me-3 fs-4">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light me-3 fs-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light me-3 fs-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-light text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Contact Info</h5>
            <p>
              <i className="fas fa-map-marker-alt me-2"></i>123 Fake Street,
              Store City
            </p>
            <p>
              <i className="fas fa-phone me-2"></i>+1 (555) 123-4567
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i>info@fakestore.com
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} FakeStore Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
