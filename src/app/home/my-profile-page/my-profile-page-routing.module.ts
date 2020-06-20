import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProfilePagePage } from './my-profile-page.page';

const routes: Routes = [
  {
    path: '',
    component: MyProfilePagePage
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProfilePagePageRoutingModule {}
