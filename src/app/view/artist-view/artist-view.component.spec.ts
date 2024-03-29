import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistViewComponent } from './artist-view.component';

describe('ArtistViewComponent', () => {
  let component: ArtistViewComponent;
  let fixture: ComponentFixture<ArtistViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
