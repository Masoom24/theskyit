import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Select from "react-select";
import Dropdown from "../../../components/commom/dropdown";
import Button from "../../../components/commom/button";
import bg from "../../../assets/herosection/img2.jpeg";
import { FaSearch } from "react-icons/fa";

const technicalSkills = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React.js" },
  { value: "nodejs", label: "Node.js" },
  { value: "python", label: "Python" },
  { value: "sql", label: "SQL" },
  { value: "git", label: "Git" },
  { value: "docker", label: "Docker" },
];

const Experience = [
  "Fresher",
  "1 Year",
  "2 Years",
  "3 Years",
  "4 Years",
  "5 Years",
  "6 Years",
  "7 Years",
  "8 Years",
  "9 Years",
  "10 Years",
];

const Location = ["Indore, Madhya Pradesh"];

const HeroComponent = () => {
  const [selectedSkills, setSelectedSkills] = useState<any[]>([]);

  const handleChange = (selectedOptions: any) => {
    setSelectedSkills(selectedOptions || []);
  };

  return (
    <div
      className="relative w-full min-h-[500px] flex flex-col items-center justify-center bg-cover bg-center text-black"
      style={{ backgroundColor: "gray" }}
    >
      <h1 className="text-4xl font-bold mb-6">Search Your Jobs</h1>
      <div className="flex items-center bg-white p-4 rounded-full shadow-md gap-4 w-full max-w-4xl">
        <div className="flex items-center flex-1 gap-2">
          <FaSearch className="text-gray-500" />
          <Select
            options={technicalSkills}
            isMulti
            placeholder="Enter Skills / Designation"
            value={selectedSkills}
            onChange={handleChange}
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "9999px",
                borderColor: "white",
                minHeight: "50px",
              }),
            }}
          />
        </div>
        <Dropdown
          height="50px"
          width="12rem"
          dropdownRadius="50px"
          dropdownText="Experience"
          color="gray"
          options={Experience}
          backgroundColor="white"
        />
        <Dropdown
          height="50px"
          width="100%"
          dropdownRadius="50px"
          dropdownText="Enter Location"
          color="gray"
          options={Location}
          backgroundColor="white"
        />
        <Button
          height="50px"
          width="150px"
          color="white"
          backgroundColor="#96BE25"
          buttonText={
            <span className="flex items-center gap-2">
              <FaSearch /> Search Jobs
            </span>
          }
          borderRadius="50px"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
