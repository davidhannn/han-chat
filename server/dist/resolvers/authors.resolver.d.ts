import { Author } from "src/types/author.model";
import { AuthorService } from "src/modules/author/author.service";
export declare class AuthorsResolver {
    private authorsService;
    constructor(authorsService: AuthorService);
    author(id: number): Promise<string>;
    posts(author: Author): Promise<void>;
}
