import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoTarjetaComponent } from './producto-tarjeta.component';

describe('ProductoTarjetaComponent', () => {
  let component: ProductoTarjetaComponent;
  let fixture: ComponentFixture<ProductoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoTarjetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
