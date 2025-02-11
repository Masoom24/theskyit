import React from "react";
import image1 from "../../page/Services/image/image2.jpg";
import image2 from "../../page/Services/image/image3.jpg";
import image3 from "../../page/Services/image/image4.jpg";
import image4 from "../../page/Services/image/image5.jpg";
const services = [
  {
    title: "Technical Manpower Sourcing",
    description:
      "Hiring or entering a contract with an external service provider to perform specific business operations or functions.",
    icon: "🔧",
  },
  {
    title: "Manpower Outsourcing",
    description:
      "Hiring or entering a contract with an external service provider to perform specific business operations or functions.",
    icon: "👥",
  },
  {
    title: "Management",
    description:
      "A process of getting the work or task done that is required for achieving the goals of an organization in an efficient manner.",
    icon: "📋",
  },
  {
    title: "Project Setups",
    description:
      "It's critical to set a project going on the right track from the outset.",
    icon: "🚀",
  },
];

const Service = () => {
  return (
    <div className="p-10 bg-gray-100">
      {/* Services Header */}
      <div className="text-center">
        <span className="px-3 py-1 bg-red-600 text-black rounded-full text-sm">
          Our Services
        </span>
        <h2 className="text-2xl font-bold mt-3">Try Services by RSS LLP</h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg text-center"
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="text-center">
          <span className="px-3 py-1 bg-red-600 text-black rounded-full text-sm">
            Our Services
          </span>
          <h2 className="text-2xl font-bold mt-3">Try Services by RSS LLP</h2>
        </div>

        <div className="container mx-auto p-6">
          {/* Temporary Staffing & HR Services */}
          <section className="mb-12">
            <h2 className="bg-red-600 text-white text-center py-2 px-4 inline-block rounded mb-4">
              Our Services
            </h2>
            <h3 className="text-2xl font-semibold text-center mb-4">
              Temporary Staffing & HR Services
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2 space-y-2">
                <p>ROYAL STAFFING provides a dynamic workforce...</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Cover for long-planned leaves</li>
                  <li>Reduce cost-to-variable cost</li>
                  <li>Provides flexibility</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={image1}
                  alt="Staffing"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Legal Compliance & Payrolls Services */}
          <section className="mb-12">
            <h2 className="bg-red-600 text-white text-center py-2 px-4 inline-block rounded mb-4">
              Our Services
            </h2>
            <h3 className="text-2xl font-semibold text-center mb-4">
              Legal Compliance & Payrolls Services
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <img
                  src={image2}
                  alt="Legal Compliance"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-2">
                <p>ROYAL STAFFING maintains legal compliance...</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>The Factories Act, 1948</li>
                  <li>The Minimum Wages Act, 1948</li>
                  <li>The Professional Tax Act</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Various ROYAL STAFFING Provides */}
          <section>
            <h2 className="bg-red-600 text-white text-center py-2 px-4 inline-block rounded mb-4">
              Our Services
            </h2>
            <h3 className="text-2xl font-semibold text-center mb-4">
              Various ROYAL STAFFING Provides
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-xl text-black font-semibold">Technical</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    {" "}
                    Production Engineer, Maintenance Engineer, QC Engineer,
                  </li>
                  <li>Supervisor-Production, Maintenance, Qc</li>
                  <li>
                    Maintenance Technician, Machine Operator, CNC-VMC
                    Programmer, Design Engineer, Draughtmen,
                  </li>
                  <li>
                    Trainee Engineer, Calibration Engineer, Purchase engineer,
                    Planning engineer, Store Incharge, Ware
                  </li>
                  <li>House, Production Incharge, Production manager,</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Non-Technical</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Sales & Marketing</li>
                  <li>Accountant</li>
                  <li>HR Manager/Executive/Admin</li>
                  <li>Recruiter</li>
                  <li>Store/Logistic/Dispatch</li>
                  <li>Tell callers/Telesales</li>
                  <li>Purchase Executive</li>
                  <li>Computer Operator/Data Entry Operator</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Logistics</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>E-commerce Executive/Manager</li>
                  <li>G.C (ground co-ordinators)</li>
                  <li>Supporting Staffs.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Fire Safety</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Fireman</li>
                  <li>Fire Techiman</li>
                  <li>Fire Supervisor</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold">IT</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Graphic Designer</li>
                  <li>Front-end-Developer</li>
                  <li>Back-end- Developer PHP / Laravel /WordPress</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="mb-12">
        <h2 className="bg-red-600 text-white text-center py-2 px-4 inline-block rounded mb-4">
          Our Services
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-4">
          Legal Compliance & Payrolls Services
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <img
              src={image2}
              alt="Legal Compliance"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-2">
            <p>ROYAL STAFFING maintains legal compliance...</p>
            <ul className="list-disc list-inside space-y-1">
              <li>The Factories Act, 1948</li>
              <li>The Minimum Wages Act, 1948</li>
              <li>The Professional Tax Act</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="bg-red-600 text-white text-center py-2 px-4 inline-block rounded mb-4">
          Our Services
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-4">
          Temporary Staffing & HR Services
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 space-y-2">
            <p>ROYAL STAFFING provides a dynamic workforce...</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Cover for long-planned leaves</li>
              <li>Reduce cost-to-variable cost</li>
              <li>Provides flexibility</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={image1} alt="Staffing" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="bg-red-600 text-white text-center py-2 px-4 inline-block rounded mb-4">
          Our Services
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-4">
          Legal Compliance & Payrolls Services
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <img
              src={image2}
              alt="Legal Compliance"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-2">
            <p>ROYAL STAFFING maintains legal compliance...</p>
            <ul className="list-disc list-inside space-y-1">
              <li>The Factories Act, 1948</li>
              <li>The Minimum Wages Act, 1948</li>
              <li>The Professional Tax Act</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
