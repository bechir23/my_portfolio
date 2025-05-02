import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidframeComponent } from './androidframe.component';

describe('AndroidframeComponent', () => {
  let component: AndroidframeComponent;
  let fixture: ComponentFixture<AndroidframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndroidframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndroidframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
