import { JSON_PLACEHOLDER_DOMAIN } from "../constants/jsonplaceholder";
import { PostInterface } from "../interfaces/post";

export const getPosts = async ():Promise<PostInterface[]> => {
    const res = await fetch(`${JSON_PLACEHOLDER_DOMAIN}/posts`);
    const data = await res.json();
    return data;
};

export const getPost = async (id:number):Promise<PostInterface> => {
    const res = await fetch(`${JSON_PLACEHOLDER_DOMAIN}/posts/${id}`);;
    const data = await res.json();
    return data;
};