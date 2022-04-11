import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolContentHeaderComponent } from './arbol-content-header.component';

describe('ArbolContentHeaderComponent', () => {
  let component: ArbolContentHeaderComponent;
  let fixture: ComponentFixture<ArbolContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbolContentHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
