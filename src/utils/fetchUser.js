import { endpoints } from "./constants";

export default async function fetchUser(email, password) {
    const response = await fetch(endpoints.login(email, password));
    const users = await response.json();

    console.log(users)
    // if (users.length === 1) {
        const { date, id } = users[0];
        return { email, password, date, id };
    //  }
    // else {
    //     throw new Error("Unable to load user");
    // }
}
