

import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import { usePostLeadsMutation } from "../../Redux/features/leads/leadsApi";
import { useDispatch } from "react-redux";
import { addToLeads } from "../../Redux/features/leads/leadsSlice";

const AddLeadsModal = ({ setisOpen }) => {

    const [postLeads, { isLoading, isError, isSuccess }] = usePostLeadsMutation();

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const handleDataPost = (data) => {
        // postLeads(data);
        dispatch(addToLeads(data));
        reset();
        reset({ lead_status: '' });
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-30">
            <div className="relative overflow-hidden text-left bg-white rounded-lg shadow-xl w-[550px] p-6 max-h-[100vh] overflow-y-auto">

            <div className="flex items-center justify-between">
                    <h3 className="text-[26px] font-bold text-[#0A0A0A] capitalize" id="modal-title"> New Lead </h3>
                    <button className='btn bg-white hover:bg-white border p-1'><RxCross1 onClick={() => setisOpen(false)} size={25}></RxCross1></button>
                </div>
                <h4 className="font-semibold text-[20px] mt-2">Lead Information</h4>
                <hr className="mt-2 mb-4" />

                <form onSubmit={handleSubmit(handleDataPost)}>

                    <div>
                        <label className="font-semibold" htmlFor="selectLeadStatus"> Lead Status<span className="text-red-500">*</span> </label>
                        <select {...register('lead_status', { required: 'Lead Status is required' })} id="selectLeadStatus" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value='' disabled selected>None</option>
                            <option value="active">Active</option>
                            <option value="pending">Pending</option>
                        </select>
                        {errors.lead_status && <p className='text-red-600'>{errors.lead_status?.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                        <div>
                            <label className="font-semibold" htmlFor="full_name">Full Name<span className="text-red-500">*</span></label>
                            <input placeholder="Full Name" {...register("full_name", { required: 'Full Name is required' })} id="full_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            {errors.full_name && <p className='text-red-600'>{errors.full_name?.message}</p>}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="title">Title</label>
                            <input placeholder="Title" {...register("title")} id="title" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="phone_number">Phone</label>
                            <input placeholder="Phone Number" {...register("phone_number")} onKeyPress={(e) => {
                                    const keyCode = e.which || e.keyCode;
                                    if (keyCode < 48 || keyCode > 57) {
                                        e.preventDefault();
                                    }
                                }} id="phone_number" type="tel" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="selectRatting"> Ratting </label>
                            <select {...register('ratting')} id="selectRatting" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            >
                                <option value='none' selected>--none--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="lead_owner">Lead Owner</label>
                        <input placeholder="Lead Owner" {...register("lead_owner")} id="lead_owner" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="website_link">Website</label>
                        <input placeholder="Website Link" {...register("website_link")} id="website_link" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="company">Company<span className="text-red-500">*</span></label>
                        <input placeholder="Company" {...register("company", { required: 'Company Name is required' })} id="company" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        {errors.company && <p className='text-red-600'>{errors.company?.message}</p>}
                    </div>

                    <div className="grid gap-6 mt-4 grid-cols-2">
                        <div>
                            <label className="font-semibold" htmlFor="selectIndustryType"> Industry </label>
                            <select {...register('industry_type')} id="selectIndustryType" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            >
                                <option value='none' selected>--none--</option>
                                <option value="big">Big</option>
                                <option value="small">Small</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="selectLeadSource"> Lead Source </label>
                            <select {...register('lead_source')} id="selectLeadSource" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            >
                                <option value='none' selected>--none--</option>
                                <option value="facebook">Facebook</option>
                                <option value="instagram">Instagram</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="no_of_employee">No Of Employee</label>
                        <input placeholder="No Of Employee" {...register("no_of_employee")} id="no_of_employee" type="number" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>

                    <h4 className="font-semibold text-[20px] mt-6">Address Information</h4>
                    <hr className="mt-2 mb-4" />

                    <div>
                        <label className="font-semibold" htmlFor="country_name"> Country </label>
                        <select {...register('country_name')} id="country_name" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value='none' selected>--none--</option>
                            <option value="usa">USA</option>
                            <option value="canada">CANADA</option>
                        </select>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="city_name"> City </label>
                        <select {...register('city_name')} id="city_name" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value='none' selected>--none--</option>
                            <option value="melborn">Melborn</option>
                            <option value="kaliifornia">Kalifornia</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">

                        <div>
                            <label className="font-semibold" htmlFor="zip_code">Zip/Postal Code</label>
                            <input placeholder="Zip/Postal Code" {...register("zip_code")} id="zip_code" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="state_name">State/Province</label>
                            <input placeholder="State/Province" {...register("state_name")} id="state_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>
                    </div>

                    <div>
                        <label className="font-semibold" htmlFor="street_name">Street</label>
                        <input placeholder="Street Name" {...register("street_name")} id="street_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>


                    <div className="flex justify-end mt-6 gap-4">
                        <button onClick={() => setisOpen(false)} className="btn px-6 py-2.5 transition-colors duration-300 transform bg-white rounded-xl border">Cancel</button>
                        <button type="Submit" className="px-6 py-2.5 text-white transition-colors duration-300 transform bg-[#00B7E9] rounded-xl hover:bg-[#00B7E9]">Create Now</button>
                    </div>


                </form>

            </div>
        </div>
    );
};

export default AddLeadsModal;