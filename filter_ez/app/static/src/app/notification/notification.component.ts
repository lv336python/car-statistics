import {Component, OnDestroy, OnInit} from '@angular/core';
import {SocketService} from "../_services/socket.service";
import {AuthGuardService} from "../auth.guard";
import {AuthService} from "../_services/auth.service";
import { trigger, state, style, animate, transition  } from '@angular/animations';



@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
    animations: [
    trigger('changeState', [
      state('state1', style({
        transform: 'scale(1)'
      })),
      state('state2', style({
        backgroundColor: 'red',
        transform: 'scale(1.3)'
      })),
      transition('*=>state1', animate('300ms')),
      transition('*=>state2', animate('600ms'))
    ])
  ]
})

export class NotificationComponent implements OnInit, OnDestroy {


    constructor(private socket: SocketService) {}

    messages = [];
    connection;
    toState = [];
    count = 0;


    changeState(index: number): void{
        this.toState[index] = 'state2';
        setTimeout(() => {
            this.toState[index] = 'state1'
        }, 10000)
    }

    changeState_back(index: number): void{
        this.toState[index] = 'state1';
    }


    ngOnInit() {
        console.log("Notification Created");
        this.socket.connect();
        this.connection = this.socket.getNotification()
            .subscribe(
                data => {
                    let elem = {'id': this.count,
                                'msg': data['data'],
                                'status': data['status'].toLowerCase()};

                    this.messages.push(elem);
                    setTimeout(() => {
                        this.removeMessage(this.count);
                    }, 10000);
                    this.count++;
                }
            );
    }


    removeMessage(id) {
        this.messages.forEach(function (elem, i, arr) {
            if (elem.id = id) {
                arr.splice(i, 1)
            }
        })
    }

    ngOnDestroy() {
        this.socket.disconnect();
        console.log("Notification destroyed");
    }


    removeNotification(element : Node, index: number) {
        element.parentElement.remove();
        this.messages.splice(index, 1);
        this.toState.splice(index, 1);
    }
}
