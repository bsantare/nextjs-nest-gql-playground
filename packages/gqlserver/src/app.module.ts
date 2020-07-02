import { HackerMessageModule } from '@model/hacker-message/hacker-message.module'
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { HackerService } from '@service/hacker-service'

@Module({
    imports: [
        HackerMessageModule,
        GraphQLModule.forRoot({
            autoSchemaFile: true,
            debug: true,
            playground: true,
        })
    ],
})
export class AppModule {
}
