import { NgModule } from '@angular/core';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class ContatoModule { }
