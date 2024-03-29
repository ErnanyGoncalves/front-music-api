import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsViewComponent } from './albums-view.component';

describe('AlbumsViewComponent', () => {
  let component: AlbumsViewComponent;
  let fixture: ComponentFixture<AlbumsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
