import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {


    // Our constructor calls our wsService connect method
    constructor() {

    }

    check_websocket() {
        var socket = io.connect('http://' + document.domain + ':' + location.port);
        socket.on('my notification', function (msg) {
            console.log(msg);
            alert("Hello world");
        })
    }

}