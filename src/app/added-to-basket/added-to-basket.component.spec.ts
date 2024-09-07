import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedToBasketComponent } from './added-to-basket.component';

describe('AddedToBasketComponent', () => {
  let component: AddedToBasketComponent;
  let fixture: ComponentFixture<AddedToBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddedToBasketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedToBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
