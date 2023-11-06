
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calender.css";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddNewEvent from "./AddNewEvent";
import ShowEventDetailsModal from "./ShowEventDetailsModal";
import { useGetCalenderEventDataQuery } from "../../Redux/features/calender/calenderApi";
const localizer = momentLocalizer(moment);
import Loading from '../Loading/Loading';


const events = [
    // year-month-date-time(hour-minute-second)
    {
        start: moment("2023-11-28T06:30:00").toDate(),
        end: moment("2023-11-28T07:45:00").toDate(),
        title: "ENT Appointment",
        address: "Sylhet",
        note: "good brain and I've said a lot of things. I'm speaking with myseft, number one.",
        color: "#D5D3FD"
    },
    {
        start: moment("2023-11-22T04:30:00").toDate(),
        end: moment("2023-11-22T05:45:00").toDate(),
        title: "GIT Appointment",
        address: "Chattogram",
        note: "I'm speaking with myseft, number one, because ",
        color: "#FCF1FD"
    },
    {
        start: moment("2023-11-24T22:30:00").toDate(),
        end: moment("2023-11-24T22:45:00").toDate(),
        title: "EBM Appointment",
        address: "Noakhali",
        note: "I'm speaking with myseft, number one, because I have a very good brain and I've said a lot of things. I'm speaking with myseft, number one.",
        color: "#DEF6EE"
    },
    {
        start: moment("2023-11-25T01:30:11").toDate(),
        end: moment("2023-11-26T01:45:00").toDate(),
        title: "PLF Appointment",
        address: "Dhaka",
        note: "I'm speaking with myseft, number one, because I have a very good brain and I've said a lot of things. I'm speaking with myseft, number one.",
        color: "#EAE9FE"
    },
    {
        start: moment("2023-11-20T14:30:11").toDate(),
        end: moment("2023-11-20T15:45:00").toDate(),
        title: "GCL Appointment",
        address: "Dhaka",
        note: "I'm speaking with myseft, number one, because I have a very good brain and I've said a lot of things. I'm speaking with myseft, number one.",
        color: "#D4F3FB"
    },

];

const Calender = () => {

    const [modalShow, setModalShow] = useState(false);
    const [AddModalShow, setAddModalShow] = useState(false);
    const [data, setData] = useState({});

    const { data: tableDatas, isLoading } = useGetCalenderEventDataQuery(undefined, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 30000,
    });

    if (isLoading) {
        return <Loading />
    }

    const handleEventClick = (event) => {
        setModalShow(true);
        setData(event);
    }

    return (
        <div>
            <div className="md:flex md:items-center md:justify-between">
                <div>
                    <h1 className="lg:text-[34px] md:text-[30px] text-[24px] font-semibold">Calender</h1>
                </div>
                <div>
                    <button onClick={() => setAddModalShow(true)} className="flex items-center gap-2 btn bg-[#00B7E9] hover:bg-[#00B7E9] text-white p-3 rounded-2xl md:mt-0 mt-4 w-full justify-center"><AiOutlinePlus /> Add New</button>
                </div>
            </div>
            <div className="mb-10 mt-6">
                <a href="#showEventSetails_Modal">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        onSelectSlot={(slotInfo) => {
                            const { start, end } = slotInfo;
                            console.log(start, end);
                        }}
                        selectable
                        popup={true}
                        style={{ height: 700 }}
                        onSelectEvent={handleEventClick}
                        eventPropGetter={(event) => ({
                            style: {
                                backgroundColor: event.color || 'Blue',
                                color: 'black',
                                fontWeight: 'bold',
                                width: 'full',
                                height: '80px'
                            },
                        })}
                        className="bg-white p-10"
                    />
                </a>
                {
                modalShow && data && <ShowEventDetailsModal data={data} setModalShow={setModalShow} />
            }
            {
                AddModalShow && <AddNewEvent setAddModalShow={setAddModalShow} />
            }
            </div>
        </div>
    )
};

export default Calender;

