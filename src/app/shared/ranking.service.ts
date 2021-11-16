import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { People } from './models/people';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  peoplesSource$: BehaviorSubject<People[]> = new BehaviorSubject<People[]>([]);
  peoples$ = this.peoplesSource$.asObservable();

  addPeopleInRank(people: People) {
    this.peoplesSource$.next(this.peoplesSource$.getValue().concat([people]));
  }
}
