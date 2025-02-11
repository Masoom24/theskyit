import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/commom/button";
import logo from "../../../assets/navbar/logo.png";

function Navbar() {
  const navigate = useNavigate();

  const handleCandidateClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="navbar bg-white shadow-lg px-6">
        {/* Left Section: Logo and Company Name */}
        <div className="navbar-start flex items-center gap-x-4">
          {/* Logo */}
          <img
            src={logo}
            alt="Talanet Logo"
            className="w-14 h-14 object-contain rounded-full shadow-lg border border-gray-300" // Enhanced size, shadow, and border for the logo
          />
          {/* Company Name */}
          <span className="text-2xl font-bold text-gray-800 tracking-wider">
            TALANET SEARCH SERVICES
          </span>
        </div>

        {/* Right Section: Buttons */}
        <div className="navbar-end flex gap-6">
          {/* Candidate Button */}
          <Button
            height="45px"
            width="140px"
            buttonText="Candidate"
            color="white"
            borderRadius="25px"
            fontSize="16px"
            fontWeight="bold"
            backgroundColor="#96BE25"
            onClick={handleCandidateClick}
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" // Added shadow for a polished effect
          />
          {/* Employee Button */}
          <Button
            height="45px"
            width="140px"
            buttonText="Employee"
            color="white"
            borderRadius="25px"
            fontSize="16px"
            fontWeight="bold"
            backgroundColor="#96BE25"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" // Uniform shadow for buttons
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
