import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadeirasGamerComponent } from './cadeiras-gamer.component';

describe('CadeirasGamerComponent', () => {
  let component: CadeirasGamerComponent;
  let fixture: ComponentFixture<CadeirasGamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadeirasGamerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadeirasGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
