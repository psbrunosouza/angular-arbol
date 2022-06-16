import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolCheckboxComponent } from './arbol-checkbox.component';

describe('ArbolCheckboxComponent', () => {
  let component: ArbolCheckboxComponent;
  let fixture: ComponentFixture<ArbolCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbolCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbolCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
