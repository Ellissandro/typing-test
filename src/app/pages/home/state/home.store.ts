import { Store } from "@datorama/akita";


export function createInitialState() {
    return {
      token: '',
      name: ''
    };
  }

export class HomeStore extends Store {
    constructor() {
        super(createInitialState());
    }
}