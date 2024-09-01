import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleOfSearchComponent } from './title-of-search.component';

describe('TitleOfSearchComponent', () => {
  let component: TitleOfSearchComponent;
  let fixture: ComponentFixture<TitleOfSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleOfSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleOfSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
