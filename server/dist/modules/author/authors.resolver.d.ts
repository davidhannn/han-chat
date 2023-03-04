import { AuthorService } from "src/modules/author/author.service";
export declare class AuthorsResolver {
    private authorsService;
    constructor(authorsService: AuthorService);
    author(): Promise<string>;
}
