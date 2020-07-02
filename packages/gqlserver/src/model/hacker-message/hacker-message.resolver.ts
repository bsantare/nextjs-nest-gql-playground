import { HackerMessage } from '@model/hacker-message/hacker-message.model'
import { Args, Int, Query, Resolver } from '@nestjs/graphql'
import { HackerService } from '@service/hacker-service'

function* nextId(seed: number): Generator<number, number, number> {
    var i: number = 0;
    while (true) {
        yield i++;
    }
}

@Resolver(of => HackerMessage)
export class HackerMessageResolver {
    private static idGen: Generator<number, number, number> = nextId(10000)

    constructor(
        private hackerService: HackerService,
    ) {}

    @Query(returns => HackerMessage)
    async saySomeHackerThing() {
        const now = new Date();
        return HackerMessageResolver.toHackerMessage(this.hackerService.saySomethingInteresting(), now);
    }

    @Query(returns => [HackerMessage])
    async saySomeHackerThings(@Args('messageCount', { type: () => Int }) messageCount: number) {
        const now = new Date();
        return this.hackerService.saySomeInterestingThings(messageCount).map((phrase, index) => HackerMessageResolver.toHackerMessage(phrase, now))
    }

    private static toHackerMessage(message: string, now: Date): HackerMessage {
        return {
            id: this.idGen.next().value,
            message,
            timestamp: now.toISOString()
        };
    }
}
