import Hero from "../coponents/Hero";
import HomeCards from "../coponents/HomeCards";
import JobListings from "../coponents/JobListings";
import ViewAllJob from "../coponents/ViewAllJob";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJob />
    </div>
  );
};
export default HomePage;
