import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesDetailsComponent } from './shoes-details.component';

describe('ShoesDetailsComponent', () => {
  let component: ShoesDetailsComponent;
  let fixture: ComponentFixture<ShoesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
