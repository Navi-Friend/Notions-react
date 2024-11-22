import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    //TODO username
                    <NavLink to="/home" end={true}>
                        `Hello, ${username}!`
                    </NavLink>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink
                                to="/home"
                                end={true}
                                className="hover:text-blue-300">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/notes"
                                end={true}
                                className="hover:text-blue-300">
                                Notes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                //TODO Logout
                                to="/logout"
                                end={true}
                                className="hover:text-blue-300">
                                Log out
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
