import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePagePage } from './home-page.page';

const routes: Routes = [
  {
    path: '',
    component: HomePagePage
  },
  {
    path: 'add',
    loadChildren: () => import('./breed-form/breed-form.module').then( m => m.BreedFormPageModule)
  },
  {
    path: 'update/:breedId',
    loadChildren: () => import('./breed-form/breed-form.module').then( m => m.BreedFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePagePageRoutingModule {}
