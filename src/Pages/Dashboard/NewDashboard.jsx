
import newDashboard from '../../assets/dashboard/new_dashboard.png';

const NewDashboard = () => {
    return (
        <div className='flex items-center justify-center md:bg-white bg-[#F1FCFE] mt-6 border border-gray-200 rounded-xl mb-[60px]'>
            <div className='mt-[100px] mb-[100px]'>
                <img src={newDashboard} alt="" />
            </div>
        </div>
    );
};

export default NewDashboard;