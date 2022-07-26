import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'ab-modal',
  templateUrl: './arbol-modal.component.html',
  styleUrls: ['./arbol-modal.component.scss']
})
export class ArbolModalComponent implements OnInit {

  isOpen: boolean = false;

  get getIsOpen(): string {
    return this.isOpen ? 'flex' : "hidden"
  }

  @ViewChild('modal') modal: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.listen("window", "click", (e: Event) => {
      if(e.target === this.modal.nativeElement ){
        this.isOpen = false;
      }
    })
  }

  changeModalVisibility(): void {
    this.isOpen = !this.isOpen;
  }
}
