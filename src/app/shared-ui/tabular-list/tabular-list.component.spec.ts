import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularListComponent } from './tabular-list.component';

describe('TabularListComponent', () => {
  let component: TabularListComponent;
  let fixture: ComponentFixture<TabularListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabularListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
