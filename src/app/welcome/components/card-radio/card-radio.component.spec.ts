import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRadioComponent } from './card-radio.component';

describe('CardRadioComponent', () => {
  let component: CardRadioComponent;
  let fixture: ComponentFixture<CardRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRadioComponent]
    });
    fixture = TestBed.createComponent(CardRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
