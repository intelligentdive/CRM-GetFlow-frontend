import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import SideNavBar from "../Shared/SideNavBar/SideNavBar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-mainBG grid xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-4">
                <div className="xl:col-span-2 lg:col-span-2 col-span-1">
                    <SideNavBar></SideNavBar>
                </div>
                <div className="xl:col-span-10 lg:col-span-8 col-span-3">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;