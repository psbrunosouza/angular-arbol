import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenuService} from "../@data/services/subjects/menu/menu.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  @ViewChild('menuBody') menuBody: ElementRef<HTMLDivElement>

  menuState: boolean = false;

  get getMenuState(): string{
    return this.menuState ? 'flex' : 'hidden';
  }

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.openMenuState$.subscribe((state) => {
      this.menuState = state;
    });

    addEventListener('click', (ev) => {
      if(ev.target === this.menuBody.nativeElement){
        this.menuService.setMenuState = !this.menuState;
      }
    })
  }

}
