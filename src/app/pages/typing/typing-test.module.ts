import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { TypingTestComponent } from './typing-test/typing-test.component';

@NgModule({
  declarations: [TypingTestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TypingTestComponent }]),
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
})
export class TypingTestModule {}
