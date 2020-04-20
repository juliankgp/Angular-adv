import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _settService: SettingsService) { }

  ngOnInit() {
    this.ponerCheck();
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this._settService.aplicarTema(tema);

  }

  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');

  }

  ponerCheck() {
    const selectores: any = document.getElementsByClassName('selector');

    const tema = this._settService.ajustes.tema;

    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
