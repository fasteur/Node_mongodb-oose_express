import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExomajusculeComponent } from './exomajuscule.component';

describe('ExomajusculeComponent', () => {
  let component: ExomajusculeComponent;
  let fixture: ComponentFixture<ExomajusculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExomajusculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExomajusculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
