import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopUsComponent } from './shop-us.component';

describe('ShopUsComponent', () => {
  let component: ShopUsComponent;
  let fixture: ComponentFixture<ShopUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopUsComponent]
    });
    fixture = TestBed.createComponent(ShopUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
