import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroPage } from './registro.page';
import { RegistroRoutingModule } from './registro-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroRoutingModule
  ],
  declarations: [RegistroPage]
})
export class RegistroModule {} // Asegúrate de que el nombre de la clase sea RegistroModule
