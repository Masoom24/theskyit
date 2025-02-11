import React, { useEffect, useState } from "react";
import Card from "../../../components/commom/card";

interface Job {
  id: number;
  title: string;
  image: string;
  cardText?: string;
  CardColor?: string;
}

const JobCategory: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Fetching data from the JSON file
    fetch("/jobData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data.jobs); // Assuming "jobs" is the key in your JSON
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, []);

  const handleButtonClick = (jobTitle: string) => {
    console.log(`${jobTitle} Button Clicked!`);
  };

  return (
    <div>
      <div className="flex flex-col space-y-4 p-6">
        <div className="bg-[#96BE25] text-white p-4 rounded-lg text-2xl font-bold text-center max-w-max mx-auto">
          Industries
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 px-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex justify-center items-center shadow-md rounded-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-white p-4"
          >
            <Card
              image={job.image} // Dynamically displaying job image
              title={job.title}
              cardText={job.cardText || "View More"}
              CardColor={job.CardColor || "#96BE25"}
              onButtonClick={() => handleButtonClick(job.title)}
              color="white"
              height="auto"
              width="auto"
              description=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
