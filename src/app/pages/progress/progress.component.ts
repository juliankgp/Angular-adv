import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentajeBlue: number = 50;
  porcentajeGreen: number = 80;

  constructor() { }

  ngOnInit() {
  }




}
