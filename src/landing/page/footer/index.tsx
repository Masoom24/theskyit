import React from "react";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-800">MART STAFFING</h2>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Candidate Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Client Login
                </a>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Pages</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 text-sm">
              Email:{" "}
              <a href="mailto:job@martstaffing.in" className="text-blue-500">
                job@martstaffing.in
              </a>
            </p>
            <p className="text-gray-600 text-sm mt-1">Tel: 0000000000</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="https://facebook.com"
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://wa.me/0000000000"
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#96BE25] text-white p-3 rounded-full shadow-lg"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
