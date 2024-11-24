import { Children, useState } from "react";
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from "react-router-dom";
import Wrapper from "./Routes/Wrapper";
import ErrorPage from "./Routes/ErrorPage";
import Login from "./Routes/Login";
import UserContextProvider from "./Components/userContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import About from "./Routes/About";
import SignUp from "./Routes/SignUp";
import Notes from "./Routes/Notes";
import ReadNote from "./Routes/ReadNote";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Wrapper />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: "/notes",
                element: <Notes />,
            },
            {
                path: "/read-note",
                element: <ReadNote />,
            },
            {
                path: "/edit-note",
                element: <Notes />,
            },
            {
                path: "/add-note",
                element: <Notes />,
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
]);

export default function App() {
    return (
        <UserContextProvider>
            <RouterProvider router={router} />;
        </UserContextProvider>
    );
}
