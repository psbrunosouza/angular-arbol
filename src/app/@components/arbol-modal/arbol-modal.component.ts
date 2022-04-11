import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'ab-modal',
  templateUrl: './arbol-modal.component.html',
  styleUrls: ['./arbol-modal.component.scss']
})
export class ArbolModalComponent implements OnInit {

  @Input() isOpen: boolean = false;

  @Input() isCompact: boolean = true;

  @Input() size: 'large' | 'small' | 'medium' = 'medium';

  @ViewChild('modal') modal: ElementRef;

  get getSelectedSize(): string {
    return `ab-modal-${this.size}`
  }

  constructor(private renderer: Renderer2) {

  }

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
