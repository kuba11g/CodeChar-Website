import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagrambotzFormComponent } from './instagrambotz-form.component';

describe('InstagrambotzFormComponent', () => {
  let component: InstagrambotzFormComponent;
  let fixture: ComponentFixture<InstagrambotzFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagrambotzFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagrambotzFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
