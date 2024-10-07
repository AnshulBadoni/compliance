import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../theme/theme.service';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  
  isScrolled = false;
  sidebarOpen = true;
  settingsOpen = false;
  theme:boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  constructor(private themeService: ThemeService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.theme = this.themeService.isDarkMode();
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
    this.theme = this.themeService.isDarkMode();
  }

  toggleSidebar() {
    this.globalService.toggleSidebar();
    this.sidebarOpen = this.globalService.getSidebarState();
  }

  toggleSettings() {
    this.globalService.toggleSettings();
    this.settingsOpen = this.globalService.getSettingsState();
  }

}
