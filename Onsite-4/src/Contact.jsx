import { useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting us. We'll get back to you soon.",
      confirmButtonColor: "#667eea",
      timer: 3000,
      showConfirmButton: false,
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container my-5">
      <Helmet>
        <title>Contact Us - FakeStore</title>
      </Helmet>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold" style={{ color: "#667eea" }}>
              Contact Us
            </h1>
            <p className="lead">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <div className="row g-5">
            <div className="col-md-6">
              <div className="card border-0 shadow h-100">
                <div className="card-body p-4">
                  <h3 className="mb-4">Get in Touch</h3>
                  <div className="d-flex mb-3">
                    <i className="fas fa-map-marker-alt text-primary me-3 mt-1"></i>
                    <div>
                      <strong>Address</strong>
                      <br />
                      123 Fake Street
                      <br />
                      Store City, SC 12345
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <i className="fas fa-phone text-primary me-3 mt-1"></i>
                    <div>
                      <strong>Phone</strong>
                      <br />
                      +1 (555) 123-4567
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <i className="fas fa-envelope text-primary me-3 mt-1"></i>
                    <div>
                      <strong>Email</strong>
                      <br />
                      info@fakestore.com
                    </div>
                  </div>
                  <div className="d-flex">
                    <i className="fas fa-clock text-primary me-3 mt-1"></i>
                    <div>
                      <strong>Hours</strong>
                      <br />
                      Mon-Fri: 9AM-6PM
                      <br />
                      Sat-Sun: 10AM-4PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h3 className="mb-4">Send us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      <i className="fas fa-paper-plane me-2"></i>Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
