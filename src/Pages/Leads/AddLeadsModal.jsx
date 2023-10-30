
const AddLeadsModal = ({ setisOpen }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl w-96 w-full">
                <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                    Invite your team
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Your new project has been created. Invite your team to collaborate on this project.
                </p>

                <form className="mt-4" action="#">

                    <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                        <button
                            type="button"
                            onClick={() => setisOpen(false)}
                            className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddLeadsModal;