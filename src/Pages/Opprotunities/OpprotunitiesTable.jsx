import { AiOutlineFilter } from "react-icons/ai";
import { BiDotsHorizontalRounded, BiEditAlt, BiSearch, BiUserPin } from "react-icons/bi";
import { BsCalendar2X } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import tablePeople from '../../assets/tableImage/shosa.png';
import { SiHomeassistantcommunitystore } from "react-icons/si";


const OpprotunitiesTable = () => {
    return (
        <div className="md:mt-6 mt-4 bg-white rounded-xl border border-[#E7E7E7] mb-6">

            <div className="flex items-center justify-between mr-[18px] ml-[18px] gap-2">
                <div className="flex items-center gap-2 rounded-2xl border border-[#E7E7E7] px-[10px] py-3 xl:w-[250px] mt-[24px]">
                    <BiSearch className="text-[#717171]" size={20} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-none w-full outline-none text-[14px] font-semibold placeholder-[#717171]"
                    />
                </div>
                <div className=" mt-[24px] flex items-center gap-2">
                    <button className="btn bg-white border py-3 px-4 rounded-2xl flex items-center gap-2 font-semibold"><AiOutlineFilter /> Filter</button>
                    <button className="btn bg-white border py-3 px-4 rounded-2xl flex items-center gap-2 font-semibold"><BiEditAlt /> Edit</button>
                </div>
            </div>


            {/* Table Start */}
            <div className="mt-6 overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-[#F8FAFC]">
                        <tr>
                            <th className="py-2 px-4 text-sm font-normal text-left text-gray-500 ">
                                <div className="flex items-center gap-x-3 font-bold xl:text-[16px] text-[10px]">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded-lg w-5 h-5 " />
                                    Opportunity Name
                                </div>
                            </th>

                            <th className="px-12 py-2 text-left text-gray-500  font-bold xl:text-[16px] text-[10px]">
                                <div className="flex items-center gap-x-2">
                                    <BiUserPin />
                                    <span>Account Name</span>
                                </div>
                            </th>

                            <th className="px-4 py-2 font-bold xl:text-[16px] text-[10px] text-left text-gray-500 ">
                                <div className="flex items-center gap-x-2">
                                    <SiHomeassistantcommunitystore />
                                    <span>Stage</span>
                                </div>
                            </th>

                            <th className="px-4 py-2 font-bold xl:text-[16px] text-[10px] text-left text-gray-500 ">
                                <div className="flex items-center gap-x-2">
                                    <BsCalendar2X />
                                    <span>Close Date</span>
                                </div>
                            </th>


                            <th className="px-4 py-2 font-bold xl:text-[16px] text-[10px] text-left text-gray-500 ">
                                <div className="flex items-center gap-x-2">
                                    <CiUser />
                                    <span>Opportunity Owner alias</span>
                                </div>
                            </th>

                            <th></th>
                        </tr>
                    </thead>


                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                        <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <h2 className="font-bold">Acme-140 widgets (Sample)</h2>
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                    <p className="text-[#717171]">
                                        Acmi (Sample)
                                    </p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171]">
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">Negotiation</p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171] whitespace-nowrap">20-10-23</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <img src={tablePeople} alt="" />
                                    <h2 className="font-bold">Shosa</h2>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <h2 className="font-bold">Acme-140 widgets (Sample)</h2>
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                    <p className="text-[#717171]">
                                        Acmi (Sample)
                                    </p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171]">
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">Negotiation</p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171] whitespace-nowrap">20-10-23</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <img src={tablePeople} alt="" />
                                    <h2 className="font-bold">Shosa</h2>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <h2 className="font-bold">Acme-140 widgets (Sample)</h2>
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                    <p className="text-[#717171]">
                                        Acmi (Sample)
                                    </p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171]">
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">Negotiation</p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171] whitespace-nowrap">20-10-23</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <img src={tablePeople} alt="" />
                                    <h2 className="font-bold">Shosa</h2>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <h2 className="font-bold">Acme-140 widgets (Sample)</h2>
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                    <p className="text-[#717171]">
                                        Acmi (Sample)
                                    </p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171]">
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">Negotiation</p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171] whitespace-nowrap">20-10-23</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <img src={tablePeople} alt="" />
                                    <h2 className="font-bold">Shosa</h2>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <h2 className="font-bold">Acme-140 widgets (Sample)</h2>
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                    <p className="text-[#717171]">
                                        Acmi (Sample)
                                    </p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171]">
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">Negotiation</p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171] whitespace-nowrap">20-10-23</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <img src={tablePeople} alt="" />
                                    <h2 className="font-bold">Shosa</h2>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <h2 className="font-bold">Acme-140 widgets (Sample)</h2>
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                    <p className="text-[#717171]">
                                        Acmi (Sample)
                                    </p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171]">
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">Negotiation</p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171] whitespace-nowrap">20-10-23</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <img src={tablePeople} alt="" />
                                    <h2 className="font-bold">Shosa</h2>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <h2 className="font-bold">Acme-140 widgets (Sample)</h2>
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                    <p className="text-[#717171]">
                                        Acmi (Sample)
                                    </p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171]">
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">Negotiation</p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171] whitespace-nowrap">20-10-23</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <img src={tablePeople} alt="" />
                                    <h2 className="font-bold">Shosa</h2>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <h2 className="font-bold">Acme-140 widgets (Sample)</h2>
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                    <p className="text-[#717171]">
                                        Acmi (Sample)
                                    </p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171]">
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">Negotiation</p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171] whitespace-nowrap">20-10-23</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <img src={tablePeople} alt="" />
                                    <h2 className="font-bold">Shosa</h2>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <h2 className="font-bold">Acme-140 widgets (Sample)</h2>
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                    <p className="text-[#717171]">
                                        Acmi (Sample)
                                    </p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171]">
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">Negotiation</p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171] whitespace-nowrap">20-10-23</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <img src={tablePeople} alt="" />
                                    <h2 className="font-bold">Shosa</h2>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <h2 className="font-bold">Acme-140 widgets (Sample)</h2>
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                    <p className="text-[#717171]">
                                        Acmi (Sample)
                                    </p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171]">
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">Negotiation</p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171] whitespace-nowrap">20-10-23</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <img src={tablePeople} alt="" />
                                    <h2 className="font-bold">Shosa</h2>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <h2 className="font-bold">Acme-140 widgets (Sample)</h2>
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                    <p className="text-[#717171]">
                                        Acmi (Sample)
                                    </p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171]">
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">Negotiation</p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171] whitespace-nowrap">20-10-23</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <img src={tablePeople} alt="" />
                                    <h2 className="font-bold">Shosa</h2>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <h2 className="font-bold">Acme-140 widgets (Sample)</h2>
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                    <p className="text-[#717171]">
                                        Acmi (Sample)
                                    </p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171]">
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">Negotiation</p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171] whitespace-nowrap">20-10-23</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <img src={tablePeople} alt="" />
                                    <h2 className="font-bold">Shosa</h2>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                    <h2 className="font-bold">Acme-140 widgets (Sample)</h2>
                                </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                    <p className="text-[#717171]">
                                        Acmi (Sample)
                                    </p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171]">
                                <div className="flex items-center gap-x-2">
                                    <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">Negotiation</p>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-[16px] text-[#717171] whitespace-nowrap">20-10-23</td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                    <img src={tablePeople} alt="" />
                                    <h2 className="font-bold">Shosa</h2>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">

                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <BiDotsHorizontalRounded size={30} />
                                    </button>
                                </div>
                            </td>
                        </tr>





                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default OpprotunitiesTable;