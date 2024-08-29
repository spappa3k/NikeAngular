import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideOfListComponent } from './side-of-list.component';

describe('SideOfListComponent', () => {
  let component: SideOfListComponent;
  let fixture: ComponentFixture<SideOfListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideOfListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideOfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
