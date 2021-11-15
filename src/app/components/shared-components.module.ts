import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { RankingComponent } from './ranking/ranking.component';

@NgModule({
    declarations: [
        LoaderComponent,
        ModalComponent,
        HeaderComponent,
        RankingComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        LoaderComponent,
        ModalComponent,
        HeaderComponent,
        RankingComponent
    ]
})
export class SharedComponentsModule { }
