import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  heading: string;
  message: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifications: Notification[] = [];
  private notificationSubject = new BehaviorSubject<Notification[]>(this.notifications);
  notification$ = this.notificationSubject.asObservable();

  showNotification(heading: string, message: string, type: string) {
    // this.notifications.push({ heading, message, type });
    console.log(heading, message, type);
    this.notifications.unshift({ heading, message, type });
    this.notificationSubject.next([...this.notifications]);
  }

  hideNotification(notification: Notification) { 
    this.notifications = this.notifications.filter(n => n !== notification);
    this.notificationSubject.next([...this.notifications]);
  }
}
  


// old code

// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

// export interface Notification {
//   heading: string;
//   message: string;
//   type: string; // Ensure this is 'string' in the service
// }

// @Injectable({
//   providedIn: 'root',  // Ensure this service is provided in the root or a shared module
// })
// export class NotificationService {
//   private notificationSubject = new Subject<Notification>();
//   notification$ = this.notificationSubject.asObservable();

//   showNotification(heading: string, message: string, type: string) {
//     this.notificationSubject.next({ heading ,message, type });
//   }`

//   hideNotification() {
//     this.notificationSubject.next({ heading: '', message: '', type: '' });
//   }
// }
