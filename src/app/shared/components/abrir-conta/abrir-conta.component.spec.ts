import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirContaComponent } from './abrir-conta.component';

describe('AbrirContaComponent', () => {
  let component: AbrirContaComponent;
  let fixture: ComponentFixture<AbrirContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrirContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrirContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
