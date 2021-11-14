import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        LoaderComponent,
        ModalComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        LoaderComponent,
        ModalComponent,
        HeaderComponent,
    ]
})
export class SharedComponentsModule { }
