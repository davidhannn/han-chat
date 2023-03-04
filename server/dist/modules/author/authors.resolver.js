"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const author_model_1 = require("../../types/author.model");
const author_service_1 = require("./author.service");
let AuthorsResolver = class AuthorsResolver {
    constructor(authorsService) {
        this.authorsService = authorsService;
    }
    async author() {
        return this.authorsService.getHello();
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorsResolver.prototype, "author", null);
AuthorsResolver = __decorate([
    (0, graphql_1.Resolver)((of) => author_model_1.Author),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorsResolver);
exports.AuthorsResolver = AuthorsResolver;
//# sourceMappingURL=authors.resolver.js.map