import { HackerMessageResolver } from '@model/hacker-message/hacker-message.resolver'
import { Module } from '@nestjs/common'
import { HackerService } from '@service/hacker-service'

@Module({
    providers: [HackerMessageResolver, HackerService],
})
export class HackerMessageModule {}
