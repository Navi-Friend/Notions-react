import { NavLink } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div id="error-page" className="text-3xl mx-auto w-fit mt-40">
            <h1 className="w-fit">Oops!</h1>
            <p className="w-fit">It seems this page is not fount.</p>

            <NavLink
                className="w-fit text-xl leading-8 text-blue-700 hover:text-blue-900"
                to="/users"
                end>
                Return on main
            </NavLink>
        </div>
    );
}
