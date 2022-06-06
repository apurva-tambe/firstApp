import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemohairComponent } from './demohair.component';

describe('DemohairComponent', () => {
  let component: DemohairComponent;
  let fixture: ComponentFixture<DemohairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemohairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemohairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
