import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable({
    providedIn: 'root'
})
export class SocketService {
  private url = window.location.origin;
  private socketio;

  joinRoom(user_id : string) {
    this.socketio.emit('join_room', user_id);
  }

  getMessages() {
    return new Observable(observer => {
      this.socketio = io(this.url, {query:1});
      this.socketio.on('notification', (data) => {
        observer.next(data);
      });
      return () => {
        this.socketio.disconnect();
      };
    });
  }
}