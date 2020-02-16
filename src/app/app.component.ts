import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title1: string = 'Angular-In-Examples';
  title2: string = 'Dyrektywa ngSwitch *ngSwitchCase *ngSwitchDefault';

  books: any[] = [
    {author: 'Orhan Pamuk', title: 'Dziwna myśl w mej łowie', link: '/assets/Orhan_Pamuk.PNG'},
    {author: 'Olga Tokarczuk', title: 'Księgi Jakubowe', link: '/assets/Olga_Tokarczuk.PNG'},
    {author: 'Isaac Bashevies Singer', title: 'Sztukmistrz z Lublina', link: '/assets/Isaac_Bashevies_Singer.PNG'},
    {author: 'Michel Houellebecq', title: 'Mapa i terytorium', link: '/assets/Michel_Houellebecq.PNG'},
    {author: 'Mariusz Szczygieł', title: 'Gottland', link: '/assets/Mariusz_Szczygieł.PNG'},
    {author: 'Marcel Proust', title: 'W poszukiwaniu straconego czasu', link: '/assets/Marcel_Proust.PNG'},
    {author: 'Szczepan Twardoch', title: 'Morfina', link: '/assets/Szczepan_Twardoch.PNG'}
  ];
}
