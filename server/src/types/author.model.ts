import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Post } from "./post.model";

@ObjectType()
export class Author {
  // The @Field() decorator accepts an optional type function (e.g., type => Int), and optionally an options object.
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field((type) => [Post])
  posts: Post[];
}
