import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionModalComponent } from './connexion-modal.component';

describe('ConnexionModalComponent', () => {
  let component: ConnexionModalComponent;
  let fixture: ComponentFixture<ConnexionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
