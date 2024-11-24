import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { User } from "../utils/validation";
import { UserContext } from "../Components/userContext";
import { endpoints } from "../utils/constants";
import { v4 as uuidv4 } from "uuid";

export default function SignUp() {
    const navigate = useNavigate();
    const userContext = useContext(UserContext);

    const [email, setEmail] = useState("");
    const handleSetEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const [password, setPassword] = useState("");
    const handleSetPassword = useCallback((e) => {
        setPassword(e.target.value);
    });

    const [repeatPassword, setRepeatPassword] = useState("");
    const handleSetRepeatPassword = useCallback((e) => {
        setRepeatPassword(e.target.value);
    });

    const [errors, setErrors] = useState(null);
    const handleLogIn = useCallback(() => {
        try {
            User.parse({ email, password });
            setErrors(null);
            checkPasswordsMatch();

            signUpUser();
        } catch (err) {
            if (err instanceof z.ZodError) {
                setErrors({ ...errors, ...err.format() });
            }
        }
    }, [email, password]);

    const signUpUser = () => {
        const body = {
            email,
            password,
            date: Date.now(),
            uuid: uuidv4(),
            notes: [],
        };
        fetch(endpoints.register, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
                const date = body.date;
                const notes = body.notes;
                userContext.setUser({ email, password, date, notes });
                navigate("/");
            })
            .catch(() => {
                setErrors({
                    ...errors,
                    ...{
                        registerError:
                            "Something went wrong during registration",
                    },
                });
            });
    };

    const checkPasswordsMatch = () => {
        if (repeatPassword != password) {
            setErrors({
                ...errors,
                ...{ passwordsDismatch: "Passwords don't match" },
            });
        } else {
            setErrors(null);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div
                className="bg-white p-6 rounded-lg shadow-md w-96"
                onSubmit={handleLogIn}>
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                {errors?.notFound && (
                    <div className="text-red-500 mb-5">{errors?.notFound}</div>
                )}

                <div className="mb-2">
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleSetEmail}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                {errors?.email && (
                    <div className="text-red-500 mb-5">
                        {errors?.email?._errors.map((err) => (
                            <div key={err}>{err}</div>
                        ))}
                    </div>
                )}
                <div className="mb-2">
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleSetPassword}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="mb-2">
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="repeatPassword">
                        Repeat password
                    </label>
                    <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        value={repeatPassword}
                        onChange={handleSetRepeatPassword}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                {errors?.password && (
                    <div className="text-red-500 mb-5">
                        {errors?.password?._errors.map((err) => (
                            <div key={err}>{err}</div>
                        ))}
                    </div>
                )}
                {errors?.passwordsDismatch && (
                    <div className="text-red-500 mb-5">
                        {errors?.passwordsDismatch}
                    </div>
                )}
                <button
                    onClick={handleLogIn}
                    className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200">
                    Log In
                </button>
            </div>
        </div>
    );
}
