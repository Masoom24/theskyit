import React from "react";
import image from "./image/about.png";
const About = () => {
  return (
    <div className="px-6 md:px-16 py-12 bg-gray-100">
      {/* About Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        <div className="mt-4 text-gray-600 flex justify-center items-center">
          <p className="w-1/2 mr-6">
            ROYAL STAFFING is an organization committed to deliverable and we
            would take pride in partnering with our clients for Executive
            recruitment, Staffing, payroll, and Outsourcing. We focus on Mid &
            Senior Level Executive Recruitment across PAN India.
          </p>
          <img
            src={image} // Set your image path here
            alt="About Us"
            className="w-1/2 rounded-lg"
          />
        </div>
      </div>

      {/* Mission and Values Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-custom-green text-white p-6 rounded-lg text-center w-60">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="mt-4">
            ROYAL STAFFING works to provide you, as a valued client, with an
            affordable flexible service of high authentic direct to your
            business. We work with integrity, initiative, honesty, transparency
            & reliability.
          </p>
        </div>
        <div className="bg-custom-green text-white p-6 rounded-lg text-center w-60">
          <h3 className="text-2xl font-semibold">Our Values</h3>
          <p className="mt-4">
            ROYAL STAFFING is supported by a dedicated team who believe in a
            hands-on approach, always highly motivated to deliver excellence and
            flexibility to complement your business needs.
          </p>
        </div>
      </div>

      {/* Clients Section */}
      <div className="mt-12 text-center">
        <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm">
          Popular Companies
        </span>
        <h3 className="text-2xl font-bold text-gray-800 mt-4">Our Clients</h3>
      </div>
    </div>
  );
};

export default About;
