import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendorComponent } from './calendor.component';

describe('CalendorComponent', () => {
  let component: CalendorComponent;
  let fixture: ComponentFixture<CalendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
