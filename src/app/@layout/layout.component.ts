import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenuService} from "../@data/services/subjects/menu/menu.service";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('slide', [
      state('left', style({
        transform: 'translateX(-100%)',
        visibility: 'hidden'
      })),
      state('right', style({
        transform: 'translateX(0)',
        visibility: 'visible'
      })),
      transition('left => right', [
        animate('0.2s')
      ]),
      transition('right => left', [
        animate('0.2s')
      ]),
    ]),

    trigger('slidebg', [
      state('left', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      state('right', style({
        opacity: 0.6,
        visibility: 'visible'
      })),
      transition('left => right', [
        animate('0.2s')
      ]),
      transition('right => left', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class LayoutComponent implements OnInit {

  @ViewChild('menuBody') menuBody: ElementRef<HTMLDivElement>

  menuState: boolean = false;

  get menuStateTransition(): string {
    return this.menuState ? 'right' : 'left';
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
