import Hero from "./coponents/Hero";
import HomeCards from "./coponents/HomeCards";
import JobListings from "./coponents/JobListings";
import NavBar from "./coponents/NavBar";
import ViewAllJob from "./coponents/ViewAllJob";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJob />
    </>
  );
};

export default App;
