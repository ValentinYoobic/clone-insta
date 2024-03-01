import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderArrowComponent } from './slider-arrow.component';

describe('SliderArrowComponent', () => {
  let component: SliderArrowComponent;
  let fixture: ComponentFixture<SliderArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderArrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
