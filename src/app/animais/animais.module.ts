import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';
import { CartaoModule } from './../componentes/cartao/cartao.module';
import { RodapeModule } from '../componentes/rodape/rodape.module';
import { AnimaisRoutingModule } from './animais-routing.module';
import { AnimalComponent } from './animal/animal.component';


@NgModule({
  declarations: [ListaAnimaisComponent, AnimalComponent, GradeFotosAnimaisComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CabecalhoModule,
    RodapeModule,
    CartaoModule
  ]
})
export class AnimaisModule { }
