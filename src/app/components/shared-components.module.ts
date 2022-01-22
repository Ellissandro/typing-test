import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { RankingComponent } from '../pages/typing/ranking/ranking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LoaderComponent,
    ModalComponent,
    HeaderComponent,
    RankingComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [LoaderComponent, ModalComponent, HeaderComponent, RankingComponent],
})
export class SharedComponentsModule {}
