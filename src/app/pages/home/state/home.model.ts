export class Timer {
    constructor(public hours: Digit,
                public minutes: Digit,
                public seconds: Digit) {
    }
}

export class Digit {
    constructor(public digit1: number,
                public digit2: number) {
    }
}

export class Letter {
    text: string;
    id: string;
    class: string;
}

export enum ClassType {
    wrong = 'wrong',
    correct = 'correct',
    default = '',
}