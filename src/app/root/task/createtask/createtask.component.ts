import { Component } from '@angular/core';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrl: './createtask.component.scss'
})
export class CreatetaskComponent {

  step:number = 1

  constructor() { }

  toggleNext(){
    if(this.step === 4) this.step = 1
    else this.step += 1;
  }
  toggleBack(){
    if(this.step === 1) this.step = 3
    else this.step -= 1;
  }
  toggleReset(){
    this.step = 1;
  }

  toggleSubmit() {
    this.step=1
    // this.notificationService.showNotification('Task Saved', 'Task has been saved succesfully','success');
  }
}
