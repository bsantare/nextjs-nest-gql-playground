import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class HackerMessage {
    @Field(type => Int)
    id: number;

    @Field({ nullable: false })
    message: string;

    @Field({ nullable: false })
    timestamp: string;
}
