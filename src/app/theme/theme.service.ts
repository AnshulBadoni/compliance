import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode: boolean = false;

  constructor(private cookieService: CookieService) {
    this.loadTheme();
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    this.updateBodyClass();
    this.cookieService.set('dark-mode', JSON.stringify(this.darkMode));
  }

  private loadTheme(): void {
    const storedTheme = this.cookieService.get('dark-mode');
    this.darkMode = storedTheme === 'true';
    this.updateBodyClass();
  }
  
  private updateBodyClass(): void {
    if (this.darkMode) {
      document.documentElement.classList.add('dark'); // Update html class
    } else {
      document.documentElement.classList.remove('dark');
    }
  }  

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
