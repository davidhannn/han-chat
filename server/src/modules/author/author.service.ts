import { Injectable } from "@nestjs/common";
import { Query } from "@nestjs/graphql";

@Injectable()
export class AuthorService {
  @Query(() => String)
  getHello(): string {
    return "Hello Author!";
  }
}
