import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../@theme/theme.service";
import {DARK, LIGHT} from "../../@theme/theme";

interface IMenuItem {
  description: string;
  icon: string;
  color: string;
  link?: string;
  action?: Function;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: IMenuItem[] = [{
    icon: "bi bi-calendar-check",
    color: "#fff",
    link: "",
    description: "Tarefas"
  },
  ];

  settingsItems: IMenuItem[] = [
    {
      link: "",
      description: "Tema",
      color: "#fff",
      icon: "bi bi-moon-fill",
      action: () => {
        this.themeService.getActiveTheme() === LIGHT
          ? this.themeService.setActiveTheme(DARK)
          : this.themeService.setActiveTheme(LIGHT);
      }
    },
    {
      description: "Configurações",
      color: "#fff",
      icon: "bi bi-gear-fill",
    }
  ]

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
  }

  changeTheme(action: any): void {
    action();
  }
}
