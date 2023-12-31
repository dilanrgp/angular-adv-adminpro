import { Component, inject } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu.interface';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  private sidebarService = inject(SidebarService);
  public menuItems: Menu[] = [];

  constructor(){
    this.menuItems = this.sidebarService.getMenu();
  }

}
