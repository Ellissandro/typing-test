import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { People } from './models/people';
import { HttpClient } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private socket: Socket;
  peoplesSource$: BehaviorSubject<People[]> = new BehaviorSubject<People[]>([]);
  peoples$ = this.peoplesSource$.asObservable();

  constructor(private http: HttpClient) {
    this.getRank();
    this.connectionIo();
  }


  connectionIo() {
    this.socket = io('https://nnlog.online/', { transports: ['websocket'] });

    this.onNewMatch();
  }

  onNewMatch() {
    this.socket.on('new-match', (people: People) => {
      this.addPeopleInRank(people);
    })
  }

  createNewPeople(people: People) {
    this.socket.emit('new-match', people)
  }

  addPeopleInRank(people: People) {
    let data = this.peoplesSource$.getValue().concat([people]);
    data = data.sort((a: People, b: People) => {
      if (a.seconds < b.seconds) { return -1; }
      if (a.seconds > b.seconds) { return 1; }
      return 0;
    })

    this.peoplesSource$.next(data);
  }

  getRank() {
    this.http.get<{ matches: People[] }>('https://nnlog.online/api/matches/rank').subscribe(response => {
      this.peoplesSource$.next(response.matches);
    },
      error => {
        console.error(error);
      })
  }

}
