import { Offline, Online } from "react-detect-offline";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      {/* <Online> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      {/* </Online> */}

      {/* <Offline>
        <div className="offline-message d-flex justify-content-center align-items-center vh-100 bg-light">
          <div className="alert alert-danger text-center p-4 shadow">
            <h4 className="alert-heading">You're Offline</h4>
            <p>Please check your internet connection and try again.</p>
          </div>
        </div>
      </Offline> */}
    </>
  );
}
