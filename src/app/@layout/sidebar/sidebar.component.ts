import {Component, OnInit} from '@angular/core';

interface IMenuItem {
  description: string;
  icon: string;
  color: string;
  link: string;
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
  }];
  settingsItem: IMenuItem = <IMenuItem>{
    link: "",
    description: "Configurações",
    color: "#fff",
    icon: "bi bi-gear-fill"
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
