import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { People } from '../models/people';
import { HttpClient } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';
import { IBackendResponse } from '../interfaces/IBackendResponse';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  private socket: Socket;
  peoplesSource$: BehaviorSubject<People> = new BehaviorSubject<People>(null);

  constructor(private http: HttpClient) {
    this.connectionIo();
  }

  connectionIo(): void {
    this.socket = io(`${environment.API}`, { transports: ['websocket'] });
    this.onNewMatch();
  }

  onNewMatch(): void {
    this.socket.on('new-match', (people: People) => {
      this.addPeopleInRank(people);
    });
  }

  createNewPeople(people: People): void {
    this.socket.emit('new-match', people);
  }

  addPeopleInRank(people: People): void {
    this.peoplesSource$.next(people);
  }

  getAllPeoples(): Observable<People[]> {
    return this.http
      .get<IBackendResponse<People[]>>(`${environment.API}/api/matches/rank`)
      .pipe(map((peoples) => this.sortBySeconds(peoples.matches)));
  }

  sortBySeconds(pooples: People[]): People[] {
    return pooples.sort((a: People, b: People) => {
      if (a.seconds < b.seconds) {
        return -1;
      }
      if (a.seconds > b.seconds) {
        return 1;
      }
      return 0;
    });
  }
}
