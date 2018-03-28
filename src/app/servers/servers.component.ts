import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true}, (2000)
    )
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  //Used on event data binding.
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }  

  //Exercicio 2 
  //username = '';

  // usernameIsNull() {
  //   if(this.username === '')
  //     return true;
  //   else
  //     return false;
  // }

  // resetUserName() {
  //   this.username = '';
  // }

}
