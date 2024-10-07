import { Component, ChangeDetectorRef } from '@angular/core';
import { navLinks } from '../../constant';
import { navlinkProps } from '../../interfaces';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  navLinks: navlinkProps[] = navLinks;

  constructor(private cdRef: ChangeDetectorRef, public router: Router, private sanitizer: DomSanitizer) {
    this.navLinks = navLinks.map(link => ({
      ...link,
      icon: link.icon ? this.sanitizer.bypassSecurityTrustHtml(link.icon) : undefined
    }));
  }
}