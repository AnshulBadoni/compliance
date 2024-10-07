import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headerbox',
  templateUrl: './headerbox.component.html',
  styleUrl: './headerbox.component.scss'
})
export class HeaderboxComponent {
  @Input() type: string = '';
  @Input() message: string = '';

  
}
