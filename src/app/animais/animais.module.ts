import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';
import { RodapeModule } from '../componentes/rodape/rodape.module';


@NgModule({
  declarations: [ListaAnimaisComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CabecalhoModule,
    RodapeModule
  ]
})
export class AnimaisModule { }
