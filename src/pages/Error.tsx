import { IoReload } from "react-icons/io5";

const Error = () => {
    return (
        <div className="flex items-center justify-center gap-y-2 px-4 text-center font-mono flex-col h-screen text-white">
            <img src="/images/pensive-face.gif" className="w-14 h-14 mb-2" />
            <h1 className="text-xl font-extrabold">
                Oops! Something went wrong.
            </h1>
            <p className="text-lg text-white text-opacity-50">
                We're sorry for the inconvenience. Please try refreshing the
                page, or contact support if the problem persists.
            </p>
            <button
                onClick={() => window.location.reload()}
                className="mt-4 w-12 h-12 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors"
            >
                <IoReload className="inline-block" />
            </button>
        </div>
    );
};

export default Error;
