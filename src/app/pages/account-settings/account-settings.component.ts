import { Component, inject } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent {

  private settingsService = inject(SettingsService);

  ngOnInit(): void {
    
    this.settingsService.checkCurrentTheme();
    
  }
  
  changeTheme( theme: string ) {

    this.settingsService.changeTheme( theme );

  }

}
