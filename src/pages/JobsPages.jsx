import { useEffect, useState } from "react";
import JobListings from "../coponents/JobListings";

const JobsPages = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/jobs/${id}");
    };
  });
  return (
    <section className="bg-blue-50 px-4 py-10">
      <JobListings />
    </section>
  );
};
export default JobsPages;
