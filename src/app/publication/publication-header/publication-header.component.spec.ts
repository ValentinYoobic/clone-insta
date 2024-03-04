import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationHeaderComponent } from './publication-header.component';

describe('PublicationHeaderComponent', () => {
  let component: PublicationHeaderComponent;
  let fixture: ComponentFixture<PublicationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
