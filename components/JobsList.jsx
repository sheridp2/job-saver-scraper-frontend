import React, { useEffect, useState } from "react";
import { API_PATHS } from "../util/apiPAths";
import axiosInstance from "../util/axiosInstance";
import { JobCard } from "./JobCard";

const JobsList = () => {
  const [jobs, setJobs] = useState([]);

  const getAllJobs = async () => {
    try {
      const response = await axiosInstance.get(`${API_PATHS.JOB.GET_ALL_JOBS}`);
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3">
                Job Title
              </th>
              <th scope="col" className="px-2 py-3">
                Company
              </th>
              <th scope="col" className="px-2 py-3">
                Location
              </th>
              <th scope="col" className="px-2 py-3">
                Date Posted
              </th>
              <th scope="col" className="px-2 py-3">
                Job ID
              </th>
              <th scope="col" className="px-2 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobsList;
