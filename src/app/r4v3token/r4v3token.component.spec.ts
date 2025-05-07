import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R4v3tokenComponent } from './r4v3token.component';

describe('R4v3tokenComponent', () => {
  let component: R4v3tokenComponent;
  let fixture: ComponentFixture<R4v3tokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R4v3tokenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(R4v3tokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
