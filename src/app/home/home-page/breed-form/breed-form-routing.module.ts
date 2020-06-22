import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreedFormPage } from './breed-form.page';

const routes: Routes = [
  {
    path: '',
    component: BreedFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreedFormPageRoutingModule {}
