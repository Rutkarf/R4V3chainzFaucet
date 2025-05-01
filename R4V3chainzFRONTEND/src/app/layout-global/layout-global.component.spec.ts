import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGlobalComponent } from './layout-global.component';

describe('LayoutGlobalComponent', () => {
  let component: LayoutGlobalComponent;
  let fixture: ComponentFixture<LayoutGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutGlobalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
