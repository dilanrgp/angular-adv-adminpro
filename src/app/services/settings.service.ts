import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {}

  getDataTheme() {
    let theme = localStorage.getItem('theme') || 'default-dark';
    let url = `./assets/css/colors/${ theme }.css`;
    this.linkTheme?.setAttribute('href', url);
  }

  changeTheme( theme: string ) {

    const url = `./assets/css/colors/${ theme }.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', theme);

    this.checkCurrentTheme();

  }

  checkCurrentTheme() {

    const links = document.querySelectorAll('#themecolors .selector');
    const themeSelected = localStorage.getItem('theme') || 'default';

    links.forEach(element => {

      element.classList.remove('working');
      let elementTheme = element.getAttribute('data-theme');

      if (themeSelected === elementTheme) {
        element.classList.add('working');
      }
      
    });

    
  }



}
