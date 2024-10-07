import { Component } from '@angular/core';
import { GlobalService } from '../shared/service/global.service';
import { NotificationService } from '../shared/notification/service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent {
  sidebarOpen = true;
  settingsOpen = false;
  constructor( private globalService: GlobalService, private notificationService: NotificationService ) { }

  ngOnInit() {
    this.globalService.getSidebarVisible().subscribe((visible) => {
      this.sidebarOpen = visible;
    });

    this.globalService.getSettingsVisible().subscribe((visible) => {
      this.settingsOpen = visible;
    });
  }
}
