import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPipe';

  servers = [
    {
      instanceType: 'medium',
      name: 'Production server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'critical',
      started: new Date(15, 9, 2012)
    },
    {
      instanceType: 'small',
      name: 'Development server',
      status: 'warning',
      started: new Date(11, 1, 2001)
    },
    {
      instanceType: 'medium',
      name: 'Web server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];

  filteredStatus = '';

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    }
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'large',
      name: 'Web server',
      status: 'warning',
      started: new Date(26, 3, 2000)
    })
  }
}
