import { Component } from '@angular/core';
import { statsCardData } from '../../constant';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  stats:any = statsCardData;

  constructor(private sanitizer: DomSanitizer) {
    this.stats = statsCardData.map(link => ({
      ...link,
      icon: link.icon ? this.sanitizer.bypassSecurityTrustHtml(link.icon) : undefined
    }));
  }

}
