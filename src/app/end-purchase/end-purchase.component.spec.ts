import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndPurchaseComponent } from './end-purchase.component';

describe('EndPurchaseComponent', () => {
  let component: EndPurchaseComponent;
  let fixture: ComponentFixture<EndPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndPurchaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
