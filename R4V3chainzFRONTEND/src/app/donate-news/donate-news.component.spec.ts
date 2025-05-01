import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateNewsComponent } from './donate-news.component';

describe('DonateNewsComponent', () => {
  let component: DonateNewsComponent;
  let fixture: ComponentFixture<DonateNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
