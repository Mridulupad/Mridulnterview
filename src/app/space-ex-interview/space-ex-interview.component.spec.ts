import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceExInterviewComponent } from './space-ex-interview.component';

describe('SpaceExInterviewComponent', () => {
  let component: SpaceExInterviewComponent;
  let fixture: ComponentFixture<SpaceExInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceExInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceExInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
