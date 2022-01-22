import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'typing-test',
  },
  {
    path: 'typing-test',
    loadChildren: () =>
      import('./pages/typing/typing-test.module').then(
        (m) => m.TypingTestModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
