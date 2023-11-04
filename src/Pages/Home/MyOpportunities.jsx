import { AiOutlinePlus } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import tablePeople from '../../assets/tableImage/tableIPeople.png';
import { FaMoneyBills } from "react-icons/fa6";


const MyOpportunities = () => {
    return (
        <div>
            <div className="flex items-start justify-between xl:mx-6 lg:mx-3 mx-2 mt-6">
                <div>
                    <h6 className="text-[18px] md:text-[26px] font-semibold"> My Opportunities </h6>
                    <p className="text-[#717171]">2+ items, sorted by Name</p>
                </div>
                <button className="font-semibold border p-1 rounded-lg flex items-center gap-2"><AiOutlinePlus /> Create Lead</button>
            </div>

            {/* Table Start */}
            <div className=" mt-6 overflow-x-auto mb-5">
                <table className="min-w-full table">
                    <thead className="bg-[#F8FAFC]">
                        <tr>
                            <th>
                                <div className="flex items-center gap-x-3 font-semibold text-[16px] text-[#717171] ">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded-lg w-5 h-5 " />
                                    Name - Mail
                                </div>
                            </th>
                            <th>
                                <div className="flex items-center gap-x-2 text-[#717171]">
                                    <FaMoneyBills />
                                    <span>Amount</span>
                                </div>
                            </th>
                            <th>
                                <div className="flex items-center gap-x-2 text-[#717171]">
                                    <BsArrowDownCircle color="#717171" />
                                    <span>Forecast Cat...</span>
                                </div>
                            </th>
                            <th></th>
                        </tr>
                    </thead >

                    <tbody className="bg-white divide-y divide-gray-200">

                    <tr>
                            <td>
                                <div className="inline-flex items-center gap-x-3 ">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <div className="flex items-center gap-x-2">
                                        <img className="object-cover w-10 h-10 rounded-full" src={tablePeople} alt="" />
                                        <div>
                                            <h2 className="font-semibold lg:font-bold">Acme (Sample)</h2>
                                            <p className="text-sm font-normal text-[#717171]">info@salesforce.com</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td><p className="font-semibold">10.000.00</p></td>
                            <td>
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#ACA8FC] rounded-full bg-[#EAE9FE]">Closed</p>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="inline-flex items-center gap-x-3 ">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <div className="flex items-center gap-x-2">
                                        <img className="object-cover w-10 h-10 rounded-full" src={tablePeople} alt="" />
                                        <div>
                                            <h2 className="font-semibold lg:font-bold">Acme (Sample)</h2>
                                            <p className="text-sm font-normal text-[#717171]">info@salesforce.com</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td><p className="font-semibold">10.000.00</p></td>
                            <td>
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#ACA8FC] rounded-full bg-[#EAE9FE]">Closed</p>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="inline-flex items-center gap-x-3 ">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <div className="flex items-center gap-x-2">
                                        <img className="object-cover w-10 h-10 rounded-full" src={tablePeople} alt="" />
                                        <div>
                                            <h2 className="font-semibold lg:font-bold">Acme (Sample)</h2>
                                            <p className="text-sm font-normal text-[#717171]">info@salesforce.com</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td><p className="font-semibold">10.000.00</p></td>
                            <td>
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#ACA8FC] rounded-full bg-[#EAE9FE]">Closed</p>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="inline-flex items-center gap-x-3 ">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <div className="flex items-center gap-x-2">
                                        <img className="object-cover w-10 h-10 rounded-full" src={tablePeople} alt="" />
                                        <div>
                                            <h2 className="font-semibold lg:font-bold">Acme (Sample)</h2>
                                            <p className="text-sm font-normal text-[#717171]">info@salesforce.com</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td><p className="font-semibold">10.000.00</p></td>
                            <td>
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#ACA8FC] rounded-full bg-[#EAE9FE]">Closed</p>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                    </tbody>

                </table >
            </div>


        </div>
    );
};

export default MyOpportunities;