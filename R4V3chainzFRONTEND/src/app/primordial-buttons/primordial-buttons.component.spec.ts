import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimordialButtonsComponent } from './primordial-buttons.component';

describe('PrimordialButtonsComponent', () => {
  let component: PrimordialButtonsComponent;
  let fixture: ComponentFixture<PrimordialButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimordialButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimordialButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
