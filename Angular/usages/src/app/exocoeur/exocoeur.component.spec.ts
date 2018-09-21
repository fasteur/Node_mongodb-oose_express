import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExocoeurComponent } from './exocoeur.component';

describe('ExocoeurComponent', () => {
  let component: ExocoeurComponent;
  let fixture: ComponentFixture<ExocoeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExocoeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExocoeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
