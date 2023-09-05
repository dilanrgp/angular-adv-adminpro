import { Component, inject } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions(): any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent {

  public settingsService = inject(SettingsService);

  ngOnInit(): void {
    
    customInitFunctions();
    this.settingsService.getDataTheme();
  }
  
}
