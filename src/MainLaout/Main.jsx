import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div>
          <div className="w-full mx-auto ">
      
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster />
          </div>
        </div>
    );
};

export default Main;