import { RxCross1 } from "react-icons/rx";


const ShowEventDetailsModal = ({ setModalShow, data }) => {
    const { title, start, end, address, note } = data;

    // Start Date And Time
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dayOfWeek = daysOfWeek[start.getDay()];
    const month = months[start.getMonth()];
    const day = start.getDate();
    const year = start.getFullYear();

    let hours = start.getHours();
    const amPm = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
        hours -= 12;
    }

    const minutes = String(start.getMinutes()).padStart(2, '0');
    const seconds = String(start.getSeconds()).padStart(2, '0');

    const formattedDate = `${dayOfWeek} ${month} ${day} ${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;

    // End Date And time
    const daysOfWeek2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dayOfWeek2 = daysOfWeek2[end.getDay()];
    const month2 = months2[end.getMonth()];
    const day2 = end.getDate();
    const year2 = end.getFullYear();

    let hours2 = end.getHours();
    const amPm2 = hours2 >= 12 ? "PM" : "AM";
    if (hours > 12) {
        hours -= 12;
    }

    const minutes2 = String(end.getMinutes()).padStart(2, '0');
    const seconds2 = String(end.getSeconds()).padStart(2, '0');

    const formattedDate2 = `${dayOfWeek2} ${month2} ${day2} ${year2}`;
    const formattedTime2 = `${hours2}:${minutes2}:${seconds2} ${amPm2}`;


    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
            <div className="relative overflow-hidden text-left bg-white rounded-lg shadow-xl w-[550px] p-6 max-h-[100vh] overflow-y-auto">

                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl">{title}</h1>
                    <button className='btn bg-white hover:bg-white border-0'><RxCross1 onClick={() => setModalShow(false)} size={25}></RxCross1></button>
                </div>

                <hr className="mt-2 mb-4" />

                <div className="flex items-center gap-16">
                    <p className="text-[#8F9BB3]">Start:</p>
                    <p className="text-[#222B45]">{formattedDate} <span className="text-[#8F9BB3]">Time: </span> {formattedTime}</p>
                </div>
                <div className="flex items-center gap-[68px] mt-2">
                    <p className="text-[#8F9BB3]">End:</p>
                    <p className="text-[#222B45]">{formattedDate2} <span className="text-[#8F9BB3]">Time: </span> {formattedTime2}</p>
                </div>
                <div className="flex items-center gap-10 mt-2">
                    <p className="text-[#8F9BB3]">Address:</p>
                    <p className="text-[#222B45]">{address}</p>
                </div>
                <div className="flex items-start gap-16 mt-2">
                    <p className="text-[#8F9BB3]">Note:</p>
                    <p className="text-[#222B45]">{note}</p>
                </div>

            </div>
        </div>
    );
};

export default ShowEventDetailsModal;