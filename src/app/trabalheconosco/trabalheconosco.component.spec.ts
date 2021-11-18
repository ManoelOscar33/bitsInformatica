import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalheconoscoComponent } from './trabalheconosco.component';

describe('TrabalheconoscoComponent', () => {
  let component: TrabalheconoscoComponent;
  let fixture: ComponentFixture<TrabalheconoscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabalheconoscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalheconoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
