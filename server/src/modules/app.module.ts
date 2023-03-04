import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { GraphQLModule } from "@nestjs/graphql";

import { AuthorModule } from "./author/author.module";
import { AuthorsResolver } from "src/modules/author/authors.resolver";
import { AppService } from "./app.service";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { PostModule } from "./post/post.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    AuthorModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
