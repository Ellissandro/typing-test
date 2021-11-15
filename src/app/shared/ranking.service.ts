import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor() { }

  getRankingPeople(): Observable<any> {
    return of(
      [
        {
          name: 'Elissandro',
          city: 'Guarapari',
          state: 'ES',
          time: '00:15',
          hits: 90,
          erros: 90,
          tpm: null
        },
        {
          name: 'Elissandro',
          city: 'Guarapari',
          state: 'ES',
          time: '00:15',
          hits: 90,
          erros: 90,
          tpm: null
        },
        {
          name: 'Elissandro',
          city: 'Guarapari',
          state: 'ES',
          time: '00:15',
          hits: 90,
          erros: 90,
          tpm: null
        },
        {
          name: 'Elissandro',
          city: 'Guarapari',
          state: 'ES',
          time: '00:15',
          hits: 90,
          erros: 90,
          tpm: null
        },
      ]
    )
  }
}
