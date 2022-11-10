import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from "./users.repository";
import { UsersMiddleware } from "./users.middleware";

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, UsersMiddleware]
})

export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(UsersMiddleware).forRoutes({
      path: 'users/admins',
      method: RequestMethod.GET
    })
  }
}
