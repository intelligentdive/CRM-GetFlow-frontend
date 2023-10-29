import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div>
            <p className="text-4xl font-bold text-red-500 text-center">Nothing Found</p>
            <Link to='/' className="mt-5 underline text-green-500 text-center">Go Home</Link>
        </div>
    );
};

export default NotFound;