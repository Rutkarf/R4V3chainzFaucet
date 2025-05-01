import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauBlockchainComponent } from './bandeau-blockchain.component';

describe('BandeauBlockchainComponent', () => {
  let component: BandeauBlockchainComponent;
  let fixture: ComponentFixture<BandeauBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandeauBlockchainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandeauBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
