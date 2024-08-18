import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShoesComponent } from './home-shoes.component';

describe('HomeShoesComponent', () => {
  let component: HomeShoesComponent;
  let fixture: ComponentFixture<HomeShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeShoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
