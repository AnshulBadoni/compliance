import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private sidebarVisible = new BehaviorSubject<boolean>(true);
  private settingsVisible = new BehaviorSubject<boolean>(false);

  toggleSidebar() {
    this.sidebarVisible.next(!this.sidebarVisible.getValue());
  }

  getSidebarVisible() {
    return this.sidebarVisible.asObservable();
  }

  getSidebarState() {
    return this.sidebarVisible.getValue();
  }

  toggleSettings() {
    this.settingsVisible.next(!this.settingsVisible.getValue());
  }

  getSettingsVisible() {
    return this.settingsVisible.asObservable();
  }

  getSettingsState() {
    return this.settingsVisible.getValue();
  }
}