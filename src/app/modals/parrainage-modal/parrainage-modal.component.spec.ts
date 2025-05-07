import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrainageModalComponent } from './parrainage-modal.component';

describe('ParrainageModalComponent', () => {
  let component: ParrainageModalComponent;
  let fixture: ComponentFixture<ParrainageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParrainageModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParrainageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
