import { JSON_PLACEHOLDER_DOMAIN } from "../constants/jsonplaceholder";
import { UserInterface } from "../interfaces/user";

export const getUsers = async ():Promise<UserInterface[]> => {
    const res = await fetch(`${JSON_PLACEHOLDER_DOMAIN}/users`);
    const data = await res.json();
    return data;
};

export const getUser = async (id:number):Promise<UserInterface> => {
    const res = await fetch(`${JSON_PLACEHOLDER_DOMAIN}/$users`);
    const data = await res.json();
    return data;
};