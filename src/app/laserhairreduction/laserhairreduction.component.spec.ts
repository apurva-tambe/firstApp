import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserhairreductionComponent } from './laserhairreduction.component';


describe('LaserhairreductionComponent', () => {
  let component: LaserhairreductionComponent;
  let fixture: ComponentFixture<LaserhairreductionComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaserhairreductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaserhairreductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
