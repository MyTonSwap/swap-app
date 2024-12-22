const NotFound = () => {
    return (
        <div className="flex text-white font-mono text-center items-center justify-center flex-col h-dvh ">
            <img src="/images/pensive-face.gif" className="w-14 h-14 mb-2" />
            <h1 className="text-xl font-extrabold">404 Not Found</h1>
            <p className="text-lg text-white text-opacity-50">
                The page you are looking for does not exist.
            </p>
            <a href="/" className="mt-4 text-blue-500 hover:underline">
                Go Home
            </a>
        </div>
    );
};

export default NotFound;
