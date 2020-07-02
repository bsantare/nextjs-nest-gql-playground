import { HackerMessage } from '@model/hacker-message/hacker-message.model'
import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class HackerMessages {
    @Field(type => [HackerMessage])
    messages: HackerMessage[]
}
