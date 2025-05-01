import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCashoutComponent } from './last-cashout.component';

describe('LastCashoutComponent', () => {
  let component: LastCashoutComponent;
  let fixture: ComponentFixture<LastCashoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastCashoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastCashoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
