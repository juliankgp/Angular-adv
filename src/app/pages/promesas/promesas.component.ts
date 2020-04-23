import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contadorSegundos().then(
      mensaje => console.log('Termino!', mensaje)
    ).catch(
      error => console.error('Error en la promesa', error)
    );

  }

  ngOnInit() {
  }

  contadorSegundos(): Promise<boolean> {

    return new Promise((resolve, reject) => {
      let contador = 0;

      const intervalo = setInterval(() => {

        contador += 1;
        console.log(contador);

        if (contador === 5) {
          resolve(true);
          // reject('Solo un error');
          clearInterval(intervalo);
        }

      }, 1000);
    });

  }

}
