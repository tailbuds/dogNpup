import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreedFormPageRoutingModule } from './breed-form-routing.module';

import { BreedFormPage } from './breed-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreedFormPageRoutingModule
  ],
  declarations: [BreedFormPage]
})
export class BreedFormPageModule {}
