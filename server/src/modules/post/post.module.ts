import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  // imports: [GraphQLModule],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
