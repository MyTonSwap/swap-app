import { createBrowserRouter } from "react-router-dom";
import Swap from "../pages/Swap";
import Error from "@/pages/Error";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Swap />,
        errorElement: <Error />,
    },
    {
        path: "/*",
        element: <NotFound />,
    },
]);
