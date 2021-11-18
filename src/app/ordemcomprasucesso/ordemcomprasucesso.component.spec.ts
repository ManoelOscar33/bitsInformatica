import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemcomprasucessoComponent } from './ordemcomprasucesso.component';

describe('OrdemcomprasucessoComponent', () => {
  let component: OrdemcomprasucessoComponent;
  let fixture: ComponentFixture<OrdemcomprasucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemcomprasucessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemcomprasucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
