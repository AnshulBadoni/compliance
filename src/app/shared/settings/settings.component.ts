import { Component } from '@angular/core';
import { paletteColors } from '../../constant';
import { paletteColorsProps } from '../../interfaces';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  paletteColors: paletteColorsProps[] = paletteColors;
}
