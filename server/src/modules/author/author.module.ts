import { Module } from "@nestjs/common";

import { GraphQLModule } from "@nestjs/graphql";
import { AuthorService } from "./author.service";
import { AuthorsResolver } from "./authors.resolver";

@Module({
  // imports: [GraphQLModule],
  providers: [AuthorService, AuthorsResolver],
  exports: [AuthorService],
})
export class AuthorModule {}
