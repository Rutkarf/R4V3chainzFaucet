import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R4v3BlockchainzComponent } from './r4v3-blockchainz.component';

describe('R4v3BlockchainzComponent', () => {
  let component: R4v3BlockchainzComponent;
  let fixture: ComponentFixture<R4v3BlockchainzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R4v3BlockchainzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(R4v3BlockchainzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
