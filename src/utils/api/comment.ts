import { JSON_PLACEHOLDER_DOMAIN } from "../constants/jsonplaceholder";
import { CommentInterface } from "../interfaces/comment";

export const getComments = async ():Promise<CommentInterface[]> => {
    const res = await fetch(`${JSON_PLACEHOLDER_DOMAIN}/comments`);
    const data = await res.json();
    return data;
};

export const getComment = async (id:number):Promise<CommentInterface> => {
    const res = await fetch(`${JSON_PLACEHOLDER_DOMAIN}/$comments`);
    const data = await res.json();
    return data;
};