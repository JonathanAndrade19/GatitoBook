import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { minusculoValidator } from './minusculo.validator';
import { tamanhoSenha } from './senha.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioFrom!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService
  ) { }

  ngOnInit(): void {
    this.novoUsuarioFrom = this.formBuilder.group({
      userName: ['', [minusculoValidator]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [tamanhoSenha]],
    });
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioFrom.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }

}
