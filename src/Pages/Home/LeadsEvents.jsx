import { AiOutlineMenu } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";


const LeadsEvents = () => {
    return (
        <div className="">
            <div className="flex items-center justify-between text-[#717171] mx-6 mt-7">
                <AiOutlineMenu size={25} />
                <div className="flex items-center gap-2">
                    <p>May 2023</p>
                    <BsChevronDown size={25} />
                    <BiDotsVerticalRounded size={25} />
                </div>
            </div>
            <hr className="my-4" />
        </div>
    );
};

export default LeadsEvents;