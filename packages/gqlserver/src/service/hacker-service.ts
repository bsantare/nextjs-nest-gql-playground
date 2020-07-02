import { Injectable } from '@nestjs/common'
import faker from 'faker';

@Injectable()
export class HackerService {
    public saySomethingInteresting(): string {
        return `Hacker ${faker.name.firstName()} says ${faker.hacker.phrase()}`;
    }

    public saySomeInterestingThings(count: number): string[] {
        return [...Array(count)].map(() => this.saySomethingInteresting())
    }
}
