import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RankingService } from 'src/app/shared/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  peoples: Observable<any[]>;

  constructor(private rankingService: RankingService) {
  }

  ngOnInit(): void {
    this.loadRaking();
  }

  loadRaking() {
    this.peoples = this.rankingService.peoples$;
  }
}
