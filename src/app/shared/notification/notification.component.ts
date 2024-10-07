import { Component, OnInit } from '@angular/core';
import { NotificationService, Notification } from './service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notification$.subscribe(notifications => {
      this.notifications = notifications;
      console.log(this.notifications);
      notifications.forEach(notification => {
        setTimeout(() => {
          this.removeNotification(notification);
        }, 3800); // Automatically hide after 3.5 seconds
      });
    });

  }

  removeNotification(notification: Notification) {
    this.notificationService.hideNotification(notification);
  }
}

// old code 
// import { Component, OnInit } from '@angular/core';
// import { NotificationService } from './service/notification.service';

// @Component({
//   selector: 'app-notification',
//   templateUrl: './notification.component.html',
//   styleUrls: ['./notification.component.scss']
// })
// export class NotificationComponent implements OnInit {

//   notificationHeader: string = '';
//   notificationMessage: string = '';
//   notificationType: string = '';
//   isVisible: boolean = false;

//   constructor(private notificationService: NotificationService) {}

//   ngOnInit() {
//     this.notificationService.notification$.subscribe(notification => {
//       this.notificationHeader = notification.heading;
//       this.notificationMessage = notification.message;
//       this.notificationType = notification.type;
//       this.isVisible = notification.message !== '';

//       if (this.isVisible) {
//         setTimeout(() => this.isVisible = false, 3500);
//       }
//     });
//   }

//   hideNotification() {
//     this.notificationMessage = '';
//     this.isVisible = false;
//   }
// }

