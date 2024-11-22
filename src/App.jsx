import { Children, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./Routes/Wrapper";
import ErrorPage from "./Routes/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Wrapper />,
        // errorElement: <ErrorPage />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
