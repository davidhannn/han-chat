import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { AuthorModule } from "../author/author.module";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    AuthorModule,
  ],
  providers: [GraphQLModule],
  exports: [GraphQLModule],
})
export class GqlModule {}
