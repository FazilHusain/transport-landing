import { Link } from "react-router-dom";
import React, { useState } from "react";
import { removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      await axios.post(
        `${BASE_URL}/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      return navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Transport-Landing
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <span className="hover:text-blue-600 cursor-pointer">Services</span>
            {showMenu && (
              <div className="absolute top-8 left-0 bg-white border rounded shadow-lg p-4 w-[500px] grid grid-cols-2 gap-4 z-10">
                <div className="hover:text-blue-600 cursor-pointer">
                  Employee Transport
                </div>
                <div className="hover:text-blue-600 cursor-pointer">
                  Fleet Management
                </div>
                <div className="hover:text-blue-600 cursor-pointer">
                  Car Rentals
                </div>
                <div className="hover:text-blue-600 cursor-pointer">
                  Corporate Shuttle
                </div>
              </div>
            )}
          </li>
          <li>
            <Link to="/submissions" className="hover:text-blue-600">
              Submissions
            </Link>
          </li>
          <li className="cursor-pointer hover:text-red-500">
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="block hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <details className="group">
                <summary className="cursor-pointer hover:text-blue-600">Services</summary>
                <ul className="pl-4 mt-2 space-y-1 text-sm">
                  <li>Employee Transport</li>
                  <li>Fleet Management</li>
                  <li>Car Rentals</li>
                  <li>Corporate Shuttle</li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/submissions" className="block hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Submissions
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="text-left w-full hover:text-red-500">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
