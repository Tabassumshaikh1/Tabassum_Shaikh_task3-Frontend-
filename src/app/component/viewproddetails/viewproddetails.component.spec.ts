import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproddetailsComponent } from './viewproddetails.component';

describe('ViewproddetailsComponent', () => {
  let component: ViewproddetailsComponent;
  let fixture: ComponentFixture<ViewproddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewproddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
