import { AbstractControl } from '@angular/forms';

export function tamanhoSenha(control: AbstractControl) {
    const valorSenha = control.value;
    // const caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
    if ( valorSenha.length < 6 ) {
        return { quantidade: true };
    } else {
        return null;
    }
}