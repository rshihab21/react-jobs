import { Outlet } from "react-router-dom";
import NavBar from "../coponents/NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <ToastContainer />
    </div>
  );
};
export default MainLayout;
