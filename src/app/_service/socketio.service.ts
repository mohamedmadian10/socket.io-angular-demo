import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket;

  constructor() { }
  setupSocketConnection(){
    this.socket = io(environment.SOCKET_ENDPOINT);
    //emit event
    this.socket.emit('my message','saba7 elfol everybody grom angular app');
    //add an listener for my broadcast event on our Angular app
    this.socket.on('my broadcast',(data:string)=>{
      console.log(data)
    })
  }
}
