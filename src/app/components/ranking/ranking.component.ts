import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Pagination } from 'src/app/shared/models/pagination';
import { People } from 'src/app/shared/models/people';
import { RankingService } from 'src/app/shared/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit, OnDestroy {

  peoples: People[] = [];
  peoplesAux: People[] = [];
  loader = false;
  sub: Subscription;
  pagination: Pagination = new Pagination(0, 0, 10);

  constructor(private rankingService: RankingService) {
  }
 
  ngOnInit(): void {
    this.loadRaking();
    this.listenSocket();
  }

  loadRaking() {
    this.setLoader();
    this.rankingService.getAllPeoples().subscribe(matches => {
      this.peoples = matches;
      this.peoplesAux = [...this.peoples];
      this.pagination.collection_size = this.peoples.length;
      this.setPagination();
      this.setLoader();
    },
    error => {
      console.error(error);
      this.setLoader();
    })
  }

  setPagination() {
    this.peoples = this.peoplesAux.
      slice((this.pagination.page - 1) 
      * this.pagination.page_size, (this.pagination.page - 1) 
      * this.pagination.page_size + this.pagination.page_size)
  }

  listenSocket() {
    this.setLoader();

    this.sub = this.rankingService.peoplesSource$.subscribe((people: People) => {
      this.setLoader();
      if (people) {
        this.peoplesAux.push(people)
        this.peoples = this.rankingService.sortBySeconds(this.peoplesAux);
        this.changePagination();

        of({})
        .pipe(delay(100))
        .subscribe(() => { this.setLoader()})
      }
    },
    error => {
      console.error(error);
    })
  }

  changePagination() {
    this.pagination.collection_size = this.peoples.length;
    this.setPagination();
  }

  setLoader() {
    this.loader = !this.loader;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
