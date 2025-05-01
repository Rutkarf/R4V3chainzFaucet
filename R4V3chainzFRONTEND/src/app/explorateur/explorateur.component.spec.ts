import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorateurComponent } from './explorateur.component';

describe('ExplorateurComponent', () => {
  let component: ExplorateurComponent;
  let fixture: ComponentFixture<ExplorateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorateurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
