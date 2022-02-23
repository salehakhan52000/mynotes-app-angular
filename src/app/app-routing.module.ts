import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'text-notes',
    loadChildren: () =>
      import('./components/text-notes/text-notes.module').then(
        (m) => m.TextNotesModule
      ),
  },
  {
    path: 'picture-notes',
    loadChildren: () =>
      import('./components/picture-notes/picture-notes.module').then(
        (m) => m.PictureNotesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
