import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponentsModule } from './components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockCopyPasteDirective } from './shared/directives/block-copy-paste.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlockCopyPasteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
