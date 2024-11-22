import { Children, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./Routes/Wrapper";
import ErrorPage from "./Routes/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Wrapper />,
        errorElement: <ErrorPage />,
    },
]);

function App() {
    <RouterProvider router={router} />;
}

export default App;
