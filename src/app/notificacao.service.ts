import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  notificar(mensagem: string){
    return this.snackBar.open(mensagem, "Ok", {
      duration: 2000,
      verticalPosition: "bottom",
      horizontalPosition: "center"
    })
  }
}
