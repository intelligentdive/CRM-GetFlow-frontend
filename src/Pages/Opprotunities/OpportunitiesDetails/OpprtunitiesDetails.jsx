import { AiOutlineFilter } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";
import OpportunitiesInfoemation from "./OpportunitiesInfoemation";
import OpportunitiesSteper from "./OpportunitiesSteper";


const OpprtunitiesDetails = () => {
    return (
        <div className="mt-[30px] mb-[30px]">

            <div className="md:flex items-center justify-between">
                <h1 className="font-semibold md:text-[34px] text-[24px]">Opportunities</h1>
                <div className=" mt-[24px] flex items-center gap-2 justify-evenly md:justify-start">
                    <button className="btn bg-white border py-3 px-4 rounded-2xl flex items-center gap-2 font-semibold"><AiOutlineFilter /> Filter</button>
                    <button className="btn bg-white border py-3 px-4 rounded-2xl flex items-center gap-2 font-semibold"><MdOutlineDeleteForever /> Delete</button>
                    <button className="btn bg-white border py-3 px-4 rounded-2xl flex items-center gap-2 font-semibold"><BiEditAlt /> Edit</button>
                </div>
            </div>

            {/* Opportunities Steper and Information */}
            <div className="grid grid-cols-12 mt-6 gap-6">
                <div className="md:col-span-6 col-span-12 border border-gray-200 rounded-lg bg-white max-h-[595px] overflow-y-scroll">
                    <OpportunitiesSteper />
                </div>
                <div className="md:col-span-6 col-span-12 border border-gray-200 rounded-lg bg-white max-h-[595px] overflow-y-scroll">
                    <OpportunitiesInfoemation />
                </div>
            </div>


        </div>
    );
};

export default OpprtunitiesDetails;