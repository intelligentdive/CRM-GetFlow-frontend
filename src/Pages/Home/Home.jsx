import HomeTabs from "./HomeTabs";
import LeadsEvents from "./LeadsEvents";
import LeadsScoreChart from "./LeadsScoreChart";
import SaleryPersonActivityChart from "./SaleryPersonActivityChart";


const Home = () => {
    return (
        <div className="mb-10">
            <h1 className="lg:text-[34px] md:text-[30px] text-[24px] font-semibold">Home page</h1>
            <HomeTabs></HomeTabs>

            <div className="grid md:grid-cols-12 grid-cols-1 gap-5 mt-4">
                <div className="md:col-span-7 bg-white border border-gray-300 rounded-lg">
                    <LeadsScoreChart />
                </div>
                <div className="md:col-span-5 bg-white border border-gray-300 rounded-lg">
                    <LeadsEvents />
                </div>
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 gap-5 mt-4">
                <div className="md:col-span-6 bg-white border border-gray-300 rounded-lg">
                    <SaleryPersonActivityChart />
                </div>
                <div className="md:col-span-6 bg-white border border-gray-300 rounded-lg">
                    <LeadsEvents />
                </div>
            </div>

        </div>
    );
};

export default Home;