import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4t3rfaucetComponent } from './m4t3rfaucet.component';

describe('M4t3rfaucetComponent', () => {
  let component: M4t3rfaucetComponent;
  let fixture: ComponentFixture<M4t3rfaucetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [M4t3rfaucetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M4t3rfaucetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
