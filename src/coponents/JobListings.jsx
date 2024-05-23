import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinners from "./Spinners";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fatching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Browse Jobs" : "All Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Job Listing 1 --> */}
          {/* {jobs.map((job) => (
            <div>Hello</div>
          ))} */}
          {loading ? (
            <Spinners />
          ) : (
            <>
              {jobs.map((job) => {
                return <JobListing key={job.id} job={job} />;
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default JobListings;
