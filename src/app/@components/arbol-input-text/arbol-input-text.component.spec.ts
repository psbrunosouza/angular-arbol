import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolInputTextComponent } from './arbol-input-text.component';

describe('ArbolInputTextComponent', () => {
  let component: ArbolInputTextComponent;
  let fixture: ComponentFixture<ArbolInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbolInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
