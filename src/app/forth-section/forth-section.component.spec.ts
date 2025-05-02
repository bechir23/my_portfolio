import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthSectionComponent } from './forth-section.component';

describe('ForthSectionComponent', () => {
  let component: ForthSectionComponent;
  let fixture: ComponentFixture<ForthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForthSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
