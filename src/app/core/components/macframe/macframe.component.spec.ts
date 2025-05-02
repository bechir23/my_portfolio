import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacframeComponent } from './macframe.component';

describe('MacframeComponent', () => {
  let component: MacframeComponent;
  let fixture: ComponentFixture<MacframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
