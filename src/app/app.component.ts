import {Component, OnInit} from '@angular/core';
import {ThemeService} from "./@theme/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-arbol';

  constructor(private themeService: ThemeService) {

  }

  ngOnInit(): void {
    this.themeService.init();
  }
}
