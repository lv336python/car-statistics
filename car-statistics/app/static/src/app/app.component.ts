import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private notification: NotificationService){ }

  ngOnInit() {
    // this.notification.messages.subscribe(msg => {
    //   console.log(msg);
    // })
  }

  // sendMessage() {
    // this.notification.sendMsg("Test Message");
  // }

}


