import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSportComponent } from './home-sport.component';

describe('HomeSportComponent', () => {
  let component: HomeSportComponent;
  let fixture: ComponentFixture<HomeSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
