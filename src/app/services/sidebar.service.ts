import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private menu: Menu[] = [
    { 
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Graficas', url: 'grafica1' },
      ]
    },
  ]

  constructor() { }

  getMenu(){
    return this.menu;
  }
}
