import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricPulseComponent } from './electric-pulse.component';

describe('ElectricPulseComponent', () => {
  let component: ElectricPulseComponent;
  let fixture: ComponentFixture<ElectricPulseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricPulseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
