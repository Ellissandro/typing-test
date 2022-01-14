import { QueryEntity } from "@datorama/akita";

export class HomeQuery extends QueryEntity<any> {
  selectVisibilityFilter$ = this.select(state => state.ui.filter);
    
}