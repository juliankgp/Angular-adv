import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', { static: false }) txtProgress: ElementRef;

  @Input('titulo') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();


  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.porcentaje);

  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.porcentaje);
  }


  cambiarValor(valor: number) {

    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }


    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();

  }

  onChanges(e: number) {

    if (e >= 100) {
      this.porcentaje = 100;
    } else if (e <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = e;
    }

    this.txtProgress.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);

  }
}
