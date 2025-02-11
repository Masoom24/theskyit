import React, { useEffect, useState } from "react";

interface Job {
  id: number;
  title: string;
  department: string;
  salaryRange: string;
  experience: string;
  location: string;
}

const LatestJob: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/jobData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data.jobs);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleButtonClick = (jobTitle: string) => {
    console.log(`${jobTitle} Button Clicked!`);
  };

  return (
    <div className="p-6">
      <div className="text-center space-y-4">
        <div className="bg-[#96BE25] text-white p-4 rounded-lg text-2xl font-bold max-w-max mx-auto">
          Latest Jobs Post
        </div>
        <div className="relative">
          <div className="text-[50px] font-bold text-gray-700 opacity-10">
            Latest Jobs Post
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-xl text-gray-700">
            Jobs You May Be Interested
          </div>
        </div>
      </div>
      {loading ? (
        <div className="text-center text-gray-500 mt-8">Loading jobs...</div>
      ) : (
        <div className="grid gap-6 mt-8 ml-20">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105 max-w-280"
            >
              <div className="p-4">
                <div className="bg-[#96BE25] text-white text-sm px-3 py-1 rounded-full inline-block mb-2">
                  Full Time 9-6 (8 Hours)
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <div className="text-gray-600 text-sm flex flex-wrap gap-2 mb-4">
                  <span className="flex items-center gap-1">
                    <i className="fas fa-briefcase"></i> {job.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-money-bill-wave"></i> {job.salaryRange}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-clock"></i> {job.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-map-marker-alt"></i> {job.location}
                  </span>
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-[#96BE25] px-4 py-2 rounded-md text-white font-semibold hover:bg-green-700"
                    onClick={() => handleButtonClick(job.title)}
                  >
                    Browse Job
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestJob;
