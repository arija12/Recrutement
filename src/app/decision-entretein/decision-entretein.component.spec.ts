import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionEntreteinComponent } from './decision-entretein.component';

describe('DecisionEntreteinComponent', () => {
  let component: DecisionEntreteinComponent;
  let fixture: ComponentFixture<DecisionEntreteinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionEntreteinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionEntreteinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
