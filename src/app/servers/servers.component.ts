import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styles: [`
        .logItem5 {
            color: white;
        }
    `]

})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];
  serverPassword = false;
  buttonLogs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000); 
   }

  ngOnInit() {
    
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  showPassword(event: Event) {
    if (this.serverPassword == false) {
      this.serverPassword = true;
    } else {
      this.serverPassword = false;
    }

    var currentdate = new Date();
    console.log(currentdate);

    this.buttonLogs.push(currentdate);
  }

  
}
