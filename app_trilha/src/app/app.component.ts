import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Trilhas e etc...', url: 'home', icon: 'map' },
    { title: 'Minhas Trilhas', url: 'list', icon: 'trail-sign' },
  ];
  
}
