import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { AddNewContact } from "../pages/AddNewContact/AddNewContact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/novo-contato",
        element: <AddNewContact />,
    },
]);