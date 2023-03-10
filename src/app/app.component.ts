import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  stories = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Project',
      route: '/project',
    },
  ];
}
