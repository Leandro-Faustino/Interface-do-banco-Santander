import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCartaoComponent } from './pedido-cartao.component';

describe('PedidoCartaoComponent', () => {
  let component: PedidoCartaoComponent;
  let fixture: ComponentFixture<PedidoCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
