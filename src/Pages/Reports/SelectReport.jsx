import { AiOutlineFilter, AiOutlinePlus } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";


import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";

const dataset = [
    {
        name: "Advertisemebt",
        score: 52
    },
    {
        name: "Employee Referral",
        score: 35
    },
    {
        name: "Other",
        score: 38
    },
    {
        name: "Trade Show",
        score: 46
    },
    {
        name: "Website",
        score: 32
    }
]

const colors = [
    {
        name: "#EFADF3"
    },
    {
        name: "#00B7E9"
    },
    {
        name: "#3EC99E"
    },
    {
        name: "#837DFB"
    },
    {
        name: "#338BBD"
    }
]

const SelectReport = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    const barThickness = window.innerWidth < 768 ? 40 : 60;


    useEffect(() => {
        setChartData({
            labels: dataset.map(item => item.name),
            datasets: [
                {
                    // label: dataset.map(item => item.name),
                    data: dataset.map(item => item.score),
                    backgroundColor: colors.map((item, index) => `${item.name}`),
                    // backgroundColor: dataset.map((item, index) => `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.6)`),
                    borderRadius: 20
                },
            ],
        });



        setChartOptions({
            plugins: {
                legend: {
                    display: false,
                    position: "right",
                    labels: {
                        boxWidth: 10,
                        boxHeight: 10,
                        borderRadius: 70,
                    }
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    barThickness: barThickness,
                }
            },
            maintainAspectRatio: false,
            responsive: true,
        });
    }, [barThickness]);

    return (
        <div>

            <div className="md:flex md:items-center md:justify-between">
                <div>
                    <h1 className="lg:text-[34px] md:text-[30px] text-[24px] font-semibold">Reports</h1>
                    <div className="flex items-center gap-3">
                        <Link className="disabled cursor-pointer text-[#717171] md:text-[20px] text-[18px]">Reports</Link>
                        <MdArrowForwardIos color="#717171"></MdArrowForwardIos>
                        <Link className="disabled cursor-pointer md:text-[20px] text-[18px] font-semibold">Marketing Exec Leads By Source</Link>
                    </div>
                </div>
                <div>
                    <button className="flex items-center gap-2 btn bg-[#00B7E9] hover:bg-[#00B7E9] text-white p-3 rounded-2xl md:mt-0 mt-4 w-full justify-center"><AiOutlinePlus /> Add New</button>
                </div>
            </div>



            <div className="bg-white mt-6 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mr-[18px] ml-[18px] gap-2">
                    <p className="text-[#717171]">1/08/2023</p>
                    <div className=" mt-[24px] flex items-center gap-2">
                        <button className="btn bg-white border py-3 px-4 rounded-2xl flex items-center gap-2 font-semibold"><AiOutlineFilter /> Filter</button>
                        <button className="btn bg-white border py-3 px-4 rounded-2xl flex items-center gap-2 font-semibold"><BiEditAlt /> Edit</button>
                    </div>
                </div>

                <div className="grid grid-cols-12 mr-[18px] mt-3">
                    <div className="max-h-[440px] md:col-span-10 col-span-12">
                        <Bar data={chartData} options={chartOptions} className="p-4 col-span-10" />

                    </div>
                    <div className="md:col-span-2 hidden md:block">
                        <div>
                            <p className="mb-5">Lead Source</p>
                            {dataset?.map((data, index) => (
                                <div key={index} className="flex items-center gap-0.5 mt-4">
                                    <div className="grid grid-cols-2 ">
                                        <div className="h-4 rounded-md w-4" style={{ backgroundColor: colors[index].name }}></div>
                                    </div>
                                    <p>{data?.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SelectReport;