import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpottybottyFormComponent } from './spottybotty-form.component';

describe('SpottybottyFormComponent', () => {
  let component: SpottybottyFormComponent;
  let fixture: ComponentFixture<SpottybottyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpottybottyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpottybottyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
