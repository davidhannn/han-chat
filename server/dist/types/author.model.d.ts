import { Post } from "./post.model";
export declare class Author {
    id: number;
    firstName?: string;
    lastName?: string;
    posts: Post[];
}
