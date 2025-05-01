import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainVisuComponent } from './blockchain-visu.component';

describe('BlockchainVisuComponent', () => {
  let component: BlockchainVisuComponent;
  let fixture: ComponentFixture<BlockchainVisuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockchainVisuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockchainVisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
