import { Injectable } from "@angular/core";
import { HomeStore } from "./home.store";

@Injectable({ providedIn: "root" })
export class HomeService {
  constructor(private homeStore: HomeStore) {}

  updateFilter(filter: VISIBILITY_FILTER) {
    this.homeStore.update({
      ui: {
        filter
      }
    });
  }

  complete({ id, completed }: Todo) {
    this.homeStore.update(id, { completed });
  }

  add(title: string) {
    const todo = createTodo(title);
    this.homeStore.add(todo);
  }

  delete(id: string) {
    this.homeStore.remove(id);
  }
}
