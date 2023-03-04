import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Int,
} from "@nestjs/graphql";
import { Author } from "src/types/author.model";
import { AuthorService } from "src/modules/author/author.service";
import { PostService } from "src/modules/post/post.service";

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorService // private postsService: PostService
  ) {}

  // @Query((returns) => Author)
  // async author(@Args("id", { type: () => Int }) id: number) {
  //   return this.authorsService.getHello();
  //   // return this.authorsService.findOneById(id);
  // }
  @Query((returns) => String)
  async author() {
    return this.authorsService.getHello();
  }

  // @Query((returns) => Author)
  // async author(@Args("id", { type: () => Int }) id: number) {
  //   return this.authorsService.getHello();
  //   // return this.authorsService.findOneById(id);
  // }

  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author;
  //   // return this.postsService.findAll({ authorId: id });
  // }
}
