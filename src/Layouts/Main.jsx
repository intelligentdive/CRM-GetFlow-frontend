import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import SideNavBar from "../Shared/SideNavBar/SideNavBar";


const Main = () => {
    return (
        <div className="min-h-screen w-full h-full">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="grid lg:grid-cols-12 grid-cols-4">
                <div className="lg:col-span-2">
                    <SideNavBar></SideNavBar>
                </div>
                <div className="lg:col-span-10 col-span-4 bg-mainBG min-h-screen w-full">
                    <div className="lg:mx-[30px] mx-4 lg:mt-[30px] mt-4">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;