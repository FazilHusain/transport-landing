import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white text-center py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/faq" className="hover:text-blue-300">FAQs</Link></li>
            <li><Link to="/help" className="hover:text-blue-300">Help Center</Link></li>
            <li><Link to="/terms" className="hover:text-blue-300">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-300">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Employee Transport</li>
            <li>Fleet Management</li>
            <li>Car Rentals</li>
            <li>Corporate Shuttle</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <p className="text-sm">123 Transport Avenue<br />City, State - UP</p>
          <p className="text-sm mt-2">Email: support@transport.com</p>
          <p className="text-sm">Phone: +91-8417034788</p>
        </div>
      </div>

      <div className="mt-10 border-t border-blue-800 pt-6 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} Transport-Landing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
