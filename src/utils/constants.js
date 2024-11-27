export const BASE_URL = "http://localhost:3000";

export const endpoints = {
    login: (email, password) =>
        `${BASE_URL}/users?email=${email}&password=${password}`,
    register: `${BASE_URL}/users`,
};
