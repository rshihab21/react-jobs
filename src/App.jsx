import Hero from "./coponents/Hero";
import HomeCards from "./coponents/HomeCards";
import JobListings from "./coponents/JobListings";
import NavBar from "./coponents/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;
