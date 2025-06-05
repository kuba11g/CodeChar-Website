import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessbotFormComponent } from './messbot-form.component';

describe('MessbotFormComponent', () => {
  let component: MessbotFormComponent;
  let fixture: ComponentFixture<MessbotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessbotFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessbotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
