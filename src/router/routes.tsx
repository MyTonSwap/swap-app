import { createBrowserRouter } from "react-router-dom";
import Swap from "../pages/Swap";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Swap />,
    },
]);
