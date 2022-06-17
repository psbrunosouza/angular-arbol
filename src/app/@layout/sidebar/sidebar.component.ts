import {Component, OnInit} from '@angular/core';

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
    icon: "fas fa-calendar",
    color: "#fff",
    link: "",
    description: "Tarefas"
  },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
