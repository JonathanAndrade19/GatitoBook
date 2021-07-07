import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { usuarioSenhaIguaisValidator } from './usuarios-senhas-iguais.validator';
import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { minusculoValidator } from './minusculo.validator';
import { tamanhoSenha } from './senha.validator';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioFrom!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExisteService: UsuarioExisteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.novoUsuarioFrom = this.formBuilder.group({
      userName: ['', [minusculoValidator], [this.usuarioExisteService.usuarioJaExite()]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [tamanhoSenha]],
    },
      {
       validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  cadastrar() {
    if (this.novoUsuarioFrom.valid) {
      const novoUsuario = this.novoUsuarioFrom.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario)
        .subscribe(() => {
          this.router.navigate(['']);
        },
          (error) => {
            console.log(error);
          }
        );
    }
  }


}
