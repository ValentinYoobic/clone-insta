import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBannerComponent } from './story-banner.component';

describe('StoryBannerComponent', () => {
  let component: StoryBannerComponent;
  let fixture: ComponentFixture<StoryBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
